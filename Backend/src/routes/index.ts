import express from 'express';

import UserController from '../controller/UserController';
import SessionController from '../controller/SessionController';
import GrapesController from '../controller/GrapesController';

import Authentication from '../middlewares/Authentication';

const routes = express.Router();

const userController = new UserController();
const sessionController = new SessionController();
const grapesController = new GrapesController();

// routes.use(Authentication);

routes.post('/users', userController.create);
routes.get('/users', userController.index);
routes.delete('/users/:id', Authentication, userController.delete);
routes.put('/users/:id', Authentication, userController.update);

routes.post('/session', sessionController.create);

routes.get('/grapes', grapesController.index);

export default routes;
