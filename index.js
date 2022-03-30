var http = require("http");
const server = http.createServer((req, res) => {
    res.end("OK!")
});
const {
    Server
} = require('socket.io')
const io = new Server(server)
server.listen(3000, '192.168.0.139', () => {
     console.log("Srv  started")
 });

io.on("connection", function(socket) {
    console.log("có 1 kết nối mới"  + socket.id)
});