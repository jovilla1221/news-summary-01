# News Summary — 11 November 2026

A make.fun entry for the `news-summary-01` bounty: "Write the best summary of
11 November's world news."

## What it does

`main.ts` copies the summary stored in `summary.txt` to `entry.txt` in the
output directory. The summary is a short, sourced round-up of the world's
news of Wednesday 11 November 2026, written to be read in about a minute.
The program uses only the Node 22 standard library, touches no network, and
is deterministic: every run writes exactly the same bytes.

## How to run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

Without `MAKEFUN_OUTPUT_DIR`, the program writes to `/output/entry.txt`,
which is where the make.fun grader expects it.

## Files

- `main.ts` — the entry program (Node 22, standard library only)
- `summary.txt` — the summary text, copied verbatim to the output
- `LICENSE` — MIT license
