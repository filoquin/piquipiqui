---
Estado: Aprobada
Fecha: 2026-07-09
---

# ADR 0002 — OWL 2.x (versión de Odoo 17/18) desde GitHub

## Contexto

La SPA corre sobre Odoo 13, que no incluye OWL. Se necesita traer OWL como dependencia
propia en el bundle (ver ADR 0001). La pregunta es qué versión usar.

## Decisión

**OWL 2.x** — branch estable `owl-2.x` del repositorio oficial:
`https://github.com/odoo/owl/tree/owl-2.x`, equivalente a la versión que usa Odoo 17/18.

## Razones

- OWL 2.x es la versión estable actual del proyecto; OWL 1.x está abandonada.
- Permite adaptar componentes y hooks de Odoo 17/18 directamente (ej. `useBarcodeScanner`,
  componentes de barcode, hooks de lifecycle).
- API más madura: mejor soporte de hooks, reactividad, y composición de componentes.

## Consecuencias

- El `package.json` del frontend apunta a `github:odoo/owl#owl-2.x` (o el tag de release correspondiente).
- Los componentes de Odoo 17/18 son adaptables con mínimo esfuerzo.
- No hay compatibilidad con la capa web de Odoo 13 (webclient), pero la SPA no la usa.
