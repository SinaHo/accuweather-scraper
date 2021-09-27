import request from "request";
import { promisify } from "./promisify";
export async function loadUrlText(url) {
  // request.get("", {
  //   headers: {
  //     "user-agent":
  //       "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36",
  //   },
  //   cert: "omit",
  // });
  // })
  // const [error, response, body] = await promisify(
  //   request.get.bind(request),
  //   url,
  //   {
  //     method: "GET",
  //     headers: {
  //       "user-agent":
  //         "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36",
  //       accept:
  //         "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
  //       authority: "www.accuweather.com",
  //       pragma: "no-cache",
  //       "cache-control": "no-cache",
  //       "accept-language": "en-US,en;q=0.9",
  //       "cache-control": "max-age=0",
  //       "sec-ch-ua":
  //         '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
  //       "sec-ch-ua-mobile": "?0",
  //       "sec-ch-ua-platform": '"Windows"',
  //       "sec-fetch-dest": "document",
  //       "sec-fetch-mode": "navigate",
  //       "sec-fetch-site": "cross-site",
  //       "sec-fetch-user": "?1",
  //       "upgrade-insecure-requests": "1",
  //       cookie:
  //         'awx_aiv=wtr; awx_ppid=a0fce95137374d7fb49609b89c5fe634; _ga=GA1.2.236986293.1632654432; _gid=GA1.2.2051882418.1632654432; us_privacy=1YNN; .AspNet.Consent=yes; _fbp=fb.1.1632654446280.1394090154; userid3p=active; FCCDCF=[["AKsRol-DCK-YiBpmp4A-lYQfvbu5eqQ_nyF3JXhvsam9A01lNqJDMkzxUdEKuKrZu5IDIaF5Jgg6WEywIXYs4ZE2Ru-76tbO2QuWj51Oh7YjkZy3jTGL6jR7KO5knNkkBIdqI_1-TNxqn9RWoCkjqNqy0sJM-TvXTQ=="],null,["[[],[],[],[],null,null,true]",1632666219875],null]; FCNEC=[["AKsRol-DCK-YiBpmp4A-lYQfvbu5eqQ_nyF3JXhvsam9A01lNqJDMkzxUdEKuKrZu5IDIaF5Jgg6WEywIXYs4ZE2Ru-76tbO2QuWj51Oh7YjkZy3jTGL6jR7KO5knNkkBIdqI_1-TNxqn9RWoCkjqNqy0sJM-TvXTQ=="]]; awxconsent=1; __gads=ID=1cdcff12798b9f1a-22e6486059c900c9:T=1632654441:RT=1632654444:S=ALNI_MZoNn8tR4TjlDU5h_4yUd5Eo0TYDg; cto_bundle=Xdxe4l9jYndMdkU4Z0xRYnhNZ1ZCNXNqZXR0cEh1T0JWWEFuV1dhVTV2OTFPUkdaTUVNUGY0UEJZOXFsRzJYdzZIUGIxY2tVaTRlbFM0NDdqcjNqZ3I0NWJXQ0QxRnJlYjZyY1NGa2ppbHlUJTJGQXkyUlllbmxWeHNCWHRKZ0xJRGlzViUyRlA4TlBUbVZwb0ZCczNzN3E0UGt4ZGF3JTNEJTNE; awx_user={%22rl%22:[%22328328%22]%2C%22tp%22:%22C%22%2C%22lang%22:%22en-us%22%2C%22isDarkMapStyle%22:false%2C%22cache%22:{%22lang%22:%22en-us%22%2C%22tp%22:%22C%22%2C%22items%22:{%22328328%22:{%22cond%22:1632670580031%2C%22loc%22:1632670580000%2C%22we%22:1632670579161%2C%22tei%22:[]%2C%22wca%22:false}}}%2C%22cDate%22:%222021-09-26%22}; user-timing={%22t%22:4908}; RT="z=1&dm=www.accuweather.com&si=94bc197e-015c-4bbc-bcdf-1c3e35d44607&ss=ku1dwpeu&sl=0&se=go&tt=0&bcn=%2F%2F6852bd04.akstat.io%2F&ul=2x7px"',
  //     },
  //   },
  // );

  var headers = {
    authority: "www.accuweather.com",
    pragma: "no-cache",
    "cache-control": "no-cache",
    "sec-ch-ua":
      '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"Windows"',
    "upgrade-insecure-requests": "1",
    "user-agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36",
    accept:
      "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "sec-fetch-site": "none",
    "sec-fetch-mode": "navigate",
    "sec-fetch-user": "?1",
    "sec-fetch-dest": "document",
    "accept-language": "en-US,en;q=0.9",
    cookie:
      'awx_aiv=wtr; awx_ppid=a0fce95137374d7fb49609b89c5fe634; _ga=GA1.2.236986293.1632654432; _gid=GA1.2.2051882418.1632654432; us_privacy=1YNN; .AspNet.Consent=yes; _fbp=fb.1.1632654446280.1394090154; userid3p=active; AKA_A2=A; ak_bmsc=DA21EFB56D49C01D8466D55E3BB722F7~000000000000000000000000000000~YAAQNPAVAqkFfBJ8AQAA/usKIw1uHxZ5ua9S421s7j7FwdabHMdHKIX2v/mKqzn6C64AWqNR0pewAu5eJAlfFonXn1P165gqGDEDthP49IE3BtPy5C6ApWfWjTQdLuWAHHlwehyYgtH9Wouz3Woac8iSjZQMObwJZzvCji9hmn0kZpYjA5guGr43yFC74NhvTjocFtRuwQ5gcwYifXYaQusMvEaUpybRpEg/WaKX90bJk77dKNaTBFEX69mYqhowNvIgii9zxzdmltHNKdXTng4/5LJN91595UZQZE2zK6+f3r+9+2C17DQlq111OARTXE9zo5HxbNb1a9cZdlnyJhbg7Hs4tr3a/PiLpok7D0HzPf1AKl0psImxTJPkBqlne0jK9SL9AX8475prfg2Gl64j/lc53rkjTpNTei9lC52x13INhTNAop9olKTTGAVWEWNOqVvxVnO5yTSF/ewxatv2jRKSmepQU7O6KctxEAaU0ib8RwaIf8a+vNJG; awx_session_essential=%7B%22partner%22%3Anull%2C%22featuredIndex%22%3Anull%7D; _gat_awxTracker=1; FCCDCF=[["AKsRol-gARJRVmDS5CTvPf66Kbah2LCUIaTEwzYzSfHwmdb0HJVtZqxQdeh2ptkNAwR8J6QeAldM4MMq2Jy0UOAoHViFjntzX58E4F0zBL6Cpp-8_GJudfzoCnUnNLQ-xYz3Nv6UkMn3-4gqhS54OnLR2bZj4MR8vw=="],null,["[[],[],[],[],null,null,true]",1632676124208],null]; FCNEC=[["AKsRol-gARJRVmDS5CTvPf66Kbah2LCUIaTEwzYzSfHwmdb0HJVtZqxQdeh2ptkNAwR8J6QeAldM4MMq2Jy0UOAoHViFjntzX58E4F0zBL6Cpp-8_GJudfzoCnUnNLQ-xYz3Nv6UkMn3-4gqhS54OnLR2bZj4MR8vw=="]]; __gads=ID=1cdcff12798b9f1a-22b9598159c9009f:T=1632654441:RT=1632676127:S=ALNI_Ma5bCYnRVftV7CEuRBxG-05WgbUCQ; awx_session=%7B%22categoryFlow%22%3A%5B%5D%2C%22pageView%22%3A2%2C%22visitFlow%22%3A%5B%22monthly%22%2C%22monthly%22%5D%7D; bm_sv=1D1C9180661E07F543B0F0BAB7BB7245~Ds1pFWG0tAbnrDZ8EgYq72mHlP9jdcIbsYyvpJAY3QorShUY3803r6kwVNcXk+9YJ2k7NTEDOBCcpvENYIKPo30aEISpnM2otGTXypUUCoVXRkEMGK8jmp2uuX01K6jVNOMGT2b8FwHUkGW8CrmKdJVs25ki3zSXCswaddOlzec=; awx_user={%22rl%22:[%22328328%22]%2C%22tp%22:%22C%22%2C%22lang%22:%22en-us%22%2C%22isDarkMapStyle%22:false%2C%22cache%22:{%22lang%22:%22en-us%22%2C%22tp%22:%22C%22%2C%22items%22:{%22328328%22:{%22cond%22:1632676135423%2C%22loc%22:1632676135000%2C%22we%22:1632676134481%2C%22tei%22:[]%2C%22wca%22:false}}}%2C%22cDate%22:%222021-09-26%22}; cto_bundle=g84soV9jYndMdkU4Z0xRYnhNZ1ZCNXNqZXRubSUyQloyQmtzTFZ2S1Q5eSUyQkUzamw4NGtqcHdKSCUyQjdDc3ZjUG1BTUNsYWxHbmI5JTJGZlFMdjVGbmZmbHg4SFRqbkt2QUxxcEs5VXdxZTVjcFNWZlhYcTYzd2t4N0VXamNaTE5DZVQyNjluMiUyQldxOEglMkZaZ09GWXRHTEprT21pMzd1R2clM0QlM0Q; user-timing={%22t%22:36}; RT="z=1&dm=www.accuweather.com&si=94bc197e-015c-4bbc-bcdf-1c3e35d44607&ss=ku1h7ipy&sl=1&se=go&tt=wi&bcn=%2F%2F1737ad59.akstat.io%2F&ld=b1n&ul=12nw"',
    host: "www.accuweather.com",
    // "Content-Type": "application/x-www-form-urlencoded",
    Connection: "keep-alive",
  };

  var options = {
    url: "https://accuweather.com/en/gb/london/ec4a-2/august-weather/328328",
    // headers: headers,
    // followRedirect: true,
    // followAllRedirects: true,
    // maxRedirects: 30,
    // timeout: 15000,
  };

  const [error, response, body] = await promisify(
    request.get.bind(request),
    options,
  );
  // request.get(options, (err, res, body) => console.log(err, res, body));
  // https.get(url);
  // let res = await promisify(https.get, url);
  // console.log("res = ", res);

  console.log("error = ", error);
  console.log("body.length = ", body.length);

  return body.toString();
  return "";
  // console.log("error, response, body = ", Object.keys(response));
}
