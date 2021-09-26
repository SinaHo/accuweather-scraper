import fs from "fs";
export function writeToFile(data, path) {
  if (typeof data === "object") {
    data = JSON.stringify(data);
  }
  return fs.writeFileSync(path, data);
}
