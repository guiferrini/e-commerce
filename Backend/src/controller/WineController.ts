import { Response, Request } from 'express';
import knex from '../database/connection';

class WinesController {
  async create(request: Request, response: Response) {
    return response.json({ message: 'ok' });
  }
}

export default WinesController;
