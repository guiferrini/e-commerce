import Knex from 'knex';

export default async function seed(knex: Knex) {
  await knex('grapes').insert([
    { name: 'Chardonnay' }, // branco
    { name: 'Sauvignon Blanc' }, // branco
    { name: 'Carménère' }, // tinto
    { name: 'Syrah' }, // tinto
    { name: 'Tempranillo' }, // tinto
    { name: 'Malbec' }, // tinto
    { name: 'Merlot' }, // tinto
    { name: 'Cabernet Sauvignon' }, // tinto
  ]);
}
