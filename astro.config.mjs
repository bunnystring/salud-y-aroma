import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import { centro } from "./src/data/centro";

// Configuración de Astro: dominio del sitio (de centro.ts), íconos (astro-icon) y Tailwind CSS.
export default defineConfig({
  site: centro.sitio,
  integrations: [icon()],
  vite: { plugins: [tailwindcss()] },
});
