const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
// app.use(logger);

app.get("/", logger, (req, res) => {
  console.log("Server HomePage");
  //   res.send("Hi");
  //   res.send("Welcome to the Express");
  // res.sendStatus(500)
  // res.status(500).json({message: "Server error"});
  res.render("index", { text: "I enjoy working with Express" });
});
 
const storeRouter = require("./routes/store");
const userRouter = require("./routes/users");
const blogRouter = require("./routes/blog");
const cardRouter = require("./routes/card");

app.use('/store', storeRouter);
app.use('/users', userRouter);
app.use('/blog', blogRouter);
app.use('/card', cardRouter);


function logger(req, res, next) {
  console.log(req.originalUrl)
  next()
}

app.listen(port);
console.log("Server is running on port " + port);
