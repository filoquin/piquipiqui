const { Component, useState, useEnv, onWillStart, onMounted, onWillUnmount } = owl;

export class RoadmapPicking extends Component {
    static template = 'RoadmapPicking';
    static props = ['id', 'pickingId'];

    setup() {
        this.rpc     = useEnv().rpc;
        this.barcode = useEnv().barcode;
        this.alert   = useEnv().alert;

        this.state = useState({
            picking: null,
            moves:   [],
            loading: true,
            saving:  false,
            activeId: null,
            qtyDir:   1,
            showDone: false,
        });

        this._onBarcode = (code) => this._searchByCode(code);
        onWillStart(() => this._load());
        onMounted(() => this.barcode.subscribe(this._onBarcode));
        onWillUnmount(() => this.barcode.unsubscribe(this._onBarcode));
    }

    async _load() {
        this.state.loading = true;
        const pkId = parseInt(this.props.pickingId);

        const [picking] = await this.rpc.read(
            'stock.picking', [pkId],
            ['id', 'display_name', 'partner_id', 'origin', 'state', 'move_lines']
        );
        this.state.picking = picking;

        if (picking.move_lines.length) {
            const moves = await this.rpc.read(
                'stock.move', picking.move_lines,
                ['id', 'product_id', 'product_uom_qty', 'quantity_done', 'product_uom', 'state']
            );

            const productIds = [...new Set(moves.map(m => m.product_id[0]))];
            if (productIds.length) {
                const prods = await this.rpc.read(
                    'product.product', productIds, ['id', 'barcode', 'default_code']
                );
                const byId = Object.fromEntries(prods.map(p => [p.id, p]));
                moves.forEach(m => {
                    const p = byId[m.product_id[0]] || {};
                    m.barcode      = p.barcode      || '';
                    m.default_code = p.default_code || '';
                    m.scanned_qty  = 0;
                });
            }

            this.state.moves = moves.filter(m => m.state !== 'cancel');
        }

        this.state.loading = false;
    }

    // ── Visibilidad ────────────────────────────────────────────────────────

    get visibleMoves() {
        if (this.state.showDone) return this.state.moves;
        return this.state.moves.filter(m => m.quantity_done < m.product_uom_qty);
    }

    toggleShowDone() { this.state.showDone = !this.state.showDone; }

    // ── Scanner ────────────────────────────────────────────────────────────

    _findMove(id) { return this.state.moves.find(m => m.id === id); }

    _searchByCode(code) {
        if (!code || code.length < 2) return;
        const move = this.state.moves.find(m =>
            (m.barcode && m.barcode === code) || (m.default_code && m.default_code === code)
        );
        if (!move) {
            this.alert.error(`${code} no encontrado`);
            return;
        }
        this.state.activeId = move.id;
        this._addQty(move.id, 1);
    }

    // ── Cantidades ─────────────────────────────────────────────────────────

    _addQty(id, delta) {
        const move = this._findMove(id);
        if (!move) return;
        const next = move.quantity_done + delta;
        if (next < 0) return;
        if (delta > 0 && next > move.product_uom_qty) {
            if (!confirm('Está por confirmar más items de los esperados. ¿Está seguro?')) return;
        }
        move.scanned_qty  += delta;
        move.quantity_done = next;
    }

    // ── Modal ──────────────────────────────────────────────────────────────

    openModal(id) { this.state.activeId = id; this.state.qtyDir = 1; }
    closeModal()  { this.state.activeId = null; }

    get activeMove() {
        return this.state.activeId !== null ? this._findMove(this.state.activeId) : null;
    }

    // ── Validación ─────────────────────────────────────────────────────────

    async validate() {
        this.state.saving = true;
        try {
            for (const m of this.state.moves) {
                if (m.quantity_done !== m._origQty) {
                    await this.rpc.write('stock.move', [m.id], { quantity_done: m.quantity_done });
                }
            }
            await this.rpc.call(
                'stock.picking', 'button_validate', [[parseInt(this.props.pickingId)]],
                { context: { skip_overprocessed_check: true } }
            );
            this.alert.success('Remito validado');
            this.back();
        } catch (e) {
            this.alert.error(e.message);
            this.state.saving = false;
        }
    }

    // ── Navegación ─────────────────────────────────────────────────────────

    refresh() { return this._load(); }
    back()    { location.hash = `ba/roadmap/${this.props.id}`; }
}
