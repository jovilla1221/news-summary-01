// news-summary-01 entry for @yo-lo (Node 22, standard library only).
//
// The summary itself lives in summary.txt beside this file. This program
// copies those bytes verbatim to entry.txt in the output directory, so the
// judge reads exactly what is stored in the repository: no generation, no
// network access and no randomness, which means two runs always produce
// identical output.
//
// Inside the grader the output directory is /output. Outside the grader,
// MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, 'summary.txt');

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });

const destination = join(outputDir, 'entry.txt');
copyFileSync(source, destination);

// Integrity check: the written file must be a complete, non-empty copy of
// the source. If the copy were truncated or empty, fail loudly here instead
// of letting a broken entry reach the grader silently.
const sourceSize = statSync(source).size;
const writtenSize = statSync(destination).size;
if (writtenSize === 0 || writtenSize !== sourceSize) {
  throw new Error(
    `copy check failed: wrote ${writtenSize} bytes, source is ${sourceSize} bytes`,
  );
}
