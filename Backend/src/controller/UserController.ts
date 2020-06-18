import { Request, Response } from 'express';
import User from '../models/User';

// const usersRouter = Router();

const users: User[] = []; // ainda n tenho BD

class UsersController {
  private users: User[];

  constructor() {
    this.users = [];
  }

  async create(request: Request, response: Response) {
    const {
      city, complement, date,
      email, name, number, password, street,
      uf, whatsapp,
    } = request.body;

    // const formatDate = parseISO(data); // esta voltando 'null'

    // Validando 1 email por cadastro
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

    await this.users.push(user);

    return response.json(user);
  }
}

export default UsersController;
