---
Estado: Implementada
Área: componentes reutilizables
PR/commit: piquipiqui/static/src/services/barcode_service.js
---

# BarcodeService — lector PDA y teclado

## Contexto

La app usa lectores PDA con scanner físico que inyecta caracteres como teclado, terminando con Enter.
La implementación está basada en el `barcode_service.js` de Odoo 18.0 — sin input oculto,
escuchando en `document.body`.

## User stories

**Como operador con PDA**, quiero apuntar el lector al código y que la app lo procese
automáticamente para no tener que tipear nada manualmente.

**Como operador**, quiero poder tipear el código a mano sin perder el foco de la app
para no quedar bloqueado si el scanner falla.

## Acceptance criteria

- [x] Escucha `keydown` en `document.body` — no requiere foco en ningún input.
- [x] Ignora eventos originados en elementos editables (`input`, `textarea`, `[contenteditable]`) salvo que tengan `data-enable-barcode`.
- [x] Dispara el código acumulado al presionar `Enter` o `Tab`, o tras 150ms de silencio.
- [x] Filtra códigos de menos de 2 caracteres (evita falsos positivos de teclas sueltas).
- [x] Patrón pub/sub: `subscribe(cb)` / `unsubscribe(cb)` — cada componente se suscribe en `onMounted` y se desuscribe en `onWillUnmount`.
- [x] `destroy()` limpia el listener global (usado si el servicio se desmonta).

## Implementación

```js
const MAX_TIME_BETWEEN_KEYS_MS = 150;

// Ignora elementos editables salvo data-enable-barcode
function isEditable(el) {
    return el.matches('input,textarea,[contenteditable="true"]');
}

// Flujo:
// keydown → ¿editable sin data-enable-barcode? → ignorar
// tecla de fin (Enter/Tab) → fire() inmediato
// cualquier otra tecla → acumular en buffer + resetear timeout 150ms
// timeout dispara → fire()
// fire() → emitir a todos los suscriptores si buffer.length >= 2
```

## Decisiones

1. **Sin input oculto.** El enfoque de input oculto pierde el foco al tocar la pantalla en PDA. El listener en `document.body` es robusto a cualquier interacción de UI.

2. **150ms de silencio como trigger.** Los scanners PDA inyectan caracteres en ráfaga rápida (< 5ms entre chars). 150ms de silencio garantiza que la secuencia completa fue capturada antes de emitir.

3. **Enter Y Tab como fin de secuencia.** Algunos scanners configurados con Tab como terminador también funcionan.

## Clarificaciones

N/A — spec implementada sin ambigüedades pendientes.
