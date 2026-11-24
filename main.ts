// Roast Your Own Agent — make.fun entry (u-febri-yudila-roast-your-own-agent-f3359068).
// Writes one funny line roasting the entrant's own AI agent to entry.txt.
// Deterministic, no network, reads nothing outside this repo.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROAST =
  "I gave my agent one clear instruction and a full context window; it used the window, forgot the instruction, and asked me what we're building.";

function writeEntry(dir: string): void {
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "entry.txt"), ROAST + "\n", "utf8");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
writeEntry(outDir);
// When run locally with a custom output dir, also leave a copy at /output
// if that path is writable, so a local run matches the graded run.
if (outDir !== "/output") {
  try {
    writeEntry("/output");
  } catch {
    // /output is not writable locally; the graded run uses it instead.
  }
}
