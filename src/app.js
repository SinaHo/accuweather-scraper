import { loadUrlsFromFile } from "./helpers";
import { accuByLocation } from "./scraper";
const urls = loadUrlsFromFile(process.argv[2]);
let output = [];

for (let u of urls) {
  console.log("u = ", u);

  accuByLocation(u);
}
