import express from 'express';
// import multer from 'multer';

import UserController from '../controller/UserController';
import SessionController from '../controller/SessionController';
import GrapesController from '../controller/GrapesController';
import WineController from '../controller/WineController';

import Authentication from '../middlewares/Authentication';

const routes = express.Router();

const userController = new UserController();
const sessionController = new SessionController();
const grapesController = new GrapesController();
const wineController = new WineController();

// routes.use(Authentication);

routes.post('/users', userController.create);
routes.get('/users', userController.index);
routes.delete('/users/:id', Authentication, userController.delete);
routes.put('/users/:id', Authentication, userController.update);

routes.post('/session', sessionController.create);

routes.get('/grapes', grapesController.index);

routes.post('/wines', wineController.create);
routes.get('/wines', wineController.index);
routes.get('/wines/:id', wineController.show);

export default routes;
