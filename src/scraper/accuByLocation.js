import { htmlSoup, loadUrlText, writeToFile } from "../helpers";
export async function accuByLocation(url) {
  let text = await loadUrlText(url);
  let soup = await htmlSoup(text);
  let calendar = soup.find("div", "monthly-calendar");
  if (!calendar) return;
  let days = calendar.findAll("a", "monthly-daypanel");
  if (!days) return;
  let data = {};
  let fone = false;
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
    } catch (err) {
      console.log(`err in  ${__filename} :\n`, err);
    }
  }
  let sp = url.split("/");
  let path = `./output/${sp[4]}-${sp[5]}-${sp[7]}-${sp[sp.length - 1].replace(
    /[?/]/,
    "",
  )}.json`;
  writeToFile(JSON.stringify(data, null, 2), path);
}
