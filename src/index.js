import "core-js/stable";
import "regenerator-runtime/runtime";

process.on("uncaughtException", function (err) {
  console.log("Caught exception: " + err);
});
import "./app";
