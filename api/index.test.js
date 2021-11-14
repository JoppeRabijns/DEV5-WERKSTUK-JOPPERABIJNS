const { expect, describe, test } = require("@jest/globals");
const app = require('./server');
const supertest = require("supertest");
const request = supertest(app)

/* test("test",() => {
  expect(1+1).toBe(2);
}) */

describe("Test", () => {
  test("test api", (done) => {
      request.get('/api/students')
      .then(res => expect(res.status).toBe(200))
      .then(res => done());
  });
}); 