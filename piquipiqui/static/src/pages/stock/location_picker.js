const { Component, useState, useEnv, onWillStart } = owl;

export class LocationPicker extends Component {
    static template = 'LocationPicker';

    setup() {
        this.state = useState({ locations: [], loading: true });
        this.rpc = useEnv().rpc;
        onWillStart(() => this._load());
    }

    async _load() {
        const wh = JSON.parse(sessionStorage.getItem('piquipiqui_warehouse') || 'null');
        const domain = [['usage', 'in', ['internal', 'transit']]];
        if (wh && wh.lot_stock_id) {
            domain.push(['location_id', 'child_of', wh.lot_stock_id[0]]);
        }
        this.state.locations = await this.rpc.searchRead(
            'stock.location', domain, ['id', 'complete_name'], { limit: 100 }
        );
        this.state.loading = false;
    }

    select(loc) {
        sessionStorage.setItem('piquipiqui_location', JSON.stringify(loc));
        location.hash = 'stock/moves';
    }

    back() { location.hash = 'stock/wh-selector'; }
}
