import { RpcService }          from './services/rpc_service.js';
import { BarcodeService }      from './services/barcode_service.js';
import { AlertService }        from './services/alert_service.js';
import { Alert }               from './components/alert/alert.js';
import { Dashboard }           from './pages/dashboard.js';
import { WhSelector }          from './pages/stock/wh_selector.js';
import { LocationPicker }      from './pages/stock/location_picker.js';
import { MovIntList }          from './pages/stock/mov_int_list.js';
import { MovIntDetail }        from './pages/stock/mov_int_detail.js';
import { IngresoWhSelector }   from './pages/stock/ingreso_wh_selector.js';
import { IngresoList }         from './pages/stock/ingreso_list.js';
import { RoadmapList }            from './pages/ba/roadmap_list.js';
import { RoadmapDetail }          from './pages/ba/roadmap_detail.js';
import { RoadmapTurn }            from './pages/ba/roadmap_turn.js';
import { RoadmapMap }             from './pages/ba/roadmap_map.js';
import { RoadmapPicking }        from './pages/ba/roadmap_picking.js';
import { StockInventoryList }     from './pages/stock/stock_inventory_list.js';
import { StockInventoryLines }    from './pages/stock/stock_inventory_lines.js';
import { StockInventoryProduct }  from './pages/stock/stock_inventory_product.js';

const { Component, App, useState, onMounted, onWillUnmount, EventBus } = owl;

// ---------------------------------------------------------------------------
// Templates — carga todos los XML y los combina en un único string para OWL
// ---------------------------------------------------------------------------

const TEMPLATE_FILES = [
    '/piquipiqui/static/src/app.xml',
    '/piquipiqui/static/src/components/alert/alert.xml',
    '/piquipiqui/static/src/pages/dashboard.xml',
    '/piquipiqui/static/src/pages/stock/wh_selector.xml',
    '/piquipiqui/static/src/pages/stock/location_picker.xml',
    '/piquipiqui/static/src/pages/stock/mov_int_list.xml',
    '/piquipiqui/static/src/pages/stock/mov_int_detail.xml',
    '/piquipiqui/static/src/pages/stock/ingreso_list.xml',
    '/piquipiqui/static/src/pages/ba/roadmap_list.xml',
    '/piquipiqui/static/src/pages/ba/roadmap_detail.xml',
    '/piquipiqui/static/src/pages/ba/roadmap_turn.xml',
    '/piquipiqui/static/src/pages/ba/roadmap_map.xml',
    '/piquipiqui/static/src/pages/ba/roadmap_picking.xml',
    '/piquipiqui/static/src/pages/stock/stock_inventory_list.xml',
    '/piquipiqui/static/src/pages/stock/stock_inventory_lines.xml',
    '/piquipiqui/static/src/pages/stock/stock_inventory_product.xml',
];

async function loadTemplates() {
    const texts = await Promise.all(
        TEMPLATE_FILES.map(url =>
            fetch(url).then(r => {
                if (!r.ok) throw new Error(`No se pudo cargar el template: ${url}`);
                return r.text();
            })
        )
    );
    return '<templates>\n' + texts.join('\n') + '\n</templates>';
}

// ---------------------------------------------------------------------------
// Router — hash-based con soporte de params (:id)
// ---------------------------------------------------------------------------

const ROUTES = [
    { pattern: '',                            component: Dashboard },
    { pattern: 'stock/wh-selector',           component: WhSelector },
    { pattern: 'stock/location-picker',       component: LocationPicker },
    { pattern: 'stock/pickings/:code',          component: MovIntList },
    { pattern: 'stock/moves/:code/:id',        component: MovIntDetail },
    { pattern: 'ingreso/wh-selector',         component: IngresoWhSelector },
    { pattern: 'ingreso',                     component: IngresoList },
    { pattern: 'ba/roadmap',                              component: RoadmapList },
    { pattern: 'ba/roadmap/:id',                          component: RoadmapDetail },
    { pattern: 'ba/roadmap/:id/turn/:turnId',             component: RoadmapTurn },
    { pattern: 'ba/roadmap/:id/map',                      component: RoadmapMap },
    { pattern: 'ba/roadmap/:id/picking/:pickingId',       component: RoadmapPicking },
    { pattern: 'stock/inventory',                         component: StockInventoryList },
    { pattern: 'stock/inventory/:id',                     component: StockInventoryLines },
    { pattern: 'stock/inventory/:id/location/:locationId', component: StockInventoryProduct },
];

function matchRoute(hash) {
    const path = (hash || '').replace(/^#/, '');
    for (const route of ROUTES) {
        const patternParts = route.pattern.split('/');
        const pathParts = path.split('/');
        if (patternParts.length !== pathParts.length) continue;
        const params = {};
        let matched = true;
        for (let i = 0; i < patternParts.length; i++) {
            if (patternParts[i].startsWith(':')) {
                params[patternParts[i].slice(1)] = pathParts[i];
            } else if (patternParts[i] !== pathParts[i]) {
                matched = false; break;
            }
        }
        if (matched) return { component: route.component, params };
    }
    return { component: Dashboard, params: {} };
}

// ---------------------------------------------------------------------------
// Componente raíz
// ---------------------------------------------------------------------------

class WHM2App extends Component {
    static template = 'WHM2App';
    static components = { Alert };

    setup() {
        const initial = matchRoute(location.hash);
        this.state = useState({
            path: location.hash,
            params: initial.params,
            _component: initial.component,
        });
        this._onHashChange = () => {
            const matched = matchRoute(location.hash);
            this.state.path = location.hash;
            this.state.params = matched.params;
            this.state._component = matched.component;
        };
        onMounted(() => window.addEventListener('hashchange', this._onHashChange));
        onWillUnmount(() => window.removeEventListener('hashchange', this._onHashChange));
    }

    get currentComponent() {
        return this.state._component;
    }
}

// ---------------------------------------------------------------------------
// Bootstrap
// ---------------------------------------------------------------------------

const templates = await loadTemplates();

const bus     = new EventBus();
const rpc     = new RpcService();
const barcode = new BarcodeService();
const alert   = new AlertService(bus);

const app = new App(WHM2App, {
    templates,
    env: { rpc, barcode, alert, bus, session: window.__SESSION__ },
    dev: false,
});

app.mount(document.getElementById('app'));

// Visual Viewport: mantiene --vvh y --vvt actualizados para que los
// elementos fixed (modales, alertas) escapen al teclado en fullscreen.
if (window.visualViewport) {
    const updateVV = () => {
        const s = document.documentElement.style;
        s.setProperty('--vvh', window.visualViewport.height + 'px');
        s.setProperty('--vvt', window.visualViewport.offsetTop  + 'px');
    };
    window.visualViewport.addEventListener('resize', updateVV);
    window.visualViewport.addEventListener('scroll', updateVV);
    updateVV();
}
