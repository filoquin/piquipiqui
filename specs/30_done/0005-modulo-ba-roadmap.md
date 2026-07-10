---
Estado: Implementada
Área: ba / logística
PR/commit: piquipiqui/static/src/pages/ba/
---

# Módulo BA — Rutas y Roadmap

## User stories

**Como repartidor**, quiero ver mis rutas del día con los pickings asignados
para planificar el orden de las entregas.

**Como repartidor**, quiero ver en un mapa la ubicación de los clientes de mi ruta
para optimizar el recorrido.

**Como repartidor**, quiero verificar y validar cada remito desde la app
para que el sistema se actualice en tiempo real sin entrar al backend.

**Como repartidor**, quiero reordenar los pickings de una ruta
para adaptar el orden de entrega según la situación del día.

## Acceptance criteria

- [x] Lista de rutas muestra: nombre, fecha, conductor, vehículo, cantidad de remitos, estado.
- [x] Detalle de ruta muestra: cabecera de roadmap + tarjetas de picking con cliente, dirección, teléfono, estado.
- [x] Tarjeta de picking tiene 5 botones de acción: geoposicionar, WhatsApp, llamar, subir, bajar.
- [x] Botones subir/bajar intercambian `roadmap_sequence` y reordenan la lista localmente.
- [x] WhatsApp construye el link `wa.me/549XXXXXXXXXX` para números argentinos de 10 dígitos.
- [x] El teléfono no se repite (dedup de `phone` y `mobile`).
- [x] Al tocar la tarjeta de picking navega a `ba/roadmap/:id/picking/:pickingId`.
- [x] Vista de remito (`RoadmapPicking`) muestra líneas de `stock.move` con scanner, modal de cantidades y botón validar.
- [x] Mapa Leaflet muestra turns con marcadores; click en marcador abre popup con nombre del turn.
- [x] Vista de turn muestra los pickings del turn con sus datos.
- [x] Estados de picking localizados: `draft→Borrador`, `waiting→Esperando`, `confirmed→Confirmado`, `assigned→Listo`, `done→Entregado`, `cancel→Cancelado`.

## Componentes implementados

| Componente | Modelo principal | Descripción |
|------------|-----------------|-------------|
| `RoadmapList` | `stock.delivery.roadmap` | Lista de rutas |
| `RoadmapDetail` | `stock.picking` | Detalle de ruta con tarjetas de picking |
| `RoadmapTurn` | `stock.delivery.turn` | Detalle de un turn y sus pickings |
| `RoadmapMap` | `stock.delivery.turn` | Mapa Leaflet con posiciones de turns |
| `RoadmapPicking` | `stock.move` | Remito: líneas + scanner + validación |

## Decisiones de implementación

- **`RoadmapDetail` usa `stock.picking`** directamente (no `stock.delivery.turn` como intermediario) porque el picking tiene `roadmap_sequence` propio para el reordenamiento.
- **Reordenamiento**: `_swapSequence(indexA, indexB)` intercambia `roadmap_sequence` de los dos pickings con dos llamadas `rpc.write` paralelas y actualiza el array local sin recargar.
- **WhatsApp Argentina**: si el número limpio tiene 10 dígitos, se prepende `549`. Si ya tiene prefijo internacional no se toca.
- **Mapa**: Leaflet.js cargado desde CDN, inicializado en `onMounted()`, destruido en `onWillUnmount()`. Tiles OpenStreetMap.

## Clarificaciones

N/A — spec implementada sin ambigüedades pendientes.
