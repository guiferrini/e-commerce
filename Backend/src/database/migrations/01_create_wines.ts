import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('wines', (table) => {
    table.increments('id').primary();
    table.string('name', 70).notNullable();
    table.string('description').notNullable();
    table.string('image').notNullable();
    table.decimal('value', 8, 2).notNullable();
    table.dateTime('created_at').notNullable()
      .defaultTo(knex.raw('CURRENT_TIMESTAMP'));
    table.dateTime('updated_at').notNullable()
      .defaultTo(knex.raw('CURRENT_TIMESTAMP')); // Validar! com erro...
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('wines');
}
