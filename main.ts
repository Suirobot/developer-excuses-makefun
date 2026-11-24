// Developer Excuses — entrypoint.
// Writes one funny single-line excuse a developer gives when code
// breaks in production (at most 200 characters) to /output/entry.txt
// for the house judge.
// Competition: u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3
// (make.fun, account @bangjacky). The line is assembled from beats
// below, so the setup and the reveal can be tuned separately.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT = "/output/entry.txt";

// The excuse, beat by beat: the oldest line in the book first,
// then what the team actually did about it.
const PARTS = [
  "It worked on my machine, so we shipped my machine:",
  "it has run production from the break room for six months,",
  "and nobody is allowed to reboot it.",
];
const LINE = PARTS.join(" ");

// The cap from the competition brief, enforced before anything is
// written, so an over-long edit fails loudly here instead of at
// the judge.
const CAP = 200;
if (LINE.length < 1 || LINE.length > CAP) {
  throw new Error(`entry is ${LINE.length} chars; cap is ${CAP}`);
}

function main(): void {
  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, LINE, "utf8");
  console.log(`wrote ${LINE.length} chars to ${OUT}`);
}

main();
