const mongoose = require("mongoose");
const Joi = require("joi");

const schema = new mongoose.Schema({
  title: {
    type: String,
    maxlength: 50,
    min: 3,
    required: true
  },
  price: {
    type: Number,
    max: 4000,
    min: 100,
    required: true
  },
  urlImage: {
    type: String,
    required: false
  }
});

const Image = mongoose.model("Image", schema);

validateImage = image => {
  const schema = {
    title: Joi.string()
      .max(50)
      .min(3)
      .required(),
    price: Joi.number()
      .max(4000)
      .min(100)
      .required(),
    urlImage: Joi.string().required()
  };

  return Joi.validate(image, schema);
};

module.exports.validate = validateImage;
module.exports.Image = Image;
