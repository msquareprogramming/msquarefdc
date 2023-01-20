// const fs = require("fs");
// const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log("Received a response...");
//   fs.readFile("index.html", (err, data) => {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.write(data);
//     return res.end();
//   });
// });

// server.listen(90, () => {
//   console.log("Server started: Listening on port 80");
// });

const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Received a response...");
  fs.readFile("index.html", (err, data) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    return res.end();
  });
});

server.listen(3000, () => {
  console.log("Server started: Listening on port 3000");
});
