import { Request, Response } from 'express';
import { hash } from 'bcryptjs';
import knex from '../database/connection';
import User from '../models/User';

// const usersRouter = Router();

// const users: User[] = []; // ainda n tenho BD

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

    // Validação p um unico email por user.
    const findUserInSameEmail = await knex('users').where('email', email);
    const ja = findUserInSameEmail.map((busca) => busca.email);
    if (ja.includes(email)) {
      return response.status(400).json({ message: 'Email already registered.' });
    }

    // Criptografia da senha
    const hashedPassword = await hash(password, 8);

    const user = new User(
      name,
      email,
      hashedPassword,
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

    // no response não informa o password do usuario
    delete user.password;

    return response.json(user);
    // } else {
    //   response.status(400).json({ message: 'Email already registered.' });
  }
}

export default UsersController;
