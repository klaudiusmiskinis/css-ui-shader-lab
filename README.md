# CSS UI Shader Lab

Proyecto estático listo para desplegar en GitHub Pages.

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
```

## Cómo verlo en local

Abre `index.html` directamente en el navegador.

También puedes usar un servidor local:

```bash
python -m http.server 8080
```

Después abre:

```txt
http://localhost:8080
```

## Cómo subirlo a GitHub Pages

1. Crea un repositorio en GitHub.
2. Sube todo el contenido de esta carpeta al repositorio.
3. Ve a **Settings > Pages**.
4. En **Build and deployment**, selecciona:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
5. Guarda los cambios.

GitHub generará una URL pública para tu página.

## Notas

- No necesita build, npm ni dependencias locales.
- Usa Google Fonts desde CDN.
- Los estilos están separados por responsabilidad:
  - `base.css`: layout global y variables.
  - `panel.css`: panel lateral y controles.
  - `cards.css`: cards y patrones internos.
  - `patterns.css`: fondos tipo Magic Pattern.
  - `shaders.css`: overlays tipo shader.
  - `responsive.css`: responsive y accesibilidad.
