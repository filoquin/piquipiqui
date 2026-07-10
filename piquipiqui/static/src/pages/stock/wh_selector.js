const { Component, useState, useEnv, onWillStart } = owl;

export class WhSelector extends Component {
    static template = 'WhSelector';

    setup() {
        this.state = useState({ warehouses: [], loading: true });
        this.rpc = useEnv().rpc;
        onWillStart(() => this._load());
    }

    async _load() {
        this.state.warehouses = await this.rpc.searchRead(
            'stock.warehouse', [], ['id', 'name', 'lot_stock_id']
        );
        this.state.loading = false;
    }

    select(wh) {
        sessionStorage.setItem('piquipiqui_warehouse', JSON.stringify(wh));
        location.hash = 'stock/location-picker';
    }

    back() { location.hash = ''; }
}
