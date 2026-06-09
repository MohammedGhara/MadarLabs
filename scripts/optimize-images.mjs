import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.resolve(__dirname, "../public");

const images = [
  "portfolio-shishaking.png",
  "portfolio-hebafashion.png",
];

for (const file of images) {
  const input = path.join(publicDir, file);
  const base = file.replace(/\.png$/i, "");

  await sharp(input)
    .webp({ quality: 82, effort: 4 })
    .toFile(path.join(publicDir, `${base}.webp`));

  await sharp(input)
    .avif({ quality: 65, effort: 4 })
    .toFile(path.join(publicDir, `${base}.avif`));

  const png = fs.statSync(input).size;
  const webp = fs.statSync(path.join(publicDir, `${base}.webp`)).size;
  const avif = fs.statSync(path.join(publicDir, `${base}.avif`)).size;
  console.log(`${base}: png=${png} webp=${webp} avif=${avif}`);
}
