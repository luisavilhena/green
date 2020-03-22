const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer();
// server.on("request", (request, response) => {
//   response.setHeader("Content-Type", "text/html; charset=utf-8");

//   if (request.url === "/favicon.ico") {
//     response.end(null);
//     return;
//   }
// const parsedUrl = url.parse(request.url, true);

//   console.log(parsedUrl)
// })
server.listen(8080, 'localhost', () => {
  console.log("server: http://localhost:8080")
  console.log("for shut down: ctrl + c")
});