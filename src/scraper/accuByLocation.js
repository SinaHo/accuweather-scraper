import { htmlSoup, loadUrlText } from "../helpers";

export async function accuByLocation(url) {
  let text = await loadUrlText(url);
  console.log("text.length = ", text.length);

  let soup = await htmlSoup(text);
  let calendar = soup.find("a", "monthly-calendar");
  console.log("calendar = ", calendar);

  if (!calendar) return;
  let days = calendar.find("a", "monthly-daypanel");
  let data = {};
  let fone = false;
  for (let day of days) {
    let d = day.find("div", "date");
    let low = day.find("div", "low");
    let high = day.find("div", "high");
    console.log("d,low,high = ", d, low, high);
  }
}
