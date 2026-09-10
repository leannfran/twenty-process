// Compara las familias que devuelve /api/family contra las que sobreviven a filterFamilies,
// para auditar exactamente qué títulos se están ocultando (y detectar exclusiones no deseadas).
//
// Uso:
//   node scripts/check-family-filter.mjs [baseUrl]
//   (baseUrl por defecto: http://localhost:3000, requiere el dev server corriendo)

import filterFamilies from "../src/utils/filterFamilies.js";

const baseUrl = process.argv[2] || "http://localhost:3000";

const res = await fetch(`${baseUrl}/api/family`);
if (!res.ok) {
  console.error(`Error al pedir ${baseUrl}/api/family: ${res.status}`);
  process.exit(1);
}

const data = await res.json();
const all = Array.isArray(data?.families) ? data.families : [];
const visible = filterFamilies(all);
const visibleIds = new Set(visible.map((f) => f.id));
const hidden = all.filter((f) => !visibleIds.has(f.id));

console.log(`Total recibidas:  ${all.length}`);
console.log(`Renderizadas:     ${visible.length}`);
console.log(`Ocultadas:        ${hidden.length}`);
console.log("\nOcultadas por el filtro:");
hidden.forEach((f) => console.log(`  - ${f.title}`));
