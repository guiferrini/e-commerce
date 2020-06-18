import { Request, Response } from 'express';
import knex from '../database/connection';
import User from '../models/User';

// const usersRouter = Router();

const users: User[] = []; // ainda n tenho BD

class UsersController {
  async update(request: Request, response: Response) {
    const { id } = request.params;

    const { email, whatsapp } = request.body;

    await knex('users')
      .where({ id })
      .update({ email, whatsapp })
      .then((u) => response.status(u ? 200 : 404).json({ success: !!u }))
      .catch((e) => response.status(500).json(e));
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    await knex('users').where('id', id).delete();

    return response.status(200).send();
  }

  async index(request: Request, response: Response) {
    const all = await knex('users').select('*');

    return response.json(all);
  }

  async create(request: Request, response: Response) {
    const {
      name, email, password, whatsapp,
      date, street, number, complement,
      uf, city,
    } = request.body;

    // const formatDate = parseISO(data); // esta voltando 'null'

    // Validando 1 email por cadastro - NÃO ESTA FUNCIONANDO - VALIDAR! TRAVA TD...
    const findUserInSameEmail = users.find((user) => user.email === email);
    if (findUserInSameEmail) {
      return response.status(400).json({ message: 'Email already registered.' });
    }

    const user = new User(
      name,
      email,
      password,
      whatsapp,
      date,
      street,
      number,
      complement,
      uf,
      city,
    );

    // users.push(user);
    await knex('users').insert(user);

    return response.json(user);
  }
}

export default UsersController;
