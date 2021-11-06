const express = require("express");
const app = express();



const listener = app.listen(3000, () => {
  console.log('App is listening on port ' + listener.address().port)
})