import { Router } from 'express';
import { uuid } from 'uuidv4';
// import createUser from '../services/CreateUser';
// import { parseISO } from 'date-fns'; // converte o formato string
// (como é enviado pelo Insomnia) p formato date (object) do JS

const usersRouter = Router();

interface TypeUser {
  name: string;
  email: string;
  password: string;
  whatsapp: number;
  date: Date;
  street: string;
  number: number;
  complement: string;
  uf: string;
  city: string;
  id: string;
}

const users: TypeUser[] = []; // ainda n tenho BD

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

  const user = {
    id: uuid(),
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
  };

  users.push(user);

  return response.json(user);
});

export default usersRouter;
