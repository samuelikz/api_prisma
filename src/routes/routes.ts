import { Router } from 'express';
import * as controllers from '../controllers/UsersControllers/index';

const router = Router();

router.post('/users', controllers.createUser);
router.get('/users', controllers.getUsers);
router.get('/logs', controllers.getLogging);
router.post('/logs', controllers.createLogging);
router.get('/register', controllers.getRegistration);
router.post('/register', controllers.createRegistration);

export default router;
