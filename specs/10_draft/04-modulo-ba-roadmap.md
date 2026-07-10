---
Estado: Borrador
Área: ba / logística
---

# Módulo BA — Rutas y Roadmap

## Componentes Angular origen

- `RoadmapComponent` (pages/ba/roadmap/)
- `RoadmapItemComponent` (pages/ba/roadmap-item/)
- `RoadmapItemPickingComponent` (pages/ba/roadmap-item-picking/)
- `RoadmapItemGeoMapComponent` (pages/ba/roadmap-item-geo-map/)
- `GeoMapComponent` (main/geo-map/)
- `RoadmapService` (_services/roadmap.service.ts)

## User stories

**Como repartidor**, quiero ver mis rutas del día con los pickings asignados
para planificar el orden de las entregas.

**Como repartidor**, quiero ver en un mapa la ubicación de los clientes de mi ruta
para optimizar el recorrido.

**Como repartidor**, quiero marcar pickings como entregados desde la app
para que el sistema se actualice en tiempo real.

## Acceptance criteria

- [ ] La lista de rutas (roadmap) muestra: nombre, fecha, cantidad de pickings, estado.
- [ ] Al abrir una ruta se ven todos sus pickings con: cliente, dirección, estado.
- [ ] El mapa muestra los clientes de la ruta como marcadores geolocalización.
- [ ] Desde la vista de picking se puede ver el detalle de los productos a entregar.
- [ ] Se puede validar un picking (marcar como entregado) desde la app.
- [ ] El estado del picking se refleja en el mapa (entregado = marcador diferente).

## Componentes OWL a crear

| Componente | Descripción |
|------------|-------------|
| `RoadmapListPage` | Lista de rutas (`stock.delivery.roadmap`) |
| `RoadmapDetailPage` | Detalle de ruta con lista de turns (`stock.delivery.turn`) |
| `RoadmapTurnPage` | Detalle de turn + sus pickings + validación |
| `RoadmapMapPage` | Mapa Leaflet con posiciones de turns (lat/lon de cada turn) |
| `GeoMap` | Wrapper OWL sobre Leaflet.js (reusable) |
| `RoadmapService` | RPC sobre `stock.delivery.roadmap` y `stock.delivery.turn` |

## Notas de implementación

- **Leaflet.js** se puede integrar en OWL con un componente que lo monta en `onMounted()` y lo destruye en `onWillUnmount()`.
- Los datos de geolocalización vienen de `stock.delivery.turn.latitude` / `longitude`
  (Float 20,10, calculados desde `geo_point` GeoPoint EPSG:3857).
- El módulo está definido en `delivery_zone` dentro de `ba_delivery_zone`.
- La ruta en Google Maps la genera `stock.delivery.roadmap.action_show_routes_map()` usando
  `partner_latitude`/`partner_longitude` de los partners — referencia útil para el mapa OWL.

## Clarificaciones

**Preguntas detectadas:**

1. ~~¿`stock.delivery.roadmap` es custom o nativo?~~
2. ~~¿El mapa necesita tracking GPS en tiempo real o solo destinos estáticos?~~
3. ~~¿Los pickings son `stock.picking` estándar o modelo intermedio?~~

**Decisiones del usuario:**

1. **Modelo custom** definido en el addon `ba_delivery_zone` (`delivery_zone/models/stock_delivery_roadmap.py`).

2. **Destinos estáticos.** El mapa muestra las posiciones de los turnos (`stock.delivery.turn.latitude/longitude`).
   Sin tracking GPS del repartidor.

3. **Hay un modelo intermedio: `stock.delivery.turn`.** La cadena real es:
   `stock.delivery.roadmap` → `picking_ids` (stock.picking) → `turn_id` (stock.delivery.turn).
   Cada turn tiene: `partner_id`, `latitude`, `longitude`, `state`, `picking_ids`, `schedule_id`.
   La vista de ruta muestra turns (no pickings directamente); cada turn agrupa los pickings de un cliente.
