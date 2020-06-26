import { Response, Request } from 'express';
import knex from '../database/connection';
import Wine from '../models/Wine';
// import Grapes from '../models/Grapes';

class WinesController {
  async update(request: Request, response: Response) {
    const { id } = request.params;

    const wine = await knex('wines').where('id', id).first('*');

    // validando se ID WINE existe
    if (!wine) {
      return response.status(400).json({ message: 'ERRO. ID wine not found' });
    }

    // buscando dados p serem alterados
    const {
      name, description, value, image,
    } = request.body;

    if (name === 'undefined') {
      const name = await knex('wines').where('name');
    }
    if (value === 'undefined') {
      const value = await knex('wines').where('value');
    }
    if (description === 'undefined') {
      const description = await knex('wines').where('description');
    }
    // if (image === 'undefined') {
    //   const image = await knex('wines').where('image');
    // }
    // efetuando alteração
    knex('wines')
      .where({ id })
      .update({
        name, description, image, value,
      })
      .then((u) => response.status(u ? 200 : 404).json({ success: !!u }))
      .catch((e) => response.status(500).json(e));
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const wine = await knex('wines').where('id', id).first('*');

    if (!wine) {
      return response.status(400).json({ message: 'ERRO. ID wine not found' });
    }

    await knex('wines').where('id', id).delete();

    return response.status(204).send();
  }

  // filtra por id wine - list tds wines com grapes
  async show(request: Request, response: Response) {
    const { id } = request.params;

    const wine = await knex('wines').where('id', id).first('*');

    if (!wine) {
      return response.status(400).json({ message: 'ERROR. ID not found' });
    }

    const grape = await knex('grapes')
      .join('wine_grapes', 'grapes_id', '=', 'grapes.id')
      .where('wine_grapes.wine_id', id)
      .select('grapes.name');

    return response.json({ wine, grape });
  }

  // list tds vinhos sem grape
  async index(request: Request, response: Response) {
    const all = await knex('wines').select('*');

    return response.json(all);
  }

  async create(request: Request, response: Response) {
    const {
      id, name, description, grapes, value,
    } = request.body;
    const image = request.file.filename;

    // trx = transaction -> so roda se tds 'insert' derem certos
    const trx = await knex.transaction();

    const wine = new Wine(
      id,
      name,
      value,
      description,
      image,
    );
    const newWine = await trx('wines').insert(wine);
    const wine_id = newWine[0];

    // relacionamento com tabela Grapes
    const wineGrapes = grapes
      .split(',') // retira virgula
      .map((item: string) => Number(item.trim())) // retira os espaços
    // console.log(wineGrapes); // retorno [ 2, 3, 7]
    // quero:
    // wine_id: 20
    // grapes_id: 2, 3, 7
      .map((grapes_id: number) => ({
        grapes_id, // uvas
        wine_id, // id da criação do wine, porem sequencial
      }));

    const grapes_id_array = [];
    const objetoFinal = {};
    for (const i in wineGrapes) {
      const w_id = wineGrapes[i].wine_id; // output n° wine_id
      const g_id = wineGrapes[i].grapes_id; // output n° grapes em array
      grapes_id_array.push(g_id);
      objetoFinal.wine_id = w_id;
      objetoFinal.grapes_id = grapes_id_array;
    }

    await trx('wine_grapes').insert(wineGrapes); // output wineGrapes [{}, {}]

    await trx.commit();

    return response.json({
      ...wine,
      objetoFinal,
    });
  }
}

export default WinesController;
