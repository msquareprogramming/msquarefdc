const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  fs.readFile("index.html", (err, data) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    res.end();
  });
});

server.listen(3000, () => {
  console.log("Server has started listening on port: 3000");
});
