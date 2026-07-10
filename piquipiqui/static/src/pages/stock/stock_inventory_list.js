const { Component, useState, useEnv, onWillStart } = owl;

export class StockInventoryList extends Component {
    static template = 'StockInventoryList';

    setup() {
        this.rpc = useEnv().rpc;
        this.state = useState({
            inventories: [],
            loading: true,
        });
        onWillStart(() => this._load());
    }

    async _load() {
        this.state.loading = true;
        this.state.inventories = await this.rpc.searchRead(
            'stock.inventory',
            [['state', '=', 'confirm']],
            ['name', 'date', 'state'],
            { limit: 50 }
        );
        this.state.loading = false;
    }

    formatDate(str) {
        if (!str) return '';
        const d = new Date(str.replace(' ', 'T') + 'Z');
        return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()} ${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`;
    }

    open(id)  { location.hash = `stock/inventory/${id}`; }
    refresh() { return this._load(); }
    back()    { location.hash = ''; }
}
