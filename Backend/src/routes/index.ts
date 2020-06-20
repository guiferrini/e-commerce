import express from 'express';

import UserController from '../controller/UserController';
import SessionController from '../controller/SessionController';

const routes = express.Router();

const userController = new UserController();
const sessionController = new SessionController();

routes.post('/users', userController.create);
routes.get('/users', userController.index);
routes.delete('/users/:id', userController.delete);
routes.put('/users/:id', userController.update);

routes.post('/session', sessionController.create);

export default routes;
