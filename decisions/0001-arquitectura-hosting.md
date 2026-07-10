---
Estado: Aprobada
Fecha: 2026-07-09
---

# ADR 0001 — La SPA OWL es servida por un controller Odoo (no standalone ni embebida en webclient)

## Contexto

Hay tres opciones de hosting para la app OWL:

1. **Standalone puro:** SPA servida desde CDN/nginx, separada de Odoo.
2. **Embebida en webclient:** client action dentro del shell de Odoo.
3. **Servida por controller Odoo:** un `@http.route('/ba')` entrega el HTML de la SPA; la app corre fuera del webclient pero dentro del servidor Odoo.

## Decisión

**Opción 3 — controller Odoo como punto de entrada.**

Un controller en el addon entrega el `index.html` (o el template QWeb) de la SPA.
Para acceder a `/ba` el usuario debe estar logueado en Odoo: el controller verifica la sesión
y redirige al login de Odoo si no existe.

## Razones

- El login y select-db los maneja Odoo nativamente; la app no necesita implementarlos.
- La sesión Odoo ya existe al llegar a la SPA: las llamadas JSON-RPC funcionan sin setup extra.
- La SPA puede usar la cookie de sesión de Odoo directamente.
- El despliegue es simple: un addon Odoo que sirve assets estáticos y el punto de entrada.

## Consecuencias

- **No hay LoginPage ni SelectDbPage** en la SPA OWL.
- **No hay SessionService** complejo: la sesión ya está establecida; el `RpcService` la usa sin configuración.
- El addon Odoo tiene al menos un controller: `GET /ba` → entrega el HTML de la SPA.
- Los assets de la SPA (JS, CSS) se sirven como `static` del addon o vía nginx con alias.
- El `RpcService` OWL llama directamente a `/web/dataset/call_kw` usando la cookie de sesión existente.
