const http = require("http");
http.get(process.argv[2], function callback(response) {
  response.setEncoding("utf8").on("data", function(data) {
    let newData = data.split("\n");
    newData.forEach(line => {
      console.log(line);
    });
  });
});
