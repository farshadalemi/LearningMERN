const fs = require("fs");
const http = require("http");
const url = require("url");

// SERVER
//// We read the file only one time Synchronously to avoid rereading the same data evrytime.

const data = fs.readFileSync(`${__dirname}/data.json`, "utf-8");
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  // console.log(req);
  console.log(req.url);
  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.end("This is the overview page");
  } else if (pathName === "/product") {
    res.end("This is the product page");
  } else if (pathName === "/api") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(data);
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "My-own-header": "Hello, world",
    });
    res.end("<h1>Page not found!</h1>");
  }
});

server.listen(5500, "127.0.0.1", () => {
  console.log("Listening to requests on port on 5500 ");
});
