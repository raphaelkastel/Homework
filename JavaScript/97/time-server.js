const net = require("net");
const server = net.createServer(function(socket) {
  let date = new Date();

  let datestr = `${date.getFullYear()}-${('0' + (date.getMonth()+1)).slice(-2) }-${('0' + date.getDate()).slice(-2)} ${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}`
  socket.write(datestr);
  
  
  socket.end("\n");
});
server.listen(process.argv[2]);
