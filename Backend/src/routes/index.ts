import express from 'express';

import UserController from '../controller/UserController';

const routes = express.Router();

const userController = new UserController();

routes.post('/users', userController.create);
routes.get('/users', userController.index);

export default routes;
