// Genera /sitemap.xml al compilar, con la página única y la fecha de compilación.
import { centro } from "../data/centro";
export function GET() {
  const hoy = new Date().toISOString().slice(0, 10);
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${new URL("/", centro.sitio).href}</loc><lastmod>${hoy}</lastmod></url>
</urlset>`,
    { headers: { "Content-Type": "application/xml" } },
  );
}
