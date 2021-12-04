require("dotenv").config();

const knex = require("knex")({
  client: "pg",
  connection: process.env.PG_CONNECTION_STRING
    ? process.env.PG_CONNECTION_STRING
    : "postgres://postgres:test@localhost:5432/postgres",
  searchPath: ["knex", "public"],
});

(async () => {
  try {
    knex.schema.hasTable("city").then(function (exists) {
      if (!exists) {
        return knex.schema
          .withSchema("public")
          .createTable("city", function (table) {
            table.increments("id").primary();
            table.string("name", 100).notNullable();
            table.timestamps();
          });
      }
    });
    knex.schema.hasTable("students").then(function (exists) {
      if (!exists) {
        return knex.schema
          .withSchema("public")
          .createTable("students", function (table) {
            table.increments("id").primary();
            table.string("name", 100).notNullable();
            table.string("email", 100).notNullable();
            table.string("password", 100).notNullable();
            table.timestamps();
          });
      }
    });
  } catch (err) {
    console.log(err);
  }
})();

module.exports = knex;
