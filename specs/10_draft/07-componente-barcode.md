---
Estado: Borrador
Área: componentes reutilizables
---

# Componente Barcode (lector PDA)

## Contexto

La app usa lectores PDA con scanner físico de códigos de barra. Estos dispositivos inyectan
los caracteres escaneados como si el usuario los tipeara por teclado, terminando con `Enter`.
No hay cámara involucrada. El componente debe capturar esa secuencia y emitir el código.

El componente es transversal: lo usan stock (buscar productos, confirmar movimientos)
y roadmap (identificar pickings/turns).

Se usa OWL 2.x (ver ADR 0002), por lo que el componente de barcode de Odoo 17/18
(`@web/core/barcode/barcode_scanner`) puede adaptarse directamente — ya maneja
el patrón de inyección de teclado.

## User stories

**Como operador con PDA**, quiero apuntar el lector al código y que la app lo procese
automáticamente para no tener que tipear nada manualmente.

**Como operador**, quiero poder tipear el código a mano cuando el lector no funciona
para no quedar bloqueado si el scanner falla.

## Acceptance criteria

- [ ] El componente captura la secuencia de caracteres inyectada por el PDA y emite el código al presionar `Enter`.
- [ ] También acepta ingreso manual: el operador tipea el código y presiona `Enter`.
- [ ] El input queda enfocado automáticamente al montar el componente.
- [ ] Emite un evento `onBarcode(code)` que el componente padre consume.
- [ ] Funciona en los contextos de stock y roadmap sin modificación.

## Implementación

Adaptar el barcode hook de Odoo 17/18 (`useBarcodeScanner` o similar) al componente OWL 2.x
de la SPA. La lógica central es:

1. Escuchar `keydown` globalmente (o en el input).
2. Acumular caracteres; si llegan muy rápido (intervalo < ~50ms) es scanner, no teclado humano.
3. Al recibir `Enter`, emitir el código acumulado y limpiar el buffer.

```xml
<BarcodeInput onBarcode="(code) => this.onScan(code)" placeholder="Escanear o tipear..." />
```

## Clarificaciones

**Preguntas detectadas:**

1. ~~¿Captura global o solo con el input enfocado?~~

**Decisiones del usuario:**

1. **Captura global.** El scanner se escucha en `document` (keydown global), sin requerir foco en ningún input.
   El operador puede escanear en cualquier momento sin tener que tocar la pantalla primero.
