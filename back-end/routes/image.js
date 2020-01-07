const express = require("express");
const router = express.Router();
const _ = require("lodash");

const { Image } = require("../models/image");
const { upload } = require("../middleware/upload");

router.get("/", async (req, res) => {
  const images = await Image.find();
  res.send(images);
});

router.get("/:id", async (req, res) => {
  const image = await Image.findById(req.params.id);
  res.send(image);
});

router.post("/add", [upload.single("image")], async (req, res) => {
  let image = new Image(_.pick(req.body, ["title", "price"]));
  image.urlImage = req.file.filename;
  await image.save();
  res.status(200);
});

module.exports = router;
