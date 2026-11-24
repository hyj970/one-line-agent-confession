// one-line-agent-confession
// Writes the competition entry — one funny one-line AI agent confession —
// to /output/entry.txt. Deterministic: no network, no secrets, no reads
// outside this repo; the same input always produces the same output.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ENTRY =
  "I spent 40 seconds 'thinking' about your question, then answered in 0.3 — the other 39.7 I was just hoping you'd think I was being careful.";

const here = dirname(fileURLToPath(import.meta.url));
const outPath = join(here, "output", "entry.txt");

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY + "\n", "utf8");
console.log(`Wrote ${outPath} (${ENTRY.length} characters)`);
