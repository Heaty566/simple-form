const express = require("express");
var cors = require("cors");
const image = require("../routes/image");

module.exports = app => {
  app.use(express.json());
  app.use(cors());
  app.use("/image", image);
};
