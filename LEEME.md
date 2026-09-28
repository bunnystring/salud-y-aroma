# Salud y Aroma – Sitio web

Sitio de una sola página del centro de estética Salud y Aroma (Puente Aranda, Bogotá).
Hecho con Astro + Tailwind CSS. Todo el contenido del sitio vive en `src/data/centro.ts`.

## Ejecutarlo en tu Mac

1. Instala Node.js (versión 22 o superior) desde nodejs.org.
2. Abre la Terminal en esta carpeta y ejecuta:
   ```
   npm install
   npm run dev
   ```
3. Abre http://localhost:4321 en el navegador. Cada cambio que guardes se ve al instante.

## Estructura

```
src/
  data/centro.ts        Textos, contacto, horarios, servicios, precios, equipo, colores
  pages/index.astro     La página: orden de las secciones
  pages/robots.txt.ts   Genera /robots.txt
  pages/sitemap.xml.ts  Genera /sitemap.xml
  layouts/Base.astro    <head>, SEO, datos para Google y script de efectos
  components/           Una sección por archivo (Portada, Servicios, Nosotros…)
                        y Foto.astro, que usan todas las secciones para las imágenes
  styles/global.css     Estilos comunes, parallax y animaciones
  assets/fotos/         Fotos del sitio (ver LEEME-FOTOS.txt)
  assets/marca/         Isotipo del logo
public/
  videos/               Video de portada
  favicon.png, apple-touch-icon.png
```

## Cambiar contenido

- Textos, precios, horarios, equipo, testimonios: `src/data/centro.ts`.
- Fotos: `src/assets/fotos/`, con los nombres de `src/assets/fotos/LEEME-FOTOS.txt`.
  Se optimizan solas al compilar (AVIF + WebP, varios tamaños).
- Si cambian los días de atención, actualiza también `resumenHorario` (lo muestra la portada).
  Si usas un texto de días nuevo en `horarios`, agrégalo a la tabla `dias` de `src/layouts/Base.astro`
  para que Google lo reciba.

## Cambiar colores o fuentes

- Colores: sección `colores` de `src/data/centro.ts`. Regla 60-30-10: `fondo` domina,
  `primario` apoya y `acento` aparece solo en detalles.
- Fuentes: vienen incluidas (Bodoni Moda para títulos, Figtree para texto) con paquetes `@fontsource`.
  Para cambiarlas: instala el paquete de la nueva fuente (`npm install @fontsource/nombre`),
  cambia los `import` al inicio de `src/layouts/Base.astro` y los nombres en `fuentes`.

## Publicar

```
npm run build
```
Genera la carpeta `dist/`, lista para subir a Cloudflare Pages, Netlify o Vercel
(en cualquiera: conecta el repositorio o arrastra la carpeta `dist/`).
Antes de publicar, cambia `sitio` en `centro.ts` por el dominio real del cliente.

La primera compilación tarda unos minutos porque genera las versiones AVIF; después usa caché.

## Efectos

- Parallax: cualquier foto con la propiedad `parallax` en su componente. Usa animaciones
  nativas del navegador ligadas al scroll, con un respaldo en JavaScript para navegadores antiguos.
  La intensidad se ajusta con `--parallax` en `src/styles/global.css` (7 % en computador, 4 % en celular).
- Transiciones: agrega la clase `revelar` a cualquier bloque para que aparezca suavemente al llegar a él.
- Todo el movimiento se desactiva si la persona tiene activada la opción "reducir movimiento".
- Importante: los contenedores de fotos usan `overflow: clip`, no `overflow: hidden`
  (con `hidden` el parallax deja de funcionar).

## Video de portada

La portada usa `public/videos/portada.*` si `portada.video` tiene valor en `centro.ts`.
Para preparar un video nuevo (bucle de ida y vuelta, sin audio):
```
ffmpeg -i original.mov -an -filter_complex "[0:v]split[a][b];[b]reverse[r];[a][r]concat=n=2:v=1,format=yuv420p" -c:v libx264 -crf 12 bucle.mp4
ffmpeg -i bucle.mp4 -c:v libx264 -preset slow -crf 25 -movflags +faststart portada.mp4
ffmpeg -i bucle.mp4 -c:v libvpx-vp9 -crf 36 -b:v 0 -row-mt 1 portada.webm
ffmpeg -i bucle.mp4 -vf "crop=864:1080:835:0" -c:v libx264 -preset slow -crf 28 -movflags +faststart portada-movil.mp4
ffmpeg -i bucle.mp4 -frames:v 1 -quality 80 portada-poster.webp
```
En el recorte para celular, `835` es la posición horizontal del recorte: ajústala para centrar lo importante.
Para volver a la foto, deja `video: ""` en `portada`.

## Agregar o cambiar otros videos

Guárdalos en `public/videos/` como `nombre.webm`, `nombre.mp4` y `nombre-poster.webp`.
Para optimizar uno nuevo con ffmpeg:
```
ffmpeg -i original.mp4 -an -c:v libx264 -crf 22 -preset slow -pix_fmt yuv420p -movflags +faststart nombre.mp4
ffmpeg -i original.mp4 -an -c:v libvpx-vp9 -crf 32 -b:v 0 nombre.webm
ffmpeg -ss 2 -i original.mp4 -frames:v 1 -quality 82 nombre-poster.webp
```
