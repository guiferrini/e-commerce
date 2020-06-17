import { Router } from 'express';
import { uuid } from 'uuidv4';

const usersRouter = Router();

const users = []; // ainda n tenho BD

usersRouter.post('/', (request, response) => {
  const {
    name,
    email,
    senha,
    whatsapp,
    data,
    endereço,
  } = request.body;

  const user = {
    id: uuid(),
    name,
    email,
    senha,
    whatsapp,
    data,
    endereço,
  };

  users.push(user);

  return response.json(user);
});

export default usersRouter;
