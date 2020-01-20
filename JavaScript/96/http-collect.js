const bl = require('bl')
const http = require("http");
http.get(process.argv[2], function callback(response) {
  response.setEncoding("utf8").pipe(bl(function (err, data) { 
      console.log(data.length);
    console.log(data.toString());
}));
});
