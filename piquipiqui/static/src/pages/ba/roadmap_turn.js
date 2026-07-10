const { Component, useState, useEnv, onWillStart } = owl;

export class RoadmapTurn extends Component {
    static template = 'RoadmapTurn';
    static props = ['id', 'turnId'];

    setup() {
        this.state = useState({ turn: null, pickings: [], loading: true, saving: false });
        this.rpc = useEnv().rpc;
        this.alert = useEnv().alert;
        onWillStart(() => this._load());
    }

    async _load() {
        const [turn] = await this.rpc.read(
            'stock.delivery.turn', [parseInt(this.props.turnId)],
            ['id', 'partner_id', 'state', 'schedule_id', 'picking_ids']
        );
        this.state.turn = turn;
        if (turn.picking_ids.length) {
            this.state.pickings = await this.rpc.read(
                'stock.picking', turn.picking_ids, ['id', 'name', 'state']
            );
        }
        this.state.loading = false;
    }

    async validate() {
        this.state.saving = true;
        try {
            await this.rpc.write(
                'stock.delivery.turn', [parseInt(this.props.turnId)], { state: 'received' }
            );
            this.alert.success('Turno marcado como entregado');
            location.hash = `ba/roadmap/${this.props.id}`;
        } catch (e) {
            this.alert.error(e.message);
            this.state.saving = false;
        }
    }

    back() { location.hash = `ba/roadmap/${this.props.id}`; }
}
