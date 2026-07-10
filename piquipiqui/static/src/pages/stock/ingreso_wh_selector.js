import { WhSelector } from './wh_selector.js';

export class IngresoWhSelector extends WhSelector {
    select(wh) {
        sessionStorage.setItem('piquipiqui_warehouse', JSON.stringify(wh));
        location.hash = 'ingreso';
    }

    back() { location.hash = ''; }
}
