# ROADMAP — Migración Angular → OWL

App: `app_ba` (logística/stock/rutas/precios/etiquetas)
Destino: SPA OWL servida por controller Odoo + JSON-RPC directo
ADRs: [0001 arquitectura hosting](decisions/0001-arquitectura-hosting.md) · [0002 OWL version](decisions/0002-owl-version.md)

---

## Fases de migración

### Fase 0 — Arquitectura y setup ⬜

| Item | Estado | Spec |
|------|--------|------|
| Definir estructura de directorios del proyecto OWL | ⬜ pendiente | [00-arquitectura-general](specs/10_draft/00-arquitectura-general.md) |
| Setup de build (bundler: Vite o webpack, OWL npm) | ⬜ pendiente | — |
| CI/CD para el bundle OWL | ⬜ pendiente | — |

### Fase 1 — Capa RPC ⬜

| Item | Estado | Spec |
|------|--------|------|
| `RpcService` OWL (JSON-RPC + sesión + manejo de errores) | ⬜ pendiente | [01-capa-rpc](specs/10_draft/01-capa-rpc.md) |

### Fase 2 — Componentes reutilizables ⬜

| Item | Estado | Notas |
|------|--------|-------|
| `Alert` (notificaciones globales) | ⬜ pendiente | Reemplaza `AlertComponent` Angular |
| `Barcode` / `ReadCode` | ⬜ pendiente | PDA keyboard injection; adaptar hook de Odoo 17/18. Ver [spec](specs/10_draft/07-componente-barcode.md) |
| `GeoMap` (wrapper Leaflet) | ⬜ pendiente | `onMounted`/`onWillUnmount` |
| `PriceLabel` | ⬜ pendiente | Pipe `filter-price` → función JS |
| `RangePicker` (fechas) | ⬜ pendiente | Reemplaza `range-picker` Angular |
| `InputQty` (teclado + input cantidad) | ⬜ pendiente | Reemplaza `input-cant-keyboard-button` |
| `Menu` / navegación principal | ⬜ pendiente | |
| `Dashboard` | ⬜ pendiente | |

### Fase 3 — Módulo Stock ⬜

| Item | Estado | Spec |
|------|--------|------|
| `WhSelectorPage` | ⬜ pendiente | [03-modulo-stock](specs/10_draft/03-modulo-stock.md) |
| `LocationPicker` | ⬜ pendiente | [03-modulo-stock](specs/10_draft/03-modulo-stock.md) |
| `MovIntListPage` | ⬜ pendiente | [03-modulo-stock](specs/10_draft/03-modulo-stock.md) |
| `MovIntDetailPage` | ⬜ pendiente | [03-modulo-stock](specs/10_draft/03-modulo-stock.md) |
| `MovIntProductRow` (barcode + qty) | ⬜ pendiente | [03-modulo-stock](specs/10_draft/03-modulo-stock.md) |
| `StockService` OWL | ⬜ pendiente | [03-modulo-stock](specs/10_draft/03-modulo-stock.md) |

### Fase 4 — Módulo BA / Rutas ⬜

| Item | Estado | Spec |
|------|--------|------|
| `RoadmapListPage` | ⬜ pendiente | [04-modulo-ba-roadmap](specs/10_draft/04-modulo-ba-roadmap.md) |
| `RoadmapDetailPage` | ⬜ pendiente | [04-modulo-ba-roadmap](specs/10_draft/04-modulo-ba-roadmap.md) |
| `RoadmapPickingPage` | ⬜ pendiente | [04-modulo-ba-roadmap](specs/10_draft/04-modulo-ba-roadmap.md) |
| `RoadmapMapPage` (Leaflet) | ⬜ pendiente | [04-modulo-ba-roadmap](specs/10_draft/04-modulo-ba-roadmap.md) |
| `RoadmapService` OWL | ⬜ pendiente | [04-modulo-ba-roadmap](specs/10_draft/04-modulo-ba-roadmap.md) |

---

## Inventario completo de componentes Angular → OWL

| Angular | OWL | Fase | Estado |
|---------|-----|------|--------|
| `AppComponent` | `App` (raíz) | 0 | ⬜ |
| `AppRoutingModule` | Router OWL | 0 | ⬜ |
| `ConfigService` | ❌ no aplica — descartado | — | ❌ |
| `AuthGuard` | ❌ no aplica — auth en Odoo | — | ❌ |
| `LoginComponent` | ❌ no aplica — login en Odoo | — | ❌ |
| `SelectDbComponent` | ❌ no aplica — login en Odoo | — | ❌ |
| `OdooRpcService` | `RpcService` | 1 | ⬜ |
| `AlertService` | `AlertService` | 2 | ⬜ |
| `EventsService` | `EventBus` | 2 | ⬜ |
| `LogService` | `LogService` | 2 | ⬜ |
| `GlobalErrorHandlerService` | error handler OWL | 2 | ⬜ |
| `AlertComponent` | `Alert` | 2 | ⬜ |
| `ReadCodeComponent` | `Barcode` | 2 | ⬜ |
| `GeoMapComponent` | `GeoMap` | 2 | ⬜ |
| `PriceLabelComponent` | ❌ no aplica — módulo eliminado | — | ❌ |
| `OmniBarcodeComponent` | ❌ no aplica — ZPL eliminado | — | ❌ |
| `RangePickerComponent` | `RangePicker` | 2 | ⬜ |
| `InputCantKeyboardButtonComponent` | `InputQty` | 2 | ⬜ |
| `ButtonInputTextComponent` | `ButtonInput` | 2 | ⬜ |
| `LogComponent` | `LogPanel` | 2 | ⬜ |
| `MenuComponent` | `Menu` | 2 | ⬜ |
| `DashboardComponent` | `Dashboard` | 2 | ⬜ |
| `PrinterStateComponent` | `PrinterStatus` | 2 | ⬜ |
| `EntWhSelectorComponent` | `WhSelectorPage` | 3 | ⬜ |
| `EntLocationComponent` | `LocationPicker` | 3 | ⬜ |
| `MovIntComponent` | `MovIntListPage` | 3 | ⬜ |
| `MovIntDetailComponent` | `MovIntDetailPage` | 3 | ⬜ |
| `MovIntDetailProductComponent` | `MovIntProductRow` | 3 | ⬜ |
| `StockService` | `StockService` OWL | 3 | ⬜ |
| `RoadmapComponent` | `RoadmapListPage` | 4 | ⬜ |
| `RoadmapItemComponent` | `RoadmapDetailPage` | 4 | ⬜ |
| `RoadmapItemPickingComponent` | `RoadmapPickingPage` | 4 | ⬜ |
| `RoadmapItemGeoMapComponent` | `RoadmapMapPage` | 4 | ⬜ |
| `RoadmapService` | `RoadmapService` OWL | 4 | ⬜ |
| `PriceUpdateComponent` | ❌ no aplica — módulo eliminado | — | ❌ |
| `ProductPricesComponent` | ❌ no aplica — módulo eliminado | — | ❌ |
| `FilterPricePipe` | ❌ no aplica — módulo eliminado | — | ❌ |
| `PriceChangesService` | ❌ no aplica — módulo eliminado | — | ❌ |
| `PrintLabelComponent` | ❌ no aplica — ZPL eliminado | — | ❌ |
| `PrintConfigComponent` | ❌ no aplica — ZPL eliminado | — | ❌ |
| `ZplFileComponent` | ❌ no aplica — ZPL eliminado | — | ❌ |
| `PrinterStateComponent` | ❌ no aplica — ZPL eliminado | — | ❌ |
| `OmniBarcodeComponent` | ❌ no aplica — ZPL eliminado | — | ❌ |
| `HoneyService` | por definir | ? | ⬜ |
| `IntentService` | por definir | ? | ⬜ |

---

## Leyenda

- ⬜ Pendiente
- 🔄 En progreso
- ✅ Completado
- ❌ Descartado / no aplica
