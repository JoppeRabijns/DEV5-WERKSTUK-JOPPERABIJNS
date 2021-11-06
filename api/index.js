const express = require("express");
const app = express();
require('dotenv').config();



const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('App is listening on port ' + listener.address().port)
})