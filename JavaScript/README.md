# SDK para JavaScript

Plugins y componentes de integración para Login con QR y pasarela de pagos

## CDN

### Navegadores compatibles

IE11, Chrome, Firefox.

Reduce el tiempo de integración usando nuestras librerías oficiales.

Con ellas facilitamos tu proceso de desarrollo en los lenguajes más usados del mercado. Debes instalar tantan-sdk.js para hacer llamadas al token de tarjetas y obtener otras funcionalidades client-side en tus integraciones.
Pegue el script al final de la etiqueta body

```html
<script src="https://sdk.tantan.solutions/tantan-sdk-v1.0.0.min.js"></script>
```

... o puedes generar QRs tu mismo, consultando nuestra API

## Generar QRs

Para el funcionamiento se necesita tener agregada la librería ReconnectingWebsocket.js:

- https://www.jsdelivr.com/package/npm/reconnectingwebsocketjs
- https://cdn.jsdelivr.net/npm/reconnectingwebsocket@1.0.0/reconnecting-websocket.min.js

1. Parámetros
    - `client_id`