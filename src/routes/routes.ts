import { Router } from 'express';
import * as controllers from '../controllers/UsersControllers/index';
import { signin } from '../controllers/UsersSignin/Signin';
import { ensureAuthentication } from '../middleware/ensureAuthentication';

const router = Router();

router.post('/entrar', signin);

router.post('/users', controllers.createUser);
router.get('/users', ensureAuthentication, controllers.getUsers);

router.get('/logs', ensureAuthentication, controllers.getLogging);
router.post('/logs', controllers.createLogging);

router.get('/register', ensureAuthentication, controllers.getRegistration);
router.post('/register', controllers.createRegistration);

export default router;
