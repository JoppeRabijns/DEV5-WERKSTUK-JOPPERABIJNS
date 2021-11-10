const express = require("express");
const app = express();
require('dotenv').config();

/**
 * [GET] /api/students
 * returns all students in database upon get request
 * @returns {Object} all students in database
 */
 app.get("api/students", function (req, res) {
  res.send("get all users");
});

/**
 * [PUT] /api/students/:id
 * 
 * 
 * @returns {Object} updated student object
 */
app.put("api/students/:id", function (req, res) {
  res.send("update one user");
});

/**
 * [DELETE] /api/students/:id
 * Delete student by id 
 * @returns HTTP status 204 indicates successful deletion.
 */
app.delete("api/students/:id", function (req, res) {
  res.status(204);
});


const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('App is listening on port ' + listener.address().port)
})