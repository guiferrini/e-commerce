import { Router } from 'express';

const routes = Router();

routes.get('/principal', (request, response) => {
  response.json({ message: 'ola mundo' });
});

export default routes;
