const http = require('http');
const fs = require("fs");

const server = http.createServer(function (req, res) {
    let resStream = fs.createReadStream(process.argv[3])
    resStream.pipe(res)
})
server.listen(process.argv[2])