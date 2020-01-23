//I really can't tell if i did this right. I found this very hard to test 
const http = require("http");
const fs = require("fs");
const path = require("path");

const mimeTypes = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/js" //,
  //json: 'application/json'
};

http
  .createServer((req, res) => {
    console.log(req.url);
    if (req.url === "/") {
      res.statusCode = 301;
      res.setHeader("Location", "/index.html");
      return res.end();
    }
  
    const readStream = fs.createReadStream(`public/${req.url}`);

    readStream.on("data", data => {
      return res.write(data);
      
    });

    readStream.on("end", () => {
         console.log("read stream end");
        return res.end();
    });

    readStream.on("error", err => {
      switch (err.code) {
        case "ENOENT":
          res.statusCode = 404;
          res.setHeader("content-type", "text/html");
          res.write('<h2 style="color: red">No such page! 404...</h2>');
          break;
        default:
          res.statusCode = 500;
          res.write('<h2 style="color: red">Server Error!</h2>');
          break;
      }
      return res.end();
    });

    const ext = path.extname(req.url);
    res.setHeader("content-type", mimeTypes[ext] || mimeTypes["html"]);
    console.log(ext);
  })
  .listen(80);
