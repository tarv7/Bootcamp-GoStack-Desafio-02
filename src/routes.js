import { Router } from 'express';

import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.post('/sessions', SessionController.store);

routes.get('/', (req, res) => res.json({ msg: 'teste3' }));

export default routes;
