const { Component, useState, useEnv, onWillStart, onMounted, onWillUnmount } = owl;

export class MovIntDetail extends Component {
    static template = 'MovIntDetail';
    static props = ['code', 'id'];  // id = picking_id

    setup() {
        this.rpc     = useEnv().rpc;
        this.barcode = useEnv().barcode;
        this.alert   = useEnv().alert;

        this.state = useState({
            picking:        null,
            lines:          [],
            subLocs:        [],     // sub-ubicaciones hijo del destino
            step:           'locations',  // 'locations' | 'products' | 'leave'
            srcLocId:       null,
            activeId:       null,   // línea con modal abierto (paso productos)
            showLocPicker:  false,  // modal selector de destino (paso dejar)
            targetLocId:    null,   // destino elegido para todas las líneas
            targetLocName:  null,
            qtyDir:         1,
            loading:        true,
            saving:         false,
        });

        this._onBarcode = (code) => this._handleBarcode(code);
        onWillStart(() => this._load());
        onMounted(() => this.barcode.subscribe(this._onBarcode));
        onWillUnmount(() => this.barcode.unsubscribe(this._onBarcode));
    }

    async _load() {
        this.state.loading = true;
        const pickingId = parseInt(this.props.id);

        const [picking] = await this.rpc.read(
            'stock.picking', [pickingId],
            ['id', 'display_name', 'origin', 'state', 'location_id', 'location_dest_id']
        );
        this.state.picking = picking;

        const [lines, subLocs] = await Promise.all([
            this.rpc.searchRead(
                'stock.move.line',
                [['picking_id', '=', pickingId]],
                ['id', 'product_id', 'product_uom_qty', 'qty_done',
                 'location_id', 'location_dest_id', 'product_uom_id'],
                { limit: 300 }
            ),
            this.rpc.searchRead(
                'stock.location',
                [['id', 'child_of', picking.location_dest_id[0]]],
                ['id', 'name'],
                { limit: 0 }
            ),
        ]);

        const productIds = [...new Set(lines.map(l => l.product_id[0]))];
        if (productIds.length) {
            const prods = await this.rpc.read(
                'product.product', productIds, ['id', 'barcode', 'default_code']
            );
            const byId = Object.fromEntries(prods.map(p => [p.id, p]));
            lines.forEach(l => {
                const p        = byId[l.product_id[0]] || {};
                l.barcode      = p.barcode      || '';
                l.default_code = p.default_code || '';
                l.scanned_qty  = 0;
                l.ignore_move  = false;
            });
        }

        this.state.lines          = lines;
        this.state.subLocs        = subLocs;
        this.state.loading        = false;
        this.state.step           = 'locations';
        this.state.srcLocId       = null;
        this.state.targetLocId    = picking.location_dest_id[0];
        this.state.targetLocName  = picking.location_dest_id[1];
        this.state.showLocPicker  = false;
    }

    // ── Computed getters ───────────────────────────────────────────────────

    get pendingSourceLocs() {
        const seen = new Set();
        const locs = [];
        for (const l of this.state.lines) {
            if (l.qty_done + l.scanned_qty < l.product_uom_qty) {
                const id = l.location_id[0];
                if (!seen.has(id)) {
                    seen.add(id);
                    locs.push({ id, name: l.location_id[1] });
                }
            }
        }
        return locs;
    }

    get srcLines() {
        if (!this.state.srcLocId) return [];
        return this.state.lines.filter(l => l.location_id[0] === this.state.srcLocId);
    }

    get pendingLeaveLines() {
        return this.state.lines.filter(l => l.scanned_qty > 0);
    }

    get hasScanned() {
        return this.state.lines.some(l => l.scanned_qty > 0);
    }

    // ── Barcode handler ────────────────────────────────────────────────────

    _handleBarcode(code) {
        if (this.state.step === 'locations') {
            const loc = this.pendingSourceLocs.find(l =>
                l.name === code || l.name.toLowerCase().includes(code.toLowerCase())
            );
            if (loc) this.selectLocation(loc.id);
            else this.alert.warning(`Ubicación "${code}" no encontrada`);

        } else if (this.state.step === 'products') {
            if (code.length < 2) return;
            const line = this.srcLines.find(l =>
                (l.barcode && l.barcode === code) ||
                (l.default_code && l.default_code === code)
            );
            if (!line) { this.alert.error(`${code} no disponible`); return; }
            this.state.activeId = line.id;
            this._addQty(line.id, 1);

        } else if (this.state.step === 'leave') {
            const loc = this.state.subLocs.find(l =>
                l.name === code || l.name.toLowerCase().includes(code.toLowerCase())
            );
            if (!loc) { this.alert.warning(`Ubicación destino "${code}" no encontrada`); return; }
            this.state.targetLocId   = loc.id;
            this.state.targetLocName = loc.name;
            this.state.showLocPicker = false;
        }
    }

    // ── Cantidades ─────────────────────────────────────────────────────────

    _findLine(id) { return this.state.lines.find(l => l.id === id); }

    _addQty(id, delta) {
        const line = this._findLine(id);
        if (!line) return;
        const next = line.scanned_qty + delta;
        if (next < 0) { line.scanned_qty = 0; return; }
        const total = line.qty_done + next;
        if (delta > 0 && total > line.product_uom_qty) {
            if (!confirm('Supera la cantidad demandada. ¿Continuar?')) return;
        }
        line.scanned_qty = next;
    }

    get activeMove() {
        return this.state.activeId !== null ? this._findLine(this.state.activeId) : null;
    }

    openModal(id) { this.state.activeId = id; this.state.qtyDir = 1; }
    closeModal()  { this.state.activeId = null; }

    // ── Selector de destino (paso dejar) ──────────────────────────────────

    openLocPicker()  { this.state.showLocPicker = true; }
    closeLocPicker() { this.state.showLocPicker = false; }

    pickSubLoc(loc) {
        this.state.targetLocId   = loc.id;
        this.state.targetLocName = loc.name;
        this.state.showLocPicker = false;
    }

    // ── Navegación de pasos ────────────────────────────────────────────────

    selectLocation(locId) {
        this.state.srcLocId = locId;
        this.state.step     = 'products';
        this.state.activeId = null;
    }

    goLeave() {
        if (!this.hasScanned) { this.alert.warning('No hay productos escaneados'); return; }
        this.state.step          = 'leave';
        this.state.activeId      = null;
        this.state.showLocPicker = false;
    }

    goLocations() {
        this.state.step     = 'locations';
        this.state.srcLocId = null;
        this.state.activeId = null;
    }

    // ── Confirmar depósito ─────────────────────────────────────────────────

    async _commitDest() {
        const toWrite = this.pendingLeaveLines.filter(l => !l.ignore_move);
        if (!toWrite.length) return;
        this.state.saving = true;
        try {
            await Promise.all(toWrite.map(l =>
                this.rpc.write('stock.move.line', [l.id], {
                    qty_done:         l.qty_done + l.scanned_qty,
                    location_dest_id: this.state.targetLocId,
                })
            ));
            const name = this.state.targetLocName;
            toWrite.forEach(l => {
                l.qty_done        += l.scanned_qty;
                l.scanned_qty      = 0;
                l.location_dest_id = [this.state.targetLocId, name];
            });
            this.alert.success(`Depositado en ${name}`);
        } catch (e) {
            this.alert.error(e.message);
        }
        this.state.saving = false;
    }

    // ── Validar ────────────────────────────────────────────────────────────

    async validate() {
        this.state.saving = true;
        try {
            await this.rpc.call(
                'stock.picking', 'button_validate', [[parseInt(this.props.id)]],
                { context: { skip_overprocessed_check: true } }
            );
            this.alert.success('Picking validado');
            this.back();
        } catch (e) {
            this.alert.error(e.message);
            this.state.saving = false;
        }
    }

    refresh() { return this._load(); }
    back()    { location.hash = `stock/pickings/${this.props.code}`; }
}
