import { Response, Request } from 'express';
import knex from '../database/connection';

class GrapesController {
  async index(request: Request, response: Response) {
    const grapes = await knex('grapes').select('*');

    return response.json(grapes);
  }
}

export default GrapesController;
