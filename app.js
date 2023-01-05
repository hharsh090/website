const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: "./" });
});

app.listen(port, () => {
  console.log("8080");
});
