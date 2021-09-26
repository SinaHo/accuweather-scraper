import fs from "fs";

export function loadUrlsFromFile(filepath) {
  return fs
    .readFileSync(filepath)
    .toString()
    .split(/\n|\r\n/);
}
