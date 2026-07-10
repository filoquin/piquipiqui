const { Component, useState, useEnv, onWillStart, onMounted, onWillUnmount } = owl;

export class StockInventoryLines extends Component {
    static template = 'StockInventoryLines';
    static props = ['id'];

    setup() {
        this.rpc = useEnv().rpc;
        this.barcode = useEnv().barcode;
        this.state = useState({
            locations: [],
            loading: true,
        });
        this._onBarcode = (code) => {
            const loc = this.state.locations.find(l =>
                l.name === code || l.name.toLowerCase().includes(code.toLowerCase())
            );
            if (loc) this.open(loc.id);
        };
        onWillStart(() => this._load());
        onMounted(() => this.barcode.subscribe(this._onBarcode));
        onWillUnmount(() => this.barcode.unsubscribe(this._onBarcode));
    }

    async _load() {
        this.state.loading = true;
        const lines = await this.rpc.searchRead(
            'stock.inventory.line',
            [['inventory_id', '=', Number(this.props.id)]],
            ['location_id'],
            { limit: 500 }
        );
        const seen = new Set();
        const locations = [];
        for (const line of lines) {
            const locId = line.location_id[0];
            if (!seen.has(locId)) {
                seen.add(locId);
                locations.push({ id: locId, name: line.location_id[1] });
            }
        }
        this.state.locations = locations;
        this.state.loading = false;
    }

    open(locationId) { location.hash = `stock/inventory/${this.props.id}/location/${locationId}`; }
    refresh()        { return this._load(); }
    back()           { location.hash = 'stock/inventory'; }
}
