import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('grapes', (table) => {
    table.increments('id').primary();
    table.string('name', 70).notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('grapes');
}
