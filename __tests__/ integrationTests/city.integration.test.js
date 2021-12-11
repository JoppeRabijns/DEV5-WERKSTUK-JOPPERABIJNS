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
    await knex("city").insert({
      city_id: 200,
      city_name: "Neerpelt",
    });
  } catch (e) {
    console.log(e);
  }
});

describe("[GET] /api/cities", () => {
  it("GET all cities", (done) => {
    request
      .get("/api/cities")
      .expect(200)
      .end((err, res) => {
        done();
      });
  });
});

describe("[POST] /api/cities", () => {
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
});

describe("[PUT] /api/cities/:city_id", () => {
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
});

describe("[DELETE] /api/cities/:city_id", () => {
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
    knex("city").del();
    knex.destroy();
  } catch (e) {
    console.log(e);
  }
});
