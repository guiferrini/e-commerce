// Session = sessão de conexãp
import { Request, Response } from 'express';
import { compare } from 'bcryptjs';
import knex from '../database/connection';
import User from '../models/User';

interface RequestLa {
  email: string;
  password: string;
}

class SessionController {
  async create(request: Request, response: Response) {
    const { email, password }: RequestLa = request.body;

    const findUserInSameEmail = await knex('users').where('email', email);
    const ja = findUserInSameEmail.map((busca) => String(busca.email));
    const jaja = findUserInSameEmail.map((busca) => String(busca.password));
    const la = ja.toString(); // retorna Email, em formato string
    const lala = jaja.toString(); // retorna usuario, em formato string

    // validando se email enviado exiets no BD
    if (la !== (email)) {
      return response.status(400).json({ message: 'Incorrect email/password A.' });
    }

    // validando se password enviado é o msm do email
    const vai = await compare(password, lala);
    if (!vai) {
      return response.status(400).json({ message: 'Incorrect email/password B.' });
    }

    // retorno - check
    const user: User = await knex('users').where('email', email);

    delete user.password;

    return response.json(user);
  }
}

export default SessionController;
