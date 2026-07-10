export class AlertService {
    constructor(bus) {
        this._bus = bus;
    }

    _show(message, type, duration = 3500) {
        this._bus.trigger('alert:show', { message, type, duration });
    }

    success(message, duration) { this._show(message, 'success', duration); }
    error(message, duration)   { this._show(message, 'error', duration); }
    warning(message, duration) { this._show(message, 'warning', duration); }
    info(message, duration)    { this._show(message, 'info', duration); }
}
