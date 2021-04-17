import { Router } from 'express';
import * as task from '../controllers/timerController';
import * as user from '../controllers/userController';

const routes = Router();

routes.post('/timers', task.createNewTimerEvent);
routes.post('/users/anonymous', user.createNewAnonymousUser);
routes.get('/users/:userId/timers', task.getTimersByUserId);

export default routes;
