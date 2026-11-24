import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dir = path.dirname(fileURLToPath(import.meta.url));
const text = fs.readFileSync(path.join(dir, "entry.txt"), "utf8").trim();
const lines = text.split("\n");
if (lines.length !== 1 || text.length < 1 || text.length > 140) {
  console.error(`entry must be exactly one line of 1-140 chars, got ${lines.length} line(s), ${text.length} chars`);
  process.exit(1);
}
const out = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(out, { recursive: true });
fs.writeFileSync(path.join(out, "entry.txt"), text);
