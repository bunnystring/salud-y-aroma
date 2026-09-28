// Genera /robots.txt al compilar: permite indexar todo e indica dónde está el sitemap.
import { centro } from "../data/centro";
export function GET() {
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${new URL("/sitemap.xml", centro.sitio).href}\n`, {
    headers: { "Content-Type": "text/plain" },
  });
}
