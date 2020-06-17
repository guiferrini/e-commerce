import { Router } from 'express';
import usersRouter from './user.routes';

const routes = Router();

routes.use('/users', usersRouter); // tds rotas do users passam aqui

export default routes;
