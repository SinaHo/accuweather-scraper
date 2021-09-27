import http2 from "http2";
export function parseUrl(url) {
  let u = new URL(url);
  return [u.origin, u.pathname];
}

export async function loadUrlText(url) {
  let u = parseUrl(url);
  try {
    const client = http2.connect(
      u[0],
      // {cert: fs.readFileSync("./cert1.cer"),}
    );
    client.on("error", (err) => console.log(err));
    const req = client.request({
      ":authority": "www.accuweather.com",
      ":method": "GET",
      ":path": u[1],
      ":scheme": "https",
      accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
      // "accept-encoding": "gzip, deflate, br",
      "accept-encoding": "identity",
      "accept-language": "en-US,en;q=0.9",
      "sec-ch-ua":
        '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      "sec-fetch-site": "none",
      "sec-fetch-mode": "navigate",
      "sec-fetch-user": "?1",
      "sec-fetch-dest": "document",
      "upgrade-insecure-requests": "1",
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36",
    });
    return await new Promise((resolve, rej) => {
      req.on("response", (headers, flags) => {});

      req.setEncoding("utf8");
      let body = "";
      req.on("data", (chunk) => {
        body += chunk.toString();
      });
      req.on("end", async () => {
        client.close();
        resolve(body);
      });
    });
  } catch (error) {
    return "";
  }
}
