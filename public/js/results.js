const http = require("http");
const fs = require("fs");
const url = require("url");
const express = require("express");
const app = express();

app.use(express.static('public'));

// const server = http.createServer((req, res) => {

// 	if(req.url=='/') {
// 		res.end(fs.readFileSync(__dirname + "/../index.html", "utf-8"))
// 		// res.end(fs.readFileSync(__dirname + "/../css/styles.css", "utf-8"))
// 	}
// })

app.get('/', (req, res) => {
  res.send('App - Intro Star Wars');
});
app.listen(8080, () => console.log('Aplicação executando na porta 8080!'));

// const server = http.createServer((req, res) => {
// 	res.end('foi');
// };
// server.on("request", (request, response) => {
//   response.setHeader("Content-Type", "text/html; charset=utf-8");

//   if (request.url === "/favicon.ico") {
//     response.end(null);
//     return;
//   }
// const parsedUrl = url.parse(request.url, true);

//   console.log(parsedUrl)
// })
// server.listen(8080, 'localhost', () => {
//   console.log("server: http://localhost:8080")
//   console.log("for shut down: ctrl + c")
// });