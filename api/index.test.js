const { expect, describe, test } = require("@jest/globals");
const app = require('./server');
const supertest = require("supertest");
const request = supertest(app)

describe("Test", () => {
  test("test api", (done) => {
      request.get('/api/students')
      .then(res => expect(res.status).toBe(200))
      .then(res => done());
  });
});