// Web server config
require("dotenv").config();
const PORT = process.env.PORT || 8000;
const ENV = process.env.ENV || "development";
const express = require("express");
const app = express();

//Middleware
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use(express.json());
app.use(express.static("public"));

//DB params
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
console.log(dbParams);
const db = new Pool(dbParams);

db.connect(() => {
  console.log("connected to database");
});

app.get("*", (req, res) => {
  res.send("Hi!");
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
