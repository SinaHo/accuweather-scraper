import { htmlSoup, loadUrlText, writeToFile } from "../helpers";
import fs from "fs";

export async function accuByLocation(url) {
  let text = await loadUrlText(url);
  console.log("text.length = ", text.length);
  console.log("text. = ", text.indexOf("monthly-calendar"));
  let soup = await htmlSoup(text);
  let calendar = soup.find("div", "monthly-calendar");
  // let calendar = soup.find("a");
  //   console.log("calendar = ", calendar);

  if (!calendar) return;
  let days = calendar.findAll("a", "monthly-daypanel");
  if (!days) return;
  let data = {};
  let fone = false;
  // console.log("days = ", Object.keys(days[0].find("div", "date").contents));
  //   console.log("days = ", days[0].find("div", "date").contents[0]._text.trim());

  for (let day of days) {
    try {
      let d = day.find("div", "date").contents[0]._text.trim();
      let low = day
        .find("div", "low")
        .contents[0]._text.trim()
        .replace("&#xB0", "")
        .replace(";", "");
      let high = day
        .find("div", "high")
        .contents[0]._text.trim()
        .replace("&#xB0", "")
        .replace(";", "");
      if (d == "1") {
        if (fone) break;
        fone = true;
      }
      data[d] = { low, high };
    } catch (err) {}
  }
  let sp = url.split("/");
  let path = `./output/${sp[4]}-${sp[5]}-${sp[7]}.json`;
  writeToFile(JSON.stringify(data, null, 2), path);
}

// export async function accuByLocation(url) {
//   let text = await loadUrlText(url);
//   const $ = cheerio.load(text);
//   let calendar = $("div.monthly-calendar");
//   if (!calendar) return;
//   let days = calendar.find("a.monthly-daypanel");
//   console.log("days.length = ", days.length);
//   let fOne = false;
//   let data = {};
//   for (let day of days) {
//     let d = day.find("div.date");
//     let low = day.find("div.low");
//     let high = day.find("div.high");
//     if (!fOne) {
//       console.log("d,low,high = ", d, low, high);
//     }
//     fOne = true;
//   }
// }
