import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const src = fs.readFileSync(path.join(root, "src/locales/translations.ts"), "utf8");

for (const lang of ["en", "ar", "he"]) {
  const marker = `  ${lang}: {`;
  const start = src.indexOf(marker);
  if (start === -1) throw new Error(`Missing locale block: ${lang}`);

  let depth = 0;
  let i = start + marker.length - 1;
  for (; i < src.length; i++) {
    const ch = src[i];
    if (ch === "{") depth++;
    else if (ch === "}") {
      depth--;
      if (depth === 0) {
        i++;
        break;
      }
    }
  }

  const body = src.slice(start + lang.length + 3, i).trim();
  const out = `export default ${body} as const;\n`;
  fs.writeFileSync(path.join(root, `src/locales/${lang}.ts`), out);
  console.log(`${lang}: ${out.length} bytes`);
}
