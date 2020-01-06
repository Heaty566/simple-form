const express = require("express");
const app = express();

require("./startup/db")();
require("./startup/routes")(app);

app.listen(3000, () => {
  console.log(`listening on port 3000`);
});
