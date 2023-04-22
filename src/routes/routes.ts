import { Router, Request, Response } from 'express';
import { createLogging, createRegistration, getLogging, getRegistration, createUser} from '../controllers/UserController';

const router = Router();

router.get('/create-user', createUser);
router.get('/loggin', getLogging);
router.post('/loggin', createLogging);
router.get('/registration', getRegistration);
router.post('/registration', createRegistration);

export default router;
