import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('wine_grapes', (table) => {
    table.uuid('id').primary();
    table.integer('wine_id').notNullable().references('id').inTable('wines');
    table.integer('grapes_id').notNullable().references('id').inTable('grapes');
    table.dateTime('created_at').notNullable()
      .defaultTo(knex.raw('CURRENT_TIMESTAMP'));
    table.dateTime('updated_at').notNullable()
      .defaultTo(knex.raw('CURRENT_TIMESTAMP')); // Validar! com erro...
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('wine_grapes');
}
