import { Router } from 'express';
import User from '../models/User';
// import createUser from '../services/CreateUser';
// import { parseISO } from 'date-fns'; // converte o formato string
// (como é enviado pelo Insomnia) p formato date (object) do JS

const usersRouter = Router();

const users: User[] = []; // ainda n tenho BD

usersRouter.post('/', (request, response) => {
  const {
    name, email, password, whatsapp,
    date, street, number, complement,
    uf, city,
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

  users.push(user);

  return response.json(user);
});

export default usersRouter;
