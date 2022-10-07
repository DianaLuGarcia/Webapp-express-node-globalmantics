const express = require("express");
const chalk = require("chalk");
const debug = require("debug")("app");
const app = express();

//Middleware
//app.use(express.static(path.join(__dirname, "/public/")));

app.get("/", (req, res) => {
  res.render("index", { title: "Welcome to Globalmantics" });
});

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.listen(3000, () => {
  debug(`listening on port ${chalk.green("3000")}`);
});
