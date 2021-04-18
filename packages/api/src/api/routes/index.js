import { Router } from 'express';
import * as timer from '../controllers/timerController';
import * as user from '../controllers/userController';

const routes = Router();

routes.post('/timers', timer.createNewTimerEvent);
routes.post('/users/anonymous', user.createNewAnonymousUser);
routes.get('/users/:userId/timers', timer.getTimersByUserId);
routes.get('/users/me', user.getPersonalAccountData);

export default routes;
