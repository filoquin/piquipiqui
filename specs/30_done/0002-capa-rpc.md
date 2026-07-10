---
Estado: Implementada
Área: infraestructura
PR/commit: piquipiqui/static/src/services/
---

# Capa RPC — cliente JSON-RPC OWL

## Contexto

La SPA OWL usa JSON-RPC nativo de Odoo (`/web/dataset/call_kw`), sin controllers intermedios.
Tres servicios singleton se registran en el `env` del componente raíz y se acceden vía `useEnv()`.

## User stories

**Como dev**, quiero un `RpcService` en OWL que centralice las llamadas JSON-RPC
para no repetir lógica de sesión, headers y manejo de errores en cada componente.

**Como dev**, quiero que los errores Odoo se propaguen con mensaje legible
para que las alertas al usuario sean informativas.

## Acceptance criteria

- [x] `RpcService` expone: `call()`, `read()`, `searchRead()`, `write()`, `create()`, `unlink()`.
- [x] Todas las llamadas usan `POST /web/dataset/call_kw` con la cookie de sesión de Odoo.
- [x] Los errores Odoo se propagan como excepciones con `message` legible.
- [x] `RpcService`, `AlertService` y `BarcodeService` son singletons inyectados en el `env` raíz.
- [x] `AlertService` expone: `success()`, `error()`, `warning()`, `info()` con auto-dismiss.
- [x] `BarcodeService` expone: `subscribe(cb)` / `unsubscribe(cb)`.

## API implementada

```js
// RpcService
await rpc.call('stock.picking', 'button_validate', [[id]], { context: {} })
await rpc.read('stock.picking', [id], ['display_name', 'state'])
await rpc.searchRead('stock.move.line', [['picking_id', '=', id]], ['product_id', 'qty_done'])
await rpc.write('stock.move.line', [id], { qty_done: 3, location_dest_id: 504 })
await rpc.create('stock.move.line', [{ product_id: 5, qty_done: 1 }])
await rpc.unlink('stock.move.line', [id])

// AlertService
alert.success('Picking validado')
alert.error('Sin stock suficiente')
alert.warning('Supera la cantidad demandada')
alert.info('Destino actualizado')

// BarcodeService — patrón de suscripción
const cb = (code) => handleBarcode(code)
barcode.subscribe(cb)    // onMounted
barcode.unsubscribe(cb)  // onWillUnmount
```

## Endpoints Odoo usados

| Endpoint | Uso |
|----------|-----|
| `POST /web/dataset/call_kw` | Todas las operaciones ORM |
| `GET /web/session/logout` | Logout desde dashboard |

## Clarificaciones

N/A — spec implementada sin ambigüedades pendientes.
