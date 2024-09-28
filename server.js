const http = require("node:http");

const server = http.createServer(function (req, res) {
  if (req.url === "/getSecreatData") {
    res.end("There is no secreat Data");
  }
  res.end("Hellow World");
});

server.listen(7777);
