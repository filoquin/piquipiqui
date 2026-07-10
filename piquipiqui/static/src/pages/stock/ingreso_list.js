const { Component, useState, useEnv, onMounted, onWillStart, onWillUnmount } = owl;

export class IngresoList extends Component {
    static template = 'IngresoList';

    setup() {
        this.warehouse = JSON.parse(sessionStorage.getItem('piquipiqui_warehouse') || 'null');
        const env = useEnv();
        this.rpc     = env.rpc;
        this.barcode = env.barcode;
        this.alert   = env.alert;

        this.state = useState({
            moves: [],
            loading: true,
            activeId:  null,
            showDone:  false,
            qtyDir:    1,

            // filtros aplicados (usados en el domain)
            filterOrigin:    '',
            filterDateFrom:  '',
            filterDateTo:    '',
            filterIngresoOk: true,
            filterPickingId:   null,
            filterPickingName: '',

            // inputs pendientes (lo que el usuario escribe antes de aplicar)
            inputOrigin:   '',
            inputDateFrom: '',
            inputDateTo:   '',

            activePopup: null,  // 'origin' | 'date' | null
        });

        this._onBarcode = (code) => this._searchByCode(code);

        onWillStart(() => this._load());
        onMounted(() => this.barcode.subscribe(this._onBarcode));
        onWillUnmount(() => this.barcode.unsubscribe(this._onBarcode));
    }

    async _load() {
        this.state.loading = true;
        const lotStockId = this.warehouse?.lot_stock_id?.[0];
        const domain = [
            ['state', 'in', ['assigned', 'draft', 'partially_available']],
        ];
        if (lotStockId) {
            domain.push(['location_dest_id', 'child_of', lotStockId]);
        }
        if (this.state.filterOrigin) {
            domain.push(['origin', 'ilike', this.state.filterOrigin]);
        }
        if (this.state.filterDateFrom) {
            domain.push(['date_expected', '>=', this.state.filterDateFrom + ' 00:00:00']);
        }
        if (this.state.filterDateTo) {
            domain.push(['date_expected', '<=', this.state.filterDateTo + ' 23:59:59']);
        }
        if (this.state.filterIngresoOk) {
            domain.push(['picking_id.income_ok', '=', true]);
        }
        if (this.state.filterPickingId) {
            domain.push(['picking_id', '=', this.state.filterPickingId]);
        }

        const moves = await this.rpc.searchRead(
            'stock.move',
            domain,
            ['id', 'product_id', 'picking_id', 'origin', 'quantity_done',
             'reserved_availability', 'product_uom_qty', 'product_uom', 'date_expected'],
            { order: 'date_expected asc' }
        );

        const productIds = [...new Set(moves.map(m => m.product_id[0]))];
        if (productIds.length) {
            const products = await this.rpc.read(
                'product.product', productIds, ['id', 'barcode', 'default_code']
            );
            const byId = Object.fromEntries(products.map(p => [p.id, p]));
            moves.forEach(m => {
                const p = byId[m.product_id[0]] || {};
                m.barcode      = p.barcode || '';
                m.default_code = p.default_code || '';
                m.scanned_qty  = 0;
            });
        }

        this.state.moves   = moves;
        this.state.loading = false;
    }

    // ── Filtros ────────────────────────────────────────────────────────────

    openPopup(name) {
        // Sincroniza el input con el filtro activo al abrir
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
        this.state.filterDateTo   = '';
        this.state.inputDateFrom  = '';
        this.state.inputDateTo    = '';
        this.closePopup();
        this._load();
    }

    toggleIngresoOk() {
        this.state.filterIngresoOk = !this.state.filterIngresoOk;
        this._load();
    }

    filterByPicking(id, name) {
        this.state.filterPickingId   = id;
        this.state.filterPickingName = name;
        this._load();
    }

    clearPicking() {
        this.state.filterPickingId   = null;
        this.state.filterPickingName = '';
        this._load();
    }

    get hasActiveFilters() {
        return this.state.filterOrigin || this.state.filterDateFrom || this.state.filterDateTo || this.state.filterIngresoOk || this.state.filterPickingId;
    }

    // ── Scanner ────────────────────────────────────────────────────────────

    _findMove(id) { return this.state.moves.find(m => m.id === id); }

    _searchByCode(code) {
        if (!code || code.length < 2) return;
        const move = this.state.moves.find(m =>
            (m.barcode === code || m.default_code === code) &&
            m.quantity_done < m.reserved_availability
        );
        if (!move) {
            this.alert.error(`${code} no disponible`);
            return;
        }
        this.state.activeId = move.id;
        this._addQty(move.id, 1);
    }

    // ── Cantidades ─────────────────────────────────────────────────────────

    _addQty(id, delta) {
        const move = this._findMove(id);
        if (!move) return;
        const nextQty = move.quantity_done + delta;
        if (nextQty < 0) return;
        if (delta > 0 && nextQty > move.reserved_availability) {
            if (!confirm('Está por confirmar más items de los esperados. ¿Está seguro?')) return;
        }
        move.scanned_qty  += delta;
        move.quantity_done = nextQty;
        if (move.quantity_done >= move.reserved_availability && move.scanned_qty > 0) {
            this._confirmMove(id);
        }
    }

    async _confirmMove(id) {
        const move = this._findMove(id);
        if (!move) return;
        await this.rpc.write('stock.move', [move.id], { quantity_done: move.quantity_done });
        move.scanned_qty = 0;
        const pickingId = move.picking_id[0];
        const pending = this.state.moves.filter(
            m => m.picking_id[0] === pickingId && m.quantity_done < m.reserved_availability
        );
        if (pending.length === 0) {
            await this.rpc.call(
                'stock.picking', 'button_validate', [[pickingId]],
                { context: { skip_overprocessed_check: true } }
            );
            this.alert.success(`Picking ${move.picking_id[1]} validado`);
        }
        this.closeModal();
        await this._load();
    }

    async partialConfirm() {
        const move = this._findMove(this.state.activeId);
        if (!move || move.scanned_qty <= 0) return;
        await this.rpc.write('stock.move', [move.id], { quantity_done: move.quantity_done });
        move.scanned_qty = 0;
        this.closeModal();
        await this._load();
    }

    // ── Modal detalle ──────────────────────────────────────────────────────

    openModal(id) { this.state.activeId = id; this.state.qtyDir = 1; }
    closeModal()  { this.state.activeId = null; }

    get activeMove() {
        return this.state.activeId !== null ? this._findMove(this.state.activeId) : null;
    }

    // ── Visibilidad ────────────────────────────────────────────────────────

    toggleShowDone() { this.state.showDone = !this.state.showDone; }

    get visibleMoves() {
        if (this.state.showDone) return this.state.moves;
        return this.state.moves.filter(m => m.quantity_done < m.reserved_availability);
    }

    refresh() { return this._load(); }
    back()    { location.hash = 'ingreso/wh-selector'; }
}
