---
Estado: Borrador
Área: infraestructura
---

# Capa RPC — cliente JSON-RPC OWL

## Contexto

La app Angular usa `OdooRpcService` para llamar directamente a `/web/dataset/call_kw`.
Se mantiene ese patrón: la SPA OWL sigue usando JSON-RPC nativo de Odoo, sin controllers intermedios.

## User stories

**Como dev**, quiero un `RpcService` en OWL que centralice las llamadas JSON-RPC
para no repetir lógica de sesión, headers y manejo de errores en cada componente.

**Como dev**, quiero que el servicio maneje automáticamente la sesión expirada
para que el usuario sea redirigido al login sin que el componente tenga que gestionar ese caso.

## Acceptance criteria

- [ ] `RpcService` expone: `call(model, method, args, kwargs)` y `read(model, ids, fields)`.
- [ ] Todas las llamadas adjuntan automáticamente el `session_id` de Odoo.
- [ ] Un 401 (sesión expirada) dispara el redirect al login sin crashear el componente que llamó.
- [ ] Los errores Odoo (ej. `odoo.exceptions.ValidationError`) se propagan como excepciones con mensaje legible.
- [ ] `RpcService` es un servicio OWL singleton (se registra en el env del componente raíz).

## API del servicio

```js
// Llamada genérica
await rpc.call('stock.move', 'action_done', [[id]], {})

// Read
await rpc.read('stock.move', [id1, id2], ['name', 'state', 'move_line_ids'])

// Search + read
await rpc.searchRead('stock.move', [['state', '=', 'assigned']], ['name', 'state'])

// Create / write
await rpc.create('stock.move.line', [{product_id: 5, qty_done: 3}])
await rpc.write('stock.move', [id], {state: 'done'})
```

## Endpoints Odoo nativos usados

| Endpoint | Uso |
|----------|-----|
| `POST /web/session/authenticate` | Login |
| `GET /web/database/list` | Select-DB |
| `POST /web/dataset/call_kw` | Todas las operaciones ORM |
| `POST /web/session/destroy` | Logout |

## Clarificaciones

**Preguntas detectadas:**

1. ~~¿Se mantiene el `left-pad-filter`?~~
2. ~~¿El `ConfigService` tenía config hardcodeada o en archivo?~~

**Decisiones del usuario:**

1. **`left-pad-filter` descartado.** No se migra.
2. **`ConfigService` descartado.** No se migra.
