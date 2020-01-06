const mongoose = require("mongoose");
const config = require("config");

module.exports = () => {
  mongoose
    .connect(config.db, { useNewUrlParser: true, seUnifiedTopology: true })
    .then(() => console.log("connect to mongodb successfully"))
    .catch(() => console.log("connect to mongodb failed"));
};
