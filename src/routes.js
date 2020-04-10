import { Router } from 'express';

import RecipientsController from './app/controllers/RecipientsController';
import SessionController from './app/controllers/SessionController';

import AuthMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/sessions', SessionController.store);

routes.use(AuthMiddleware);

routes.post('/recipients', RecipientsController.store);

export default routes;
