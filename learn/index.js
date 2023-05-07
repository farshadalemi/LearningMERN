const fs = require("fs");
const http = require("http");
const url = require("url");

// SERVER

const server = http.createServer((req, res) => {
  // console.log(req);
  console.log(req.url);
  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.end("This is the overview page");
  } else if (pathName === "/product") {
    res.end("This is the product page");
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "My-own-header": "Hello, world",
    });
    res.end('<h1>Page not found!</h1>');
  }
});

server.listen(5500, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});
