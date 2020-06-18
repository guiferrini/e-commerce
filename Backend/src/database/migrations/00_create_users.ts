import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('users', (table) => {
    table.uuid('id').primary();
    table.string('name', 70).notNullable();
    table.string('email', 70).unique().notNullable();
    table.string('password', 30).notNullable();
    table.decimal('whatsapp', 11, 0).notNullable(); // ddd=2, n°=9
    table.date('date').notNullable();
    table.string('street', 70).notNullable();
    table.decimal('number', 6, 0).notNullable();
    table.string('complement', 30).notNullable();
    table.string('uf', 2).notNullable();
    table.string('city', 20).notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('users');
}
