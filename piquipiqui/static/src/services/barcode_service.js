// Adaptado del barcode_service.js de Odoo 18.0
// Fuente: addons/barcodes/static/src/barcode_service.js
//
// No requiere input enfocado en desktop: escucha keydown en document.body y
// descarta eventos que vienen de elementos editables (input, textarea, etc.)
// salvo que tengan data-enable-barcode.
// Dispara el código tanto en Enter/Tab como pasados maxTimeBetweenKeysInMs de silencio.

const MAX_TIME_BETWEEN_KEYS_MS = 150;

function isEditable(el) {
    return el.matches('input,textarea,[contenteditable="true"]');
}

export class BarcodeService {
    constructor() {
        this._listeners = new Set();
        this._buffer    = '';
        this._timeout   = null;

        this._handleKeydown = this._handleKeydown.bind(this);
        document.body.addEventListener('keydown', this._handleKeydown);
    }

    _fire() {
        clearTimeout(this._timeout);
        this._timeout = null;
        const code = this._buffer.replace(/Alt|Shift|Control/g, '');
        this._buffer = '';
        if (code.length >= 2) {
            for (const cb of this._listeners) cb(code);
        }
    }

    _handleKeydown(e) {
        if (!e.key) return;

        const isSpecialKey = !['Control', 'Alt'].includes(e.key) && (e.key.length > 1 || e.metaKey);
        const isEndChar    = /^(Enter|Tab)$/.test(e.key);

        if (isSpecialKey && !isEndChar) return;

        // Ignora teclas que vienen de elementos editables (el usuario está escribiendo)
        // excepto si el elemento tiene data-enable-barcode
        const target = e.target;
        if (isEditable(target) && !target.dataset.enableBarcode) return;

        clearTimeout(this._timeout);

        if (isEndChar) {
            if (this._buffer) this._fire();
        } else {
            this._buffer += e.key;
            // Dispara automáticamente si no llega más input en MAX_TIME_BETWEEN_KEYS_MS
            this._timeout = setTimeout(() => this._fire(), MAX_TIME_BETWEEN_KEYS_MS);
        }
    }

    subscribe(cb)   { this._listeners.add(cb); }
    unsubscribe(cb) { this._listeners.delete(cb); }

    destroy() {
        document.body.removeEventListener('keydown', this._handleKeydown);
        clearTimeout(this._timeout);
    }
}
