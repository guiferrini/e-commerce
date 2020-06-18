import express from 'express';

import UserController from '../controller/UserController';

const routes = express.Router();

const userController = new UserController();

routes.post('/users', userController.create);
routes.get('/users', userController.index);
routes.delete('/users/:id', userController.delete);
routes.put('/users/:id', userController.update);

export default routes;
