import { Response, Request } from 'express';
import knex from '../database/connection';

class GrapesController {
  // Lista os wines com filtro pro grape
  async index(request: Request, response: Response) {
    // const grapes = await knex('grapes').select('*');
    // return response.json(grapes);
    const { grapes } = request.query;

    const wine = await knex('wines')
      .join('wine_grapes', 'wines.id', '=', 'wine_grapes.wine_id')
      .where('wine_grapes.grapes_id', Number(grapes))
      .select('wines.*');

    return response.json(wine);
  }
}

export default GrapesController;
