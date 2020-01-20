const http = require("http");
const urls = process.argv.slice(2, process.argv.length);
let storage = [];
let asyncCounter = 0;
function AsyncComplete() {
  for (var j = 0; j < storage.length; j++) {
    console.log(storage[j]);
  }
}

for (let i = 0; i < urls.length; i++) {
  http.get(urls[i], function(response) {
    let body = "";
    response.on("data", function(chunk) {
      body += chunk;
    });
    response.on("end", function() {
      storage[i] = body;
      asyncCounter++;
      if (asyncCounter == urls.length) {
        AsyncComplete();
      }
    });
  });
}
