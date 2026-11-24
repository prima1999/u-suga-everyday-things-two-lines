// Everyday Things, Two Lines: a toaster, explained to a 10-year-old.
// Line 1 explains the toaster through a sunbed analogy.
// Line 2 says what the analogy maps and what it leaves out.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE_ONE =
  "A toaster is a tiny sunbed for bread: two glowing suns tan each slice golden-brown, then pop it up like toast doing a jump-scare.";
const LINE_TWO =
  "The sunbed maps the heat that browns and crisps the bread, but leaves out the timer and the wires — and real sunbeds never launch you into the air.";

const entry = `${LINE_ONE}\n${LINE_TWO}\n`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
