const knex = require('knex')({
  client: 'pg',
  connection: process.env.PG_CONNECTION_STRING,
  searchPath: ['knex', 'public'],
});

(async () => {
  try {

    /**
     * Drop students and meals tables if they already exist
     */
    await knex.schema.dropTableIfExists('students');
    await knex.schema.dropTableIfExists('meals');
    /**
     * Create new student and meals table
     */
    await knex.schema.withSchema('public').createTable('students', function (table) {
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
    });
    await knex.schema.withSchema('public').createTable('meals', function (table) {
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
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
})()







module.exports = knex;
