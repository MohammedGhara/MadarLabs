import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const srcPath = path.join(root, "src/contexts/LanguageContext.tsx");
const s = fs.readFileSync(srcPath, "utf8");
const i = s.indexOf("const translations:");
const brace = s.indexOf("{", i);
let depth = 0;
let end = -1;
for (let j = brace; j < s.length; j++) {
  if (s[j] === "{") depth++;
  if (s[j] === "}") {
    depth--;
    if (depth === 0) {
      end = j + 1;
      break;
    }
  }
}
const obj = s.slice(brace, end);
const out = `import type { Language } from "./types";

export const translations: Record<Language, Record<string, unknown>> = ${obj};
`;
const outPath = path.join(root, "src/locales/translations.ts");
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, out);
console.log("Wrote", outPath, "bytes", out.length);
