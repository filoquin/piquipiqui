---
Estado: Borrador
Área: stock
---

# Módulo Stock — movimientos internos

## Componentes Angular origen

- `EntWhSelectorComponent` (pages/stock/ent-wh-selector/)
- `EntLocationComponent` (pages/stock/ent-location/)
- `MovIntComponent` (pages/stock/mov-int/)
- `MovIntDetailComponent` (pages/stock/mov-int-detail/)
- `MovIntDetailProductComponent` (pages/stock/mov-int-detail-product/)
- `StockService` (_services/stock.service.ts)

## User stories

**Como operador de almacén**, quiero ver la lista de movimientos internos pendientes
para saber qué tengo que mover hoy.

**Como operador**, quiero escanear el código del producto al hacer un movimiento
para evitar errores de ingreso manual.

**Como operador**, quiero seleccionar el almacén y ubicación de origen/destino
para que el movimiento quede registrado correctamente en Odoo.

**Como operador**, quiero validar un movimiento desde la app
para que Odoo lo marque como hecho sin tener que entrar al backend web.

## Acceptance criteria

- [ ] Se puede seleccionar el almacén activo; la selección persiste durante la sesión.
- [ ] La lista de movimientos internos muestra: referencia, producto, cantidad, estado.
- [ ] Se puede filtrar la lista por estado (borrador, confirmado, listo).
- [ ] Al abrir un movimiento se ven sus líneas con producto, cantidad demandada y hecha.
- [ ] El operador puede ingresar la cantidad hecha manualmente o escaneando el barcode.
- [ ] Al confirmar un movimiento, se llama al controller y el estado en Odoo se actualiza.
- [ ] Los errores de validación (stock insuficiente, etc.) se muestran con mensaje claro.

## Componentes OWL a crear

| Componente | Descripción |
|------------|-------------|
| `WhSelectorPage` | Selector de almacén activo |
| `LocationPicker` | Picker de ubicación (árbol de locaciones) |
| `MovIntListPage` | Lista de movimientos internos |
| `MovIntDetailPage` | Detalle + líneas de un movimiento |
| `MovIntProductRow` | Fila de producto con input de cantidad y barcode |
| `StockService` | Wrapper de los endpoints `/api/ba/stock/*` |

## Clarificaciones

**Preguntas detectadas:**

1. ~~¿`EntLocationComponent` selecciona origen, destino, o ambas?~~
2. ~~¿Los movimientos muestran solo los del almacén seleccionado o todos?~~
3. ~~¿Hay flujo de loteo o número de serie?~~

**Decisiones del usuario:**

1. **`LocationPicker` selecciona ubicación de origen.**
2. **Solo se muestran movimientos del almacén seleccionado.**
3. **Sin loteo ni número de serie.**
