const express = require("express");
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser')

const knex = require("../config/postegresql");

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


/**
 * [GET] /api/students
 * returns all students in database upon get request
 * @returns {Object} all students in database
 */
 app.get("/api/students", async (req, res) => {
  const students = await knex('students');
  res.json({students});
});

/**
 * [PUT] /api/students/:id
 * 
 * 
 * @returns {Object} updated student object
 */
 app.put("/api/students/:id",  async (req, res) => {
  knex("students")
    .where("id", req.params.id)
    .update({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
    });
  const student = await knex("students")
    .where("id", req.params.id)
    .first();
  response.json({student});
});

/**
 * [DELETE] /api/students/:id
 * Delete student by id 
 * @returns HTTP status 204 indicates successful deletion.
 */
 app.delete("/api/students/:id", function (req, res) {
  knex("students").where("id", req.params.id).del();
  res.status(204);
});


const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('App is listening on port ' + listener.address().port)
})

module.exports = app;
