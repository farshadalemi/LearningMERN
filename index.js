// const fs = require("fs");
// const http = require("http");
// const url = require("url");
import fs from "fs";
import http from "http";
import url from "url";

import { fileURLToPath } from "url";
import path from "path";
import { log } from "console";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
////////////////////////////////ReadTheFile
const replaceTemplate = (temp, movie) => {
  let output = temp.replace(/{%MOVIENAME%}/g, movie.movieName);
  output = output.replace(/{%MOVIEGENRE%}/g, movie.movieGenre);
  output = output.replace(/{%MOVIEEMOJI%}/g, movie.image);
  output = output.replace(/{%MOVIELENGTH%}/g, movie.movieLength);
  output = output.replace(/{%MOVIEPRICE%}/g, movie.moviePrice);
  output = output.replace(/{%MOVIEDESCRIPTION%}/g, movie.movieDescription);
  output = output.replace(/{%ID%}/g, movie.id);


  if (!movie.movieDiscount)
    output = output.replace(/{%DISCOUNT%}/g, movie.discountPercent);
  else {
    output = output.replace(/{%DISCOUNT%}/g, movie.discountPercent);
  }
  return output;
};

const tempOverview = fs.readFileSync(
  `${__dirname}/templates/template-overview.html`,
  "utf-8"
);
const tempCard = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  "utf-8"
);
const tempProduct = fs.readFileSync(
  `${__dirname}/templates/template-product.html`,
  "utf-8"
);

const data = fs.readFileSync(`${__dirname}/movies-data.json`, "utf-8");
const dataObject = JSON.parse(data);

const server = http.createServer((req, res) => {
  // console.log(req.url);
  console.log(url.parse(req.url, true));
  const { query, pathname } = url.parse(req.url, true);

  // Overview page
  if (pathname === "/" || pathname === "/home") {
    res.writeHead(200, { "Content-Type": "text/html" });
    const cardHtml = dataObject
      .map((el) => replaceTemplate(tempCard, el))
      .join("");
    const output = tempOverview.replace("{%MOVIEOPTIONS%}", cardHtml);
    res.end(output);

    //Product page
  } else if (pathname === "/movie") {
    // res.end("<h1>Product Page</h1>");
    res.writeHead(200, { "Content-Type": "text/html" });
    const movieObject = dataObject[query.id];
    const output = replaceTemplate(tempProduct, movieObject);
    res.end(output);

    // API
  } else if (pathname === "/api") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end("./movies-data.json");
    // Not found
  } else {
    res.end("<h1>Page Not Found</h1>");
  }
});

server.listen(8080, "127.0.0.1", () => {
  console.log("Server is listening on 8080");
});
