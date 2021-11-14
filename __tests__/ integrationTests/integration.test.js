const { expect, describe} = require("@jest/globals");
const app = require('../../api/server');
const supertest = require("supertest");
const request = supertest(app)

const knex = require("../../config/postegresql");


const student =  {name: "Student1", email: "email@email.be", password:"password123"};
const studentUpdate =  {name: "Update1", email: "email@email.be", password:"password123"};

describe("test endpoints of api", () => {
  it("GET all student", (done) => {
    request
    .get('/api/students')
    .expect(200)
    .end(() => done());
  });

  it('Create a student', (done) => {
    request
    .post('/api/students')
    .send(student)
    .expect(200)
    .end((err, res) => {
      expect(res.body[0].name).toEqual("Student1")
      expect(res.body[0].email).toEqual("email@email.be")
      expect(res.body[0].password).toEqual("password123")
      done();
   });
  })
  
  it('Update a student', (done) => {
    request
    .put('/api/students/1')
    .send(studentUpdate)
    .expect(200)
    .end((err, res) => {
      expect(res.body[0].name).toEqual("Update1")
      expect(res.body[0].email).toEqual("email@email.be")
      expect(res.body[0].password).toEqual("password123")
      done();
   });
  })

  it('Delete a student', (done) => {
    request
    .delete('/api/students/1')
    .expect(204)
    .end(() => done());
  });
});

afterAll(() => {
  try {
      knex.destroy();     
  } catch (e) {
      console.log(e);
  }
});