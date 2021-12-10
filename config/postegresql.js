require("dotenv").config();

const knex = require("knex")({
  client: "pg",
  connection: process.env.PG_CONNECTION_STRING
    ? process.env.PG_CONNECTION_STRING
    : "postgres://postgres:J0PP3@localhost:5432/postgres",
  searchPath: ["knex", "public"],
});

(async () => {
  try {
    knex.schema.hasTable("city").then(function (exists) {
      if (!exists) {
        return knex.schema
          .withSchema("public")
          .createTable("city", function (table) {
            table.increments("city_id").primary();
            table.string("city_name", 100).notNullable();
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
            table.integer("city_id").unsigned();
            table
              .foreign("city_id")
              .references("city_id")
              .inTable("city")
              .onDelete("RESTRICT");
            table.timestamps();
          });
      }
    });
  } catch (err) {
    console.log(err);
  }
})();

module.exports = knex;
