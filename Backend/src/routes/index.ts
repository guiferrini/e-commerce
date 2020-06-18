import express, { Router } from 'express';
import usersRouter from './user.routes';
import UserController from '../controller/UserController';

const routes = Router();
// const routes = express.Router()

routes.use('/users', usersRouter); // tds rotas do users passam aqui
// routes.post('/users', UserController.);

export default routes;
