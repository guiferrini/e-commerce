// Session = sessão de conexãp
import { Request, Response } from 'express';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
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

    // retorno
    const user = await knex('users').where('email', email);
    const id = (findUserInSameEmail.map((busca) => String(busca.id)).toString());
    // const chave = findUserInSameEmail.map((busca) => String(busca.password));

    // token - 1° parametro infos q vou acessar depois no frontend,
    // 2° chave secreta - md5online hash
    // 3° configurações do token
    const token = sign({}, 'bec52fd2d8eebdd4659debc24823a295', {
      subject: id,
      expiresIn: '1d',
    });
    // no response não informa o password do usuario - validar!
    delete user.password;

    return response.json({ user, token });
  }
}

export default SessionController;
