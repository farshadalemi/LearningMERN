const fs = require("fs");
const http = require("http");
const url = require("url");

////////////////////////////////ReadTheFile
const data = fs.readFileSync(`${__dirname}/data.json`, "utf-8");
const dataObject = JSON.parse(data);

const server = http.createServer((req, res) => {
  console.log(req.url);
  const pathName = req.url;

  if (pathName === "/" || pathName === "/home") {
    res.end("<h1>Home Page</h1>");
  } else if (pathName === "/product") {
    // res.end("<h1>Product Page</h1>");
    res.end(data);
  } else {
    res.end("<h1>Page Not Found</h1>");
  }
});

server.listen(8080, "127.0.0.1", () => {
  console.log("Server is listening on 8080");
});
