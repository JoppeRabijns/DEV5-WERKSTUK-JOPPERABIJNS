const knex = require('knex')({
  client: 'pg',
  connection: process.env.PG_CONNECTION_STRING,
  searchPath: ['knex', 'public'],
});

/**
 * Drop students and meals tables if they already exist
 */
knex.schema.dropTableIfExists('students');
knex.schema.dropTableIfExists('meals');

/**
 * Create new student and meals table
 */
knex.schema.createTable('students', function (table) {
  table
    .increments('id')
    .primary();
  table
    .string('name', 100)
    .notNullable();
  table
    .string('email', 100)
    .notNullable();
  table
    .string('password', 100)
    .notNullable();
  table.timestamps();
})

knex.schema.createTable('meals', function (table) {
  table
    .increments('id')
    .primary();
  table
    .string('title', 100)
    .notNullable();
  table
    .string('description', 500)
    .notNullable();
  table
    .double('price', 4,2)
    .notNullable();
  table.timestamps();
})

module.exports = knex;
