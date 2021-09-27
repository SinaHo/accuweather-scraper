import request from "request-promise";
import http2 from "http2";
import axios from "axios";
import fs from "fs";
const {} = http2.constants;
export function parseUrl(url) {}
//https://www.accuweather.com/en/gb/london/ec4a-2/august-weather/328328

export async function loadUrlText(url) {
  const client = http2.connect("https://www.accuweather.com", {
    cert: fs.readFileSync("./cert1.cer"),
  });
  client.on("error", (err) => console.error(err));
  // const con = client.request({
  //   ":method": "CONNECT",
  //   ":authority": `www.accuweather.com`,
  // });

  // con.on("response", (headers) => {
  //   console.log(headers[http2.constants.HTTP2_HEADER_STATUS]);
  // });
  const req = client.request({
    ":path": "/en/gb/london/ec4a-2/august-weather/328328",
    ":method": "GET",
    ":authority": "www.accuweather.com",
    ":scheme": "https",
    // pragma: "no-cache",
    // "cache-control": "no-cache",
    // "sec-ch-ua":
    //   '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
    // "sec-ch-ua-mobile": "?0",
    // "sec-ch-ua-platform": '"Windows"',
    // "upgrade-insecure-requests": "1",
    // "user-agent":
    //   "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36",
    // accept:
    //   "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    // "sec-fetch-site": "none",
    // "sec-fetch-mode": "navigate",
    // "sec-fetch-user": "?1",
    // "sec-fetch-dest": "document",
    // "accept-language": "en-US,en;q=0.9",
    // cookie: `ak_bmsc=DA21EFB56D49C01D8466D55E3BB722F7~000000000000000000000000000000~YAAQZqDWdrYwFyR8AQAAIUY2JA35vKiA7ut6E4HmVuOUXTiBxskoaT4WvsadboOPcxt17Vb4vguXBAjOfu2mW4JEE\tZg2VKYSnQnPbSj8WGIBCebUAd5cFzU4VEgvtGBYRSe59hy62\XOWfl6apH+B1ohjisWe4vKfnm+eHodFkDptUux+AIgrO0UB3jaGP5hOU7A8rDmG\G6v1HipvcM7P2Ab5fBsMaXNKBoDV0yAV3Rxqgrnqz2JaIOChCtDPp4TRuoxFwkLtU8wZQoUBd+8\CeGAk9U\HkNz\JcTW9S6IwQQhYqlqYoFYFkGk9bVZXcdudmBLoZBMb64IgSsXOWs9yaeixQxCm22w9yQBuK\QDeEdRAwkcVe7pNRN3uKKs2Blim+q5K+5VSfd3+gPZBTgkmi2\yHlLbJERcZ3v\CbxWgPu0g78gpYDaK\N0l4r4UF1eOBU\R4llX\U+DGX85M\SKBuUvyigRBrIo4roUHne2FOiiSfs8k3rC;`,
    // ":host": "www.accuweather.com",
    // "Content-Type": "application/x-www-form-urlencoded",
    // Connection: "keep-alive",
  });

  req.on("response", (headers, flags) => {
    for (const name in headers) {
      console.log(`${name}: ${headers[name]}`);
    }
  });

  req.setEncoding("utf8");
  let data = "";
  req.on("data", (chunk) => {
    data += chunk;
  });
  req.on("end", () => {
    // console.log(`\n${data}`);
    fs.writeFileSync("t.html", data);
    client.close();
  });
  req.end();
  return "";
}

// import { exec } from "child_process";
// import { promisify } from "util";

// export async function loadUrlText(url) {
//   exec(
//     `curl '${url}' -H 'authority: www.accuweather.com' -H 'pragma: no-cache'   -H 'cache-control: no-cache'    -H 'sec-ch-ua: "Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"'    -H 'sec-ch-ua-mobile: ?0'    -H 'sec-ch-ua-platform: "Windows"'    -H 'upgrade-insecure-requests: 1'    -H 'user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36'    -H 'accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9'    -H 'sec-fetch-site: none'    -H 'sec-fetch-mode: navigate'    -H 'sec-fetch-user: ?1'    -H 'sec-fetch-dest: document'    -H 'accept-language: en-US,en;q=0.9'    -H 'cookie: awx_aiv=wtr; awx_ppid=a0fce95137374d7fb49609b89c5fe634; _ga=GA1.2.236986293.1632654432; _gid=GA1.2.2051882418.1632654432; us_privacy=1YNN; .AspNet.Consent=yes; _fbp=fb.1.1632654446280.1394090154; userid3p=active; AKA_A2=A; ak_bmsc=DA21EFB56D49C01D8466D55E3BB722F7~000000000000000000000000000000~YAAQNPAVAqkFfBJ8AQAA/usKIw1uHxZ5ua9S421s7j7FwdabHMdHKIX2v/mKqzn6C64AWqNR0pewAu5eJAlfFonXn1P165gqGDEDthP49IE3BtPy5C6ApWfWjTQdLuWAHHlwehyYgtH9Wouz3Woac8iSjZQMObwJZzvCji9hmn0kZpYjA5guGr43yFC74NhvTjocFtRuwQ5gcwYifXYaQusMvEaUpybRpEg/WaKX90bJk77dKNaTBFEX69mYqhowNvIgii9zxzdmltHNKdXTng4/5LJN91595UZQZE2zK6+f3r+9+2C17DQlq111OARTXE9zo5HxbNb1a9cZdlnyJhbg7Hs4tr3a/PiLpok7D0HzPf1AKl0psImxTJPkBqlne0jK9SL9AX8475prfg2Gl64j/lc53rkjTpNTei9lC52x13INhTNAop9olKTTGAVWEWNOqVvxVnO5yTSF/ewxatv2jRKSmepQU7O6KctxEAaU0ib8RwaIf8a+vNJG; awx_session_essential=%7B%22partner%22%3Anull%2C%22featuredIndex%22%3Anull%7D; _gat_awxTracker=1; FCCDCF=[["AKsRol-gARJRVmDS5CTvPf66Kbah2LCUIaTEwzYzSfHwmdb0HJVtZqxQdeh2ptkNAwR8J6QeAldM4MMq2Jy0UOAoHViFjntzX58E4F0zBL6Cpp-8_GJudfzoCnUnNLQ-xYz3Nv6UkMn3-4gqhS54OnLR2bZj4MR8vw=="],null,["[[],[],[],[],null,null,true]",1632676124208],null]; FCNEC=[["AKsRol-gARJRVmDS5CTvPf66Kbah2LCUIaTEwzYzSfHwmdb0HJVtZqxQdeh2ptkNAwR8J6QeAldM4MMq2Jy0UOAoHViFjntzX58E4F0zBL6Cpp-8_GJudfzoCnUnNLQ-xYz3Nv6UkMn3-4gqhS54OnLR2bZj4MR8vw=="]]; __gads=ID=1cdcff12798b9f1a-22b9598159c9009f:T=1632654441:RT=1632676127:S=ALNI_Ma5bCYnRVftV7CEuRBxG-05WgbUCQ; awx_session=%7B%22categoryFlow%22%3A%5B%5D%2C%22pageView%22%3A2%2C%22visitFlow%22%3A%5B%22monthly%22%2C%22monthly%22%5D%7D; bm_sv=1D1C9180661E07F543B0F0BAB7BB7245~Ds1pFWG0tAbnrDZ8EgYq72mHlP9jdcIbsYyvpJAY3QorShUY3803r6kwVNcXk+9YJ2k7NTEDOBCcpvENYIKPo30aEISpnM2otGTXypUUCoVXRkEMGK8jmp2uuX01K6jVNOMGT2b8FwHUkGW8CrmKdJVs25ki3zSXCswaddOlzec=; awx_user={%22rl%22:[%22328328%22]%2C%22tp%22:%22C%22%2C%22lang%22:%22en-us%22%2C%22isDarkMapStyle%22:false%2C%22cache%22:{%22lang%22:%22en-us%22%2C%22tp%22:%22C%22%2C%22items%22:{%22328328%22:{%22cond%22:1632676135423%2C%22loc%22:1632676135000%2C%22we%22:1632676134481%2C%22tei%22:[]%2C%22wca%22:false}}}%2C%22cDate%22:%222021-09-26%22}; cto_bundle=g84soV9jYndMdkU4Z0xRYnhNZ1ZCNXNqZXRubSUyQloyQmtzTFZ2S1Q5eSUyQkUzamw4NGtqcHdKSCUyQjdDc3ZjUG1BTUNsYWxHbmI5JTJGZlFMdjVGbmZmbHg4SFRqbkt2QUxxcEs5VXdxZTVjcFNWZlhYcTYzd2t4N0VXamNaTE5DZVQyNjluMiUyQldxOEglMkZaZ09GWXRHTEprT21pMzd1R2clM0QlM0Q; user-timing={%22t%22:36}; RT="z=1&dm=www.accuweather.com&si=94bc197e-015c-4bbc-bcdf-1c3e35d44607&ss=ku1h7ipy&sl=1&se=go&tt=wi&bcn=%2F%2F1737ad59.akstat.io%2F&ld=b1n&ul=12nw"'`,
//     (e, out, err) => {
//       if (e || err) {
//         return console.log("error,stderr = ", e, err);
//       }
//       console.log("out = ", out);
//     },
//   );
//   // const [e, out, err] = promisify(
//   //   exec,
//   //   `curl '${url}' -H 'authority: www.accuweather.com' -H 'pragma: no-cache'   -H 'cache-control: no-cache'    -H 'sec-ch-ua: "Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"'    -H 'sec-ch-ua-mobile: ?0'    -H 'sec-ch-ua-platform: "Windows"'    -H 'upgrade-insecure-requests: 1'    -H 'user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36'    -H 'accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9'    -H 'sec-fetch-site: none'    -H 'sec-fetch-mode: navigate'    -H 'sec-fetch-user: ?1'    -H 'sec-fetch-dest: document'    -H 'accept-language: en-US,en;q=0.9'    -H 'cookie: awx_aiv=wtr; awx_ppid=a0fce95137374d7fb49609b89c5fe634; _ga=GA1.2.236986293.1632654432; _gid=GA1.2.2051882418.1632654432; us_privacy=1YNN; .AspNet.Consent=yes; _fbp=fb.1.1632654446280.1394090154; userid3p=active; AKA_A2=A; ak_bmsc=DA21EFB56D49C01D8466D55E3BB722F7~000000000000000000000000000000~YAAQNPAVAqkFfBJ8AQAA/usKIw1uHxZ5ua9S421s7j7FwdabHMdHKIX2v/mKqzn6C64AWqNR0pewAu5eJAlfFonXn1P165gqGDEDthP49IE3BtPy5C6ApWfWjTQdLuWAHHlwehyYgtH9Wouz3Woac8iSjZQMObwJZzvCji9hmn0kZpYjA5guGr43yFC74NhvTjocFtRuwQ5gcwYifXYaQusMvEaUpybRpEg/WaKX90bJk77dKNaTBFEX69mYqhowNvIgii9zxzdmltHNKdXTng4/5LJN91595UZQZE2zK6+f3r+9+2C17DQlq111OARTXE9zo5HxbNb1a9cZdlnyJhbg7Hs4tr3a/PiLpok7D0HzPf1AKl0psImxTJPkBqlne0jK9SL9AX8475prfg2Gl64j/lc53rkjTpNTei9lC52x13INhTNAop9olKTTGAVWEWNOqVvxVnO5yTSF/ewxatv2jRKSmepQU7O6KctxEAaU0ib8RwaIf8a+vNJG; awx_session_essential=%7B%22partner%22%3Anull%2C%22featuredIndex%22%3Anull%7D; _gat_awxTracker=1; FCCDCF=[["AKsRol-gARJRVmDS5CTvPf66Kbah2LCUIaTEwzYzSfHwmdb0HJVtZqxQdeh2ptkNAwR8J6QeAldM4MMq2Jy0UOAoHViFjntzX58E4F0zBL6Cpp-8_GJudfzoCnUnNLQ-xYz3Nv6UkMn3-4gqhS54OnLR2bZj4MR8vw=="],null,["[[],[],[],[],null,null,true]",1632676124208],null]; FCNEC=[["AKsRol-gARJRVmDS5CTvPf66Kbah2LCUIaTEwzYzSfHwmdb0HJVtZqxQdeh2ptkNAwR8J6QeAldM4MMq2Jy0UOAoHViFjntzX58E4F0zBL6Cpp-8_GJudfzoCnUnNLQ-xYz3Nv6UkMn3-4gqhS54OnLR2bZj4MR8vw=="]]; __gads=ID=1cdcff12798b9f1a-22b9598159c9009f:T=1632654441:RT=1632676127:S=ALNI_Ma5bCYnRVftV7CEuRBxG-05WgbUCQ; awx_session=%7B%22categoryFlow%22%3A%5B%5D%2C%22pageView%22%3A2%2C%22visitFlow%22%3A%5B%22monthly%22%2C%22monthly%22%5D%7D; bm_sv=1D1C9180661E07F543B0F0BAB7BB7245~Ds1pFWG0tAbnrDZ8EgYq72mHlP9jdcIbsYyvpJAY3QorShUY3803r6kwVNcXk+9YJ2k7NTEDOBCcpvENYIKPo30aEISpnM2otGTXypUUCoVXRkEMGK8jmp2uuX01K6jVNOMGT2b8FwHUkGW8CrmKdJVs25ki3zSXCswaddOlzec=; awx_user={%22rl%22:[%22328328%22]%2C%22tp%22:%22C%22%2C%22lang%22:%22en-us%22%2C%22isDarkMapStyle%22:false%2C%22cache%22:{%22lang%22:%22en-us%22%2C%22tp%22:%22C%22%2C%22items%22:{%22328328%22:{%22cond%22:1632676135423%2C%22loc%22:1632676135000%2C%22we%22:1632676134481%2C%22tei%22:[]%2C%22wca%22:false}}}%2C%22cDate%22:%222021-09-26%22}; cto_bundle=g84soV9jYndMdkU4Z0xRYnhNZ1ZCNXNqZXRubSUyQloyQmtzTFZ2S1Q5eSUyQkUzamw4NGtqcHdKSCUyQjdDc3ZjUG1BTUNsYWxHbmI5JTJGZlFMdjVGbmZmbHg4SFRqbkt2QUxxcEs5VXdxZTVjcFNWZlhYcTYzd2t4N0VXamNaTE5DZVQyNjluMiUyQldxOEglMkZaZ09GWXRHTEprT21pMzd1R2clM0QlM0Q; user-timing={%22t%22:36}; RT="z=1&dm=www.accuweather.com&si=94bc197e-015c-4bbc-bcdf-1c3e35d44607&ss=ku1h7ipy&sl=1&se=go&tt=wi&bcn=%2F%2F1737ad59.akstat.io%2F&ld=b1n&ul=12nw"'    --compressed`,
//   // );
//   // console.log("e,out,err = ", e, out, err);
//   return "";
// }

// import fetch from "../node-fetch/src";

// export async function loadUrlText(url) {
//   let res = await fetch(
//     "https://www.accuweather.com/en/gb/london/ec4a-2/august-weather/328328",
//     {
//       credentials: "include",
//       headers: {
//         "User-Agent":
//           "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0",
//         Accept:
//           "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
//         "Accept-Language": "en-US,en;q=0.5",
//         "Upgrade-Insecure-Requests": "1",
//         "Sec-Fetch-Dest": "document",
//         "Sec-Fetch-Mode": "navigate",
//         "Sec-Fetch-Site": "none",
//         "Sec-Fetch-User": "?1",
//         "Cache-Control": "max-age=0",
//       },
//       method: "GET",
//       mode: "cors",
//     },
//   );
//   console.log("res = ", res);
//   return "";
// }
