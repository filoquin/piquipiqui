const { Component, useState, useEnv, onMounted, onWillUnmount } = owl;

export class Alert extends Component {
    static template = 'Alert';

    setup() {
        this.state = useState({ alerts: [] });
        this._nextId = 0;
        this._bus = useEnv().bus;
        this._onAlert = this._onAlert.bind(this);
        onMounted(() => this._bus.addEventListener('alert:show', this._onAlert));
        onWillUnmount(() => this._bus.removeEventListener('alert:show', this._onAlert));
    }

    _onAlert({ detail: { message, type, duration } }) {
        const id = this._nextId++;
        this.state.alerts.push({ id, message, type });
        setTimeout(() => this.dismiss(id), duration);
    }

    dismiss(id) {
        const idx = this.state.alerts.findIndex(a => a.id === id);
        if (idx !== -1) this.state.alerts.splice(idx, 1);
    }
}
