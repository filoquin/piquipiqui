const { Component, useState, useEnv, onWillStart } = owl;

function today() {
    return new Date().toISOString().slice(0, 10);
}

function tomorrow() {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().slice(0, 10);
}

export class MovIntList extends Component {
    static template = 'MovIntList';
    static props = ['code'];

    setup() {
        this.rpc = useEnv().rpc;

        this.state = useState({
            pickings: [],
            loading:  true,

            filterOrigin:   '',
            filterDateFrom: '',
            filterDateTo:   tomorrow(),

            inputOrigin:   '',
            inputDateFrom: '',
            inputDateTo:   tomorrow(),

            activePopup: null,
        });

        onWillStart(() => this._load());
    }

    async _load() {
        this.state.loading = true;
        const domain = [
            ['state', 'in', ['assigned', 'confirmed', 'partially_available']],
            ['picking_type_id.code', '=', 'internal'],
        ];
        if (this.props.code && this.props.code !== 'all') {
            domain.push(['picking_type_id.sequence_code', '=', this.props.code]);
        }
        if (this.state.filterOrigin) {
            domain.push(['origin', 'ilike', this.state.filterOrigin]);
        }
        if (this.state.filterDateFrom) {
            domain.push(['scheduled_date', '>=', this.state.filterDateFrom + ' 00:00:00']);
        }
        if (this.state.filterDateTo) {
            domain.push(['scheduled_date', '<', this.state.filterDateTo + ' 23:59:59']);
        }
        this.state.pickings = await this.rpc.searchRead(
            'stock.picking',
            domain,
            ['id', 'display_name', 'partner_id', 'user_id', 'origin',
             'scheduled_date', 'location_id', 'location_dest_id',
             'move_lines', 'priority', 'computed_roadmap_id', 'state'],
            { order: 'scheduled_date asc', limit: 80 }
        );
        this.state.loading = false;
    }

    // ── Filtros ────────────────────────────────────────────────────────────

    openPopup(name) {
        if (name === 'origin') this.state.inputOrigin = this.state.filterOrigin;
        if (name === 'date') {
            this.state.inputDateFrom = this.state.filterDateFrom;
            this.state.inputDateTo   = this.state.filterDateTo;
        }
        this.state.activePopup = name;
    }

    closePopup() { this.state.activePopup = null; }

    applyOrigin() {
        this.state.filterOrigin = this.state.inputOrigin.trim();
        this.closePopup();
        this._load();
    }

    clearOrigin() {
        this.state.filterOrigin = '';
        this.state.inputOrigin  = '';
        this.closePopup();
        this._load();
    }

    applyDate() {
        this.state.filterDateFrom = this.state.inputDateFrom;
        this.state.filterDateTo   = this.state.inputDateTo;
        this.closePopup();
        this._load();
    }

    clearDate() {
        this.state.filterDateFrom = '';
        this.state.filterDateTo   = tomorrow();
        this.state.inputDateFrom  = '';
        this.state.inputDateTo    = tomorrow();
        this.closePopup();
        this._load();
    }

    get hasActiveFilters() {
        return this.state.filterOrigin || this.state.filterDateFrom || this.state.filterDateTo;
    }

    // ── Helpers ────────────────────────────────────────────────────────────

    formatDate(str) {
        if (!str) return '';
        const d = new Date(str.replace(' ', 'T') + 'Z');
        return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()} ${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`;
    }

    // ── Navegación ─────────────────────────────────────────────────────────

    open(id)  { location.hash = `stock/moves/${this.props.code}/${id}`; }
    refresh() { return this._load(); }
    back()    { location.hash = ''; }
}
