const { Component, useState, useEnv, onWillStart, onMounted, onWillUnmount } = owl;

export class StockInventoryProduct extends Component {
    static template = 'StockInventoryProduct';
    static props = ['id', 'locationId'];

    setup() {
        this.rpc     = useEnv().rpc;
        this.barcode = useEnv().barcode;
        this.alert   = useEnv().alert;
        this.state = useState({
            lines:    [],
            location: null,
            loading:  true,
            showOk:   false,
            activeId: null,
            qtyDir:   1,
        });
        this._scanned = {};
        this._onBarcode = (code) => {
            const line = this.state.lines.find(l =>
                (l.barcode && l.barcode === code) ||
                (l.default_code && l.default_code === code) ||
                l.product_id[1].toLowerCase().includes(code.toLowerCase())
            );
            if (!line) {
                this.alert.warning('Producto no encontrado');
                return;
            }
            this.state.activeId = line.id;
            this.state.qtyDir = 1;
            line.product_qty += 1;
            this._scanned[line.id] = (this._scanned[line.id] || 0) + 1;
        };
        onWillStart(() => this._load());
        onMounted(() => this.barcode.subscribe(this._onBarcode));
        onWillUnmount(() => this.barcode.unsubscribe(this._onBarcode));
    }

    async _load() {
        this.state.loading = true;
        const inventoryId = Number(this.props.id);
        const locationId  = Number(this.props.locationId);

        const locs = await this.rpc.searchRead(
            'stock.location',
            [['id', '=', locationId]],
            ['name', 'display_name'],
            { limit: 1 }
        );
        this.state.location = locs[0] || null;

        const lines = await this.rpc.searchRead(
            'stock.inventory.line',
            [['inventory_id', '=', inventoryId], ['location_id', '=', locationId]],
            ['product_id', 'product_qty', 'theoretical_qty', 'product_uom_id'],
            { limit: 200 }
        );

        const productIds = [...new Set(lines.map(l => l.product_id[0]))];
        let products = {};
        if (productIds.length) {
            const prods = await this.rpc.read('product.product', productIds, ['id', 'barcode', 'default_code']);
            for (const p of prods) products[p.id] = p;
        }

        for (const line of lines) {
            const prod = products[line.product_id[0]] || {};
            line.barcode       = prod.barcode || '';
            line.default_code  = prod.default_code || '';
            if (!(line.id in this._scanned)) this._scanned[line.id] = 0;
        }

        this.state.lines   = lines;
        this.state.loading = false;
    }

    get activeLine() {
        if (this.state.activeId === null) return null;
        return this.state.lines.find(l => l.id === this.state.activeId) || null;
    }

    get visibleLines() {
        if (this.state.showOk) return this.state.lines;
        return this.state.lines.filter(l => l.product_qty < l.theoretical_qty);
    }

    getScanned(lineId) {
        return this._scanned[lineId] || 0;
    }

    openModal(lineId) {
        this.state.activeId = lineId;
        this.state.qtyDir   = 1;
    }

    async closeModal() {
        const line = this.activeLine;
        if (line) {
            await this.rpc.write('stock.inventory.line', [line.id], { product_qty: line.product_qty });
        }
        this.state.activeId = null;
    }

    changeQty(qty) {
        const line = this.activeLine;
        if (!line) return;
        const delta  = qty * this.state.qtyDir;
        const newQty = Math.max(0, line.product_qty + delta);
        const actual = newQty - line.product_qty;
        line.product_qty = newQty;
        if (actual > 0) this._scanned[line.id] = (this._scanned[line.id] || 0) + actual;
    }

    toggleShowOk() { this.state.showOk = !this.state.showOk; }
    refresh()      { return this._load(); }
    back()         { location.hash = `stock/inventory/${this.props.id}`; }
}
