---
Estado: Implementada
Área: stock
PR/commit: piquipiqui/static/src/pages/stock/
---

# Módulo Stock

## User stories

**Como operador de almacén**, quiero ver y procesar movimientos internos, pickings y
preparaciones de pedido desde el celular/PDA para operar sin entrar al backend web.

**Como operador**, quiero escanear productos con el lector PDA para registrar
cantidades sin errores de tipeo.

**Como responsable de stock**, quiero hacer control de inventario por ubicación
escaneando productos y confirmando cantidades.

**Como operador de recepción**, quiero registrar el ingreso de mercadería
validando producto a producto con el scanner.

## Acceptance criteria

- [x] Selector de almacén persiste en `sessionStorage` durante la sesión.
- [x] Lista de pickings por tipo (INT / PICK / PACK) con filtros por origen y fecha.
- [x] Tarjeta de picking muestra: nombre, estado (badge), fecha, destino, responsable (`user_id`), origen.
- [x] Movimiento interno (`MovIntDetail`) implementa flujo 3 pasos:
  1. **Ubicaciones**: lista de ubicaciones origen pendientes; scanner matchea por nombre.
  2. **Productos**: líneas del picking para la ubicación seleccionada; scanner por barcode/código interno; modal con botones ±1/5/10/50/100 y toggle ±.
  3. **Dejar**: selector global de sub-ubicación destino (lista de hijos de `location_dest_id`) — tap o scanner; lista de productos escaneados con toggle "Ignorar"; botón "Confirmar depósito" escribe `qty_done` + `location_dest_id` específico por línea.
- [x] Ingreso de mercadería: lista de `stock.move` con filtros (origen, fecha, Ingreso OK, picking). Número de picking es link que aplica filtro. Scanner confirma automáticamente al completar la cantidad. Confirma el picking cuando todas las líneas están completas.
- [x] Control de stock: lista de inventarios → ubicaciones → productos. Scanner en paso de ubicaciones navega directamente. Escribe `product_qty` al cerrar modal. Toggle "Mostrar completos".
- [x] Validar picking llama a `button_validate` con `skip_overprocessed_check: True`.
- [x] Todos los estados de carga muestran spinner animado.
- [x] Nombre de producto no se trunca (wrap completo).

## Componentes implementados

| Componente | Modelo principal | Descripción |
|------------|-----------------|-------------|
| `WhSelector` | `stock.warehouse` | Selector de almacén |
| `LocationPicker` | `stock.location` | Picker de ubicación |
| `MovIntList` | `stock.picking` | Lista de movimientos por tipo |
| `MovIntDetail` | `stock.move.line` | Detalle 3 pasos + sub-ubicaciones |
| `IngresoList` | `stock.move` | Ingreso de mercadería |
| `IngresoWhSelector` | `stock.warehouse` | Selector específico para ingreso |
| `StockInventoryList` | `stock.inventory` | Lista de inventarios |
| `StockInventoryLines` | `stock.move.line` | Ubicaciones del inventario |
| `StockInventoryProduct` | `stock.move.line` | Productos por ubicación |

## Decisiones de implementación

- **`stock.move.line` en MovIntDetail** (no `stock.move`): las líneas de detalle tienen `location_id`, `location_dest_id` y `qty_done` individuales, necesarios para el flujo multi-ubicación.
- **Sin filtro de estado en `stock.move.line`**: el campo `state` no filtra correctamente en Odoo 13 en ese modelo. La lógica de "pendiente" se hace en el getter `pendingSourceLocs` (`qty_done + scanned_qty < product_uom_qty`).
- **Sub-ubicaciones**: se cargan con `[['id', 'child_of', picking.location_dest_id[0]]]` en paralelo con las líneas. El selector global aplica el mismo destino a todas las líneas al confirmar.

## Clarificaciones

N/A — spec implementada sin ambigüedades pendientes.
