---
Estado: Implementada
Área: cross-cutting
PR/commit: implementación completa en /opt/odoo/mig-ba/piquipiqui/
---

# Arquitectura general — SPA OWL servida por Odoo (PiquiPiqui)

## Contexto

Migración de la app Angular `app_ba` a OWL 2.x. La SPA cuelga de Odoo: un controller
entrega el HTML y el usuario debe estar logueado en Odoo para acceder.

## User stories

**Como operador de logística**, quiero una app que cargue rápido en mi tablet/celular
para poder escanear, validar movimientos y ver rutas sin fricción.

**Como dev**, quiero una arquitectura OWL donde cada sección de la app sea un componente
con responsabilidad clara para poder migrar y testear de forma incremental.

## Acceptance criteria

- [x] La ruta `GET /piquipiqui` está protegida: sin sesión redirige al login de Odoo.
- [x] La SPA OWL monta en el HTML que entrega el controller; no depende del webclient de Odoo.
- [x] El router hash-based carga vistas por hash (`#stock/pickings/INT`, `#ba/roadmap`, etc.) con soporte de params (`:id`, `:code`).
- [x] El `RpcService` centraliza todas las llamadas JSON-RPC; ningún componente llama a `fetch` directo.
- [x] La app es responsive y usable en pantallas de 5" a 13".
- [x] PWA manifest + metas Apple/Android: se puede agregar a pantalla de inicio en modo standalone.
- [x] Fullscreen API disponible en dashboard (botón expand/compress).
- [x] Visual Viewport API activa: modales y alertas se ajustan cuando aparece el teclado en fullscreen.

## Estructura implementada

```
piquipiqui/                          # Addon Odoo 13 (renombrado de whm2)
├── __manifest__.py
├── controllers/
│   └── main.py                      # GET /piquipiqui → render piquipiqui.piquipiqui_index
├── views/
│   └── templates.xml                # QWeb template con manifest, FontAwesome, OWL, app.js
├── static/
│   ├── manifest.json                # PWA manifest (standalone, theme #EC008C)
│   └── src/
│       ├── app.js                   # Bootstrap OWL: carga templates via fetch(), monta App
│       ├── app.xml                  # Template raíz WHM2App
│       ├── css/app.css              # Estilos globales (design system propio)
│       ├── services/
│       │   ├── rpc_service.js
│       │   ├── barcode_service.js
│       │   └── alert_service.js
│       ├── components/alert/
│       └── pages/
│           ├── dashboard.(js|xml)   # Inicio con logo PiquiPiqui + botón fullscreen
│           ├── stock/
│           └── ba/
```

## Decisiones implementadas

1. **Sin bundler.** OWL 2.x se sirve como IIFE (`owl.iife.js`). Los templates XML se cargan con `fetch()` en paralelo al inicio y se combinan en un string para el parser OWL. Módulos ES6 nativos para el JS.

2. **Ruta: `/piquipiqui`.** El módulo se llama `piquipiqui` (renombrado desde `whm2`). Template id: `piquipiqui_index`.

3. **PWA implementada.** `manifest.json` con `display: standalone`. Metas `apple-mobile-web-app-capable` y `theme-color: #EC008C`.

4. **Visual Viewport API.** Variables CSS `--vvh` y `--vvt` actualizadas en cada `resize`/`scroll` del visual viewport. Modales y alertas las consumen para no quedar tapadas por el teclado en fullscreen.

5. **Dashboard PiquiPiqui.** Logo SVG inline (pájaro rosado con lombriz), header blanco con borde primario, grilla de 6 tiles, botón Salir (`/web/session/logout`), botón fullscreen.

## Clarificaciones

N/A — spec implementada sin ambigüedades pendientes.
