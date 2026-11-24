import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = `For six months the night-shift janitor practiced English on a borrowed phone in the stairwell, and tonight he read his daughter the whole bedtime story without once looking down.`;

const length = [...LINE].length;
if (length < 1 || length > 240) {
  throw new Error(`entry must be 1-240 characters, got ${length}`);
}
if (LINE.includes("\n")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
