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
  knex('students')
    .then((allStudents) => res.json(allStudents));
});


/**
 * [POST] /api/students
 * returns all students in database upon get request
 * @returns {Object} all students in database
 */
 app.post("/api/students", async (req, res) => {
  knex("students")
    .insert({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    })
    .returning('*')
    .then((student) => res.json(student));
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
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    })
    .returning('*')
    .then((student) => res.json(student));
  });

/**
 * [DELETE] /api/students/:id
 * Delete student by id 
 * @returns HTTP status 204 indicates successful deletion.
 */
 app.delete("/api/students/:id", function (req, res) {
  knex("students")
    .where("id", req.params.id)
    .del()
    .then(() => res.sendStatus(204));
});

module.exports = app;

