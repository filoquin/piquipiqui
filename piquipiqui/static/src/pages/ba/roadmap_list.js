const { Component, useState, useEnv, onWillStart } = owl;

export class RoadmapList extends Component {
    static template = 'RoadmapList';

    setup() {
        this.state = useState({
            roadmaps: [],
            loading:  true,

            filterVehicle:  '',
            filterName:     '',
            filterDateFrom: '',
            filterDateTo:   '',

            inputVehicle:  '',
            inputName:     '',
            inputDateFrom: '',
            inputDateTo:   '',

            activePopup: null,
        });
        this.rpc = useEnv().rpc;
        onWillStart(() => this._load());
    }

    async _load() {
        this.state.loading = true;
        const domain = [['state', 'not in', ['done']]];
        if (this.state.filterVehicle) {
            domain.push(['vehicle_id.name', 'ilike', this.state.filterVehicle]);
        }
        if (this.state.filterName) {
            domain.push(['number', 'ilike', this.state.filterName]);
        }
        if (this.state.filterDateFrom) {
            domain.push(['preparation_date', '>=', this.state.filterDateFrom + ' 00:00:00']);
        }
        if (this.state.filterDateTo) {
            domain.push(['preparation_date', '<=', this.state.filterDateTo + ' 23:59:59']);
        }
        this.state.roadmaps = await this.rpc.searchRead(
            'stock.delivery.roadmap',
            domain,
            ['display_name', 'state', 'preparation_date', 'name', 'number',
             'driver_user_id', 'assistant_ids', 'vehicle_id', 'picking_ids'],
            { limit: 50 }
        );
        this.state.loading = false;
    }

    // ── Filtros ────────────────────────────────────────────────────────────

    openPopup(name) {
        if (name === 'vehicle') this.state.inputVehicle = this.state.filterVehicle;
        if (name === 'nombre')  this.state.inputName    = this.state.filterName;
        if (name === 'date') {
            this.state.inputDateFrom = this.state.filterDateFrom;
            this.state.inputDateTo   = this.state.filterDateTo;
        }
        this.state.activePopup = name;
    }

    closePopup() { this.state.activePopup = null; }

    applyNombre() {
        this.state.filterName = this.state.inputName.trim();
        this.closePopup();
        this._load();
    }

    clearNombre() {
        this.state.filterName = '';
        this.state.inputName  = '';
        this.closePopup();
        this._load();
    }

    applyVehicle() {
        this.state.filterVehicle = this.state.inputVehicle.trim();
        this.closePopup();
        this._load();
    }

    clearVehicle() {
        this.state.filterVehicle = '';
        this.state.inputVehicle  = '';
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
        this.state.filterDateTo   = '';
        this.state.inputDateFrom  = '';
        this.state.inputDateTo    = '';
        this.closePopup();
        this._load();
    }

    get hasActiveFilters() {
        return this.state.filterVehicle || this.state.filterName || this.state.filterDateFrom || this.state.filterDateTo;
    }

    // ── Helpers ────────────────────────────────────────────────────────────

    formatDate(str) {
        if (!str) return '';
        const d = new Date(str.replace(' ', 'T') + 'Z');
        return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()} ${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`;
    }

    // ── Navegación ─────────────────────────────────────────────────────────

    open(id)  { location.hash = `ba/roadmap/${id}`; }
    refresh() { return this._load(); }
    back()    { location.hash = ''; }
}
