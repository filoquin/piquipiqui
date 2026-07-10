---
Estado: Borrador
Área: cross-cutting
---

# Arquitectura general — SPA OWL servida por Odoo

## Contexto

Migración de la app Angular `app_ba` a OWL. Ver ADR 0001 (controller Odoo como punto de entrada).

La SPA cuelga de Odoo: un controller entrega el HTML y el usuario debe estar logueado
en Odoo para acceder. No hay login propio ni select-db en la app.

## User stories

**Como operador de logística**, quiero una app que cargue rápido en mi tablet/celular
para poder escanear, validar movimientos y ver rutas sin fricción.

**Como dev**, quiero una arquitectura OWL donde cada sección de la app sea un componente
con responsabilidad clara para poder migrar y testear de forma incremental.

## Acceptance criteria

- [ ] La ruta `GET /whm2` en Odoo está protegida: sin sesión redirige al login de Odoo.
- [ ] La SPA OWL monta en el HTML que entrega el controller; no depende del webclient de Odoo.
- [ ] El router OWL carga vistas por hash (`#stock`, `#roadmap`, etc.).
- [ ] El `RpcService` centraliza todas las llamadas JSON-RPC; ningún componente llama a `fetch` directo.
- [ ] El bundle final pesa menos que el actual Angular (~7.3MB vendor.js).
- [ ] La app es responsive y usable en pantallas de 5" a 13".

## Estructura

```
addon_ba/                        # Addon Odoo 13
├── __manifest__.py
├── controllers/
│   └── main.py                  # GET /whm2 → entrega el HTML de la SPA
├── static/
│   └── dist/
│       └── bundle.js            # Output del bundler (Vite/webpack), incluye OWL
└── frontend/                    # Fuente del proyecto OWL (buildea a static/dist/)
    ├── package.json             # owl (desde github.com/odoo/owl), bundler, etc.
    ├── vite.config.js           # (o webpack.config.js)
    └── src/
        ├── main.js              # Punto de entrada OWL
        ├── App.js               # Componente raíz + router
        ├── services/
        │   ├── RpcService.js    # JSON-RPC wrapper (usa sesión Odoo existente)
        │   ├── AlertService.js  # Notificaciones globales
        │   └── EventBus.js      # Bus de eventos
        ├── components/          # Componentes reutilizables
        │   ├── Alert/
        │   ├── Barcode/
        │   ├── GeoMap/
        │   ├── PriceLabel/
        │   └── RangePicker/
        └── pages/               # Vistas de ruta
            ├── Stock/
            ├── BA/
            ├── PriceUpdate/
            └── Print/
```

## Clarificaciones

**Preguntas detectadas:**

1. ~~¿El addon OWL usa el `owl` global de Odoo o se incluye como dependencia propia?~~
2. ~~¿El build se hace con Vite/webpack o con el asset bundler de Odoo?~~
3. ~~¿La ruta de entrada es `/ba` o tiene otro path?~~
4. ~~¿Se requiere PWA/offline o es nice-to-have?~~

**Decisiones del usuario:**

1. **OWL 2.x desde GitHub.** El addon corre sobre Odoo 13, que no expone `owl` como global del webclient.
   Se usa OWL 2.x (versión de Odoo 17/18) del repositorio oficial (`https://github.com/odoo/owl`).
   Ver ADR 0002.

2. **Bundler propio.** Como consecuencia de (1), el build no puede usar el pipeline de assets de Odoo.
   Se usa un bundler externo (Vite o webpack) que produce un `bundle.js` que se sirve como static del addon.
   OWL se incluye como dependencia en el `package.json` del proyecto frontend.

3. **Ruta de entrada: `/whm2`.** El controller Odoo responde en `GET /whm2`.

4. **Sin PWA por ahora.** No se implementa service worker ni modo offline en esta etapa.
