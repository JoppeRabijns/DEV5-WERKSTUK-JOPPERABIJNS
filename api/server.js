const express = require("express");
const app = express();
require("dotenv").config();
const bodyParser = require("body-parser");
const checkemail = require("./helpers/checkemail");

const knex = require("../config/postegresql");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/**
 * [GET] /api/students
 * Returns all students in database upon get request
 * @returns {Object} all students in database
 */
app.get("/api/students", async (req, res) => {
  knex("students").then((allStudents) => res.json(allStudents));
});

/**
 * [POST] /api/students
 * Add student to database
 * @param {String} name of student
 * @param {String} email of student
 * @param {String} password of student
 * @returns {Object} add student object
 */
app.post("/api/students", async (req, res) => {
  if (checkemail(req.body.email)) {
    knex("students")
      .insert({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      })
      .returning("*")
      .then((student) => res.json(student));
  }
});

/**
 * [PUT] /api/students/:id
 * Update student by id
 * @param {String} name of student
 * @param {String} email of student
 * @param {String} password of student
 * @returns {Object} update student object
 */
app.put("/api/students/:id", async (req, res) => {
  knex("students")
    .where("id", req.params.id)
    .update({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    })
    .returning("*")
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

app.get("/api/cities", async (req, res) => {
  knex("city").then((allCities) => res.json(allCities));
});

app.post("/api/cities", async (req, res) => {
  if (req.body.city_name !== "") {
    knex("city")
      .insert({
        city_name: req.body.city_name,
      })
      .returning("*")
      .then((city) => res.json(city));
  } else {
    res.send("You must enter a valid city name");
  }
});

app.put("/api/cities/:city_id", async (req, res) => {
  if (req.body.city_name !== "") {
    knex("city")
      .where("city_id", req.params.city_id)
      .update({
        city_name: req.body.city_name,
      })
      .returning("*")
      .then((city) => res.json(city));
  } else {
    res.send("You must enter a valid city name");
  }
});

app.delete("/api/cities/:city_id", function (req, res) {
  knex("city")
    .where("city_id", req.params.city_id)
    .del()
    .then(() => res.sendStatus(204));
});

module.exports = app;
