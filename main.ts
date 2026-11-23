import { mkdirSync, writeFileSync } from "node:fs";

// One-line joke about office life.
const joke =
  "HR says we're a family here, so I asked for a raise and got grounded.";

// The rules require 1-199 Unicode code points, not only whitespace.
const length = [...joke].length;
if (length < 1 || length > 199 || joke.trim().length === 0) {
  throw new Error(`entry.txt must be 1-199 characters, got ${length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
