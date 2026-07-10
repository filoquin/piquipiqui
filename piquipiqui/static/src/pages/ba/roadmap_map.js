const { Component, useState, useEnv, useRef, onWillStart, onMounted, onWillUnmount } = owl;

export class RoadmapMap extends Component {
    static template = 'RoadmapMap';
    static props = ['id'];

    setup() {
        this.mapEl = useRef('mapEl');
        this.state = useState({ turns: [] });
        this.rpc = useEnv().rpc;
        this._map = null;
        onWillStart(() => this._loadTurns());
        onMounted(() => this._initMap());
        onWillUnmount(() => { if (this._map) this._map.remove(); });
    }

    async _loadTurns() {
        const [rm] = await this.rpc.read(
            'stock.delivery.roadmap', [parseInt(this.props.id)], ['picking_ids']
        );
        if (!rm.picking_ids.length) return;
        const pickings = await this.rpc.read('stock.picking', rm.picking_ids, ['turn_id']);
        const turnIds = [...new Set(
            pickings.filter(p => p.turn_id).map(p => p.turn_id[0])
        )];
        if (!turnIds.length) return;
        this.state.turns = await this.rpc.read(
            'stock.delivery.turn', turnIds,
            ['id', 'partner_id', 'latitude', 'longitude', 'state']
        );
    }

    _initMap() {
        if (!window.L) {
            this.mapEl.el.textContent = 'Leaflet no está cargado.';
            return;
        }
        const turns = this.state.turns.filter(t => t.latitude && t.longitude);
        if (!turns.length) {
            this.mapEl.el.textContent = 'Sin puntos geolocalizados.';
            return;
        }
        this._map = L.map(this.mapEl.el).setView([turns[0].latitude, turns[0].longitude], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap',
        }).addTo(this._map);
        for (const turn of turns) {
            const color = turn.state === 'received' ? 'green' : 'blue';
            L.circleMarker([turn.latitude, turn.longitude], {
                radius: 10, color, fillColor: color, fillOpacity: 0.8,
            })
            .bindPopup(`<b>${turn.partner_id[1]}</b><br>${turn.state}`)
            .addTo(this._map);
        }
        this._map.fitBounds(turns.map(t => [t.latitude, t.longitude]), { padding: [30, 30] });
    }

    back() { location.hash = `ba/roadmap/${this.props.id}`; }
}
