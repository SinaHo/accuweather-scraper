import request from "request";
import { promisify } from "./promisify";
export async function loadUrlText(url) {
  // request.get("", {
  //   headers: {
  //     "user-agent":
  //       "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36",
  //   },
  // });
  const [error, response, body] = await promisify(
    request.get.bind(request),
    url,
    {
      method: "GET",
      headers: {
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36",
        accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "accept-language": "en-US,en;q=0.9",
        "cache-control": "max-age=0",
        "sec-ch-ua":
          '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "cross-site",
        "sec-fetch-user": "?1",
        "upgrade-insecure-requests": "1",
        cookie:
          'awx_aiv=wtr; awx_ppid=a0fce95137374d7fb49609b89c5fe634; _ga=GA1.2.236986293.1632654432; _gid=GA1.2.2051882418.1632654432; us_privacy=1YNN; .AspNet.Consent=yes; _fbp=fb.1.1632654446280.1394090154; userid3p=active; FCCDCF=[["AKsRol-DCK-YiBpmp4A-lYQfvbu5eqQ_nyF3JXhvsam9A01lNqJDMkzxUdEKuKrZu5IDIaF5Jgg6WEywIXYs4ZE2Ru-76tbO2QuWj51Oh7YjkZy3jTGL6jR7KO5knNkkBIdqI_1-TNxqn9RWoCkjqNqy0sJM-TvXTQ=="],null,["[[],[],[],[],null,null,true]",1632666219875],null]; FCNEC=[["AKsRol-DCK-YiBpmp4A-lYQfvbu5eqQ_nyF3JXhvsam9A01lNqJDMkzxUdEKuKrZu5IDIaF5Jgg6WEywIXYs4ZE2Ru-76tbO2QuWj51Oh7YjkZy3jTGL6jR7KO5knNkkBIdqI_1-TNxqn9RWoCkjqNqy0sJM-TvXTQ=="]]; awxconsent=1; __gads=ID=1cdcff12798b9f1a-22e6486059c900c9:T=1632654441:RT=1632654444:S=ALNI_MZoNn8tR4TjlDU5h_4yUd5Eo0TYDg; cto_bundle=Xdxe4l9jYndMdkU4Z0xRYnhNZ1ZCNXNqZXR0cEh1T0JWWEFuV1dhVTV2OTFPUkdaTUVNUGY0UEJZOXFsRzJYdzZIUGIxY2tVaTRlbFM0NDdqcjNqZ3I0NWJXQ0QxRnJlYjZyY1NGa2ppbHlUJTJGQXkyUlllbmxWeHNCWHRKZ0xJRGlzViUyRlA4TlBUbVZwb0ZCczNzN3E0UGt4ZGF3JTNEJTNE; awx_user={%22rl%22:[%22328328%22]%2C%22tp%22:%22C%22%2C%22lang%22:%22en-us%22%2C%22isDarkMapStyle%22:false%2C%22cache%22:{%22lang%22:%22en-us%22%2C%22tp%22:%22C%22%2C%22items%22:{%22328328%22:{%22cond%22:1632670580031%2C%22loc%22:1632670580000%2C%22we%22:1632670579161%2C%22tei%22:[]%2C%22wca%22:false}}}%2C%22cDate%22:%222021-09-26%22}; user-timing={%22t%22:4908}; RT="z=1&dm=www.accuweather.com&si=94bc197e-015c-4bbc-bcdf-1c3e35d44607&ss=ku1dwpeu&sl=0&se=go&tt=0&bcn=%2F%2F6852bd04.akstat.io%2F&ul=2x7px"',
      },
    },
  );

  // https.get(url);
  // let res = await promisify(https.get, url);
  // console.log("res = ", res);

  console.log("error = ", error);
  console.log("body.length = ", body.length);

  return body.toString();
  // console.log("error, response, body = ", Object.keys(response));
}
