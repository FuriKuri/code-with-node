var http = require("http");

// create a server
http.createServer(function(req, res) {
    res.end("Hello World!");
}).listen(process.env.PORT, process.env.IP);