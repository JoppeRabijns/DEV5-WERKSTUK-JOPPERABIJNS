const { expect, describe } = require("@jest/globals");
const app = require("../../api/server");
const supertest = require("supertest");
const request = supertest(app);

const knex = require("../../config/postegresql");

/**
 * Seed database before starting tests
 */
beforeAll(async () => {
  try {
    await knex("students").insert({
      id: 200,
      name: "joppe",
      email: "joppe@rabijns.be",
      password: "password",
    });
    await knex("city").insert({
      city_id: 200,
      city_name: "Neerpelt",
    });
  } catch (e) {
    console.log(e);
  }
});

describe("test CRUD of student api", () => {
  it("GET all student", (done) => {
    request
      .get("/api/students")
      .expect(200)
      .end(() => done());
  });

  it("GET all cities", (done) => {
    request
      .get("/api/cities")
      .expect(200)
      .end(() => {
        done();
      });
  });

  it("Create a student with POST", (done) => {
    request
      .post("/api/students")
      .send({
        name: "Student1",
        email: "email@email.be",
        password: "password123",
      })
      .expect(200)
      .end((err, res) => {
        expect(res.body[0].name).toEqual("Student1");
        expect(res.body[0].email).toEqual("email@email.be");
        expect(res.body[0].password).toEqual("password123");
        done();
      });
  });

  it("Create a city with POST", (done) => {
    request
      .post("/api/cities")
      .send({
        city_name: "lommel",
      })
      .expect(200)
      .end((err, res) => {
        expect(res.body[0].city_name).not.toEqual("lommel");
        expect(res.body[0].city_name).toEqual("Lommel");
        done();
      });
  });

  it("Update a student with PUT", (done) => {
    request
      .put("/api/students/200")
      .send({
        name: "Update1",
        email: "email@email.be",
        password: "password123",
      })
      .expect(200)
      .end((err, res) => {
        expect(res.body[0].name).toEqual("Update1");
        expect(res.body[0].email).toEqual("email@email.be");
        expect(res.body[0].password).toEqual("password123");
        done();
      });
  });

  it("Update a city with PUT", (done) => {
    request
      .put("/api/cities/200")
      .send({
        city_name: "Overpelt",
      })
      .expect(200)
      .end((err, res) => {
        expect(res.body[0].city_name).toEqual("Overpelt");
        done();
      });
  });

  it("Delete a student with DELETE", (done) => {
    request
      .delete("/api/students/200")
      .expect(204)
      .end(() => done());
  });
  it("Delete a city with DELETE", (done) => {
    request
      .delete("/api/cities/200")
      .expect(204)
      .end(() => done());
  });
});

/**
 * Clear database after finishing tests
 */
afterAll(() => {
  try {
    knex("students").select("*").del();
    knex("city").select("*").del();
    knex.destroy();
  } catch (e) {
    console.log(e);
  }
});
