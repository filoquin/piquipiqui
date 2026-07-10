const { Component, useState, useEnv, onWillStart } = owl;

const STATE_LABELS = {
    draft:     'Borrador',
    waiting:   'Esperando',
    confirmed: 'Confirmado',
    assigned:  'Listo',
    done:      'Entregado',
    cancel:    'Cancelado',
};

export class RoadmapDetail extends Component {
    static template = 'RoadmapDetail';
    static props = ['id'];

    setup() {
        this.state = useState({ roadmap: null, pickings: [], loading: true });
        this.rpc = useEnv().rpc;
        onWillStart(() => this._load());
    }

    async _load() {
        const id = parseInt(this.props.id);
        const [rm] = await this.rpc.read(
            'stock.delivery.roadmap', [id],
            ['id', 'display_name', 'number', 'state', 'picking_ids',
             'preparation_date', 'driver_user_id', 'vehicle_id']
        );
        this.state.roadmap = rm;

        if (rm.picking_ids.length) {
            const pickings = await this.rpc.read(
                'stock.picking', rm.picking_ids,
                ['id', 'display_name', 'partner_id', 'origin', 'state', 'roadmap_sequence']
            );
            pickings.sort((a, b) => (a.roadmap_sequence || 0) - (b.roadmap_sequence || 0));

            const partnerIds = [...new Set(
                pickings.filter(p => p.partner_id).map(p => p.partner_id[0])
            )];
            let partnerMap = {};
            if (partnerIds.length) {
                const partners = await this.rpc.read(
                    'res.partner', partnerIds,
                    ['id', 'street', 'street2', 'city', 'state_id', 'country_id', 'phone', 'mobile']
                );
                for (const p of partners) partnerMap[p.id] = p;
            }

            for (const p of pickings) {
                p._partner = p.partner_id ? (partnerMap[p.partner_id[0]] || {}) : {};
            }
            this.state.pickings = pickings;
        }

        this.state.loading = false;
    }

    // ── Helpers ────────────────────────────────────────────────────────────

    formatDate(str) {
        if (!str) return '';
        const d = new Date(str.replace(' ', 'T') + 'Z');
        return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()} ${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`;
    }

    stateLabel(state) { return STATE_LABELS[state] || state; }

    formatAddress(p) {
        const parts = [p.street, p.street2, p.city].filter(Boolean);
        if (p.state_id)   parts.push(p.state_id[1]);
        if (p.country_id) parts.push(`(${p.country_id[1]})`);
        return parts.join(' ');
    }

    formatPhone(p) {
        return [...new Set([p.phone, p.mobile].filter(Boolean))].join(' ');
    }

    _bestPhone(p) {
        return (p.mobile || p.phone || '').replace(/\D/g, '').replace(/^0/, '');
    }

    // ── Acciones de tarjeta ────────────────────────────────────────────────

    openPicking(pk) {
        location.hash = `ba/roadmap/${this.props.id}/picking/${pk.id}`;
    }

    geolocate(pk) {
        const addr = this.formatAddress(pk._partner) || (pk.partner_id && pk.partner_id[1]) || '';
        window.open(`https://maps.google.com/?q=${encodeURIComponent(addr)}`, '_blank');
    }

    whatsapp(pk) {
        const raw = this._bestPhone(pk._partner);
        const num = raw.length === 10 ? `549${raw}` : raw;
        window.open(`https://wa.me/${num}`, '_blank');
    }

    call(pk) {
        window.open(`tel:${this._bestPhone(pk._partner)}`, '_self');
    }

    async _swapSequence(indexA, indexB) {
        const arr  = this.state.pickings;
        const a    = arr[indexA];
        const b    = arr[indexB];
        const seqA = a.roadmap_sequence;
        const seqB = b.roadmap_sequence;
        a.roadmap_sequence = seqB;
        b.roadmap_sequence = seqA;
        [arr[indexA], arr[indexB]] = [arr[indexB], arr[indexA]];
        await Promise.all([
            this.rpc.write('stock.picking', [a.id], { roadmap_sequence: seqB }),
            this.rpc.write('stock.picking', [b.id], { roadmap_sequence: seqA }),
        ]);
    }

    moveUp(index)   { if (index > 0) this._swapSequence(index, index - 1); }
    moveDown(index) { if (index < this.state.pickings.length - 1) this._swapSequence(index, index + 1); }

    // ── Navegación ─────────────────────────────────────────────────────────

    showMap() { location.hash = `ba/roadmap/${this.props.id}/map`; }
    back()    { location.hash = 'ba/roadmap'; }
}
