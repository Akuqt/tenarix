import { fileURLToPath } from "url";
import { join } from "path";
const __root = join(fileURLToPath(import.meta.url), "../../../");
import rimraf from "rimraf";

rimraf(__root + "./**/node_modules", { glob: true }, (e) => {
  if (e) console.log(e);
});

rimraf(__root + "./**/dist", { glob: true }, (e) => {
  if (e) console.log(e);
});

rimraf(__root + "./**/release", { glob: true }, (e) => {
  if (e) console.log(e);
});
rimraf(__root + "./**/.turbo", { glob: true }, (e) => {
  if (e) console.log(e);
});
rimraf(__root + "./**/coverage", { glob: true }, (e) => {
  if (e) console.log(e);
});
