const express = require("express");
const app = express();
require('dotenv').config();

app.get("/", function (req, res) {
  res.send("test");
});
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('App is listening on port ' + listener.address().port)
})