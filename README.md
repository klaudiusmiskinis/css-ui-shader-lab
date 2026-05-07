# CSS UI Shader Lab

CSS UI Shader Lab es un experimento visual para probar overlays, patrones generativos y efectos tipo shader sobre una interfaz web usando únicamente HTML, CSS y JavaScript.

El proyecto explora cómo filtros CSS, blend modes, capas superpuestas, dithering, halftone, scanlines, patrones geométricos y efectos inspirados en PSX pueden transformar la apariencia de una UI sin usar WebGL ni librerías externas.

## Características

- Panel lateral interactivo para cambiar efectos en tiempo real.
- Overlays tipo shader con presets visuales.
- Patrones CSS personalizables.
- Controles de opacidad, blur, contraste, saturación y escala.
- Cards con estilos, texturas y fondos individuales.
- Opción para mostrar u ocultar las cards.
- Diseño responsive.
- Sin build, sin npm y sin dependencias de framework.

## Estructura

```txt
css-ui-shader-lab/
├── index.html
├── css/
│   ├── base.css
│   ├── panel.css
│   ├── cards.css
│   ├── patterns.css
│   ├── shaders.css
│   └── responsive.css
└── js/
    └── main.js
