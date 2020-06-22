import { Response, Request } from 'express';
import knex from '../database/connection';
import Wine from '../models/Wine';
import Grapes from '../models/Grapes';

class WinesController {
  async create(request: Request, response: Response) {
    const {
      name, description, image, grapes,
    } = request.body;

    // trx = transaction -> so roda se tds 'insert' derem certos
    const trx = await knex.transaction();

    const wine = {
      name,
      description,
      image,
    };
    const newWine = await trx('wines').insert(wine);
    const wine_id = newWine[0];

    // relacionamento com tabela Grapes
    const wineGrapes = grapes
      .split(',')
      .map((item: string) => Number(item.trim()))
      .map((grapes_id: number) => ({
        grapes_id,
        wine_id,
      }));

    await trx('wine_grapes').insert(wineGrapes);

    await trx.commit();

    return response.json({
      ...wine,
      wineGrapes,
    });
  }
}

export default WinesController;
