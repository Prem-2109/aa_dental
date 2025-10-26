import { writeFileSync } from "fs";
import { resolve } from "path";

// Example: generate sitemap
const urls = [
  "https://aa-dental.netlify.app/",
  "https://aa-dental.netlify.app/about",
  "https://aa-dental.netlify.app/services",
  "https://aa-dental.netlify.app/contact",
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (url) => `
  <url>
    <loc>${url}</loc>
  </url>`
    )
    .join("")}
</urlset>`;

writeFileSync(resolve("./dist/sitemap.xml"), sitemap);
console.log("✅ Sitemap generated!");
