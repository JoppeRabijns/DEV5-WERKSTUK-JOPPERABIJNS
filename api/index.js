const express = require("express");
const app = express();
require('dotenv').config();

app.get("api/students", function (req, res) {
  res.send("get all users");
});

app.put("api/students/:id", function (req, res) {
  res.send("update one user");
});

app.delete("api/students/:id", function (req, res) {
  res.status(204);
});


const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('App is listening on port ' + listener.address().port)
})