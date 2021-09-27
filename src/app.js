import { loadUrlsFromFile } from "./helpers";
import { accuByLocation } from "./scraper";
const urls = loadUrlsFromFile(process.argv[2]);
for (let u of urls) {
  if (!u || u.length < 5) continue;
  accuByLocation(u);
}
