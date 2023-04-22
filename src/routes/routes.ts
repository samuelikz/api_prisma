import { Router, Request, Response } from 'express';
import { createLogging, createRegistration, getLogging, getRegistration } from '../controllers/UserController';

const router = Router();

router.get('/loggin', getLogging);
router.post('/loggin', createLogging);
router.get('/registration', getRegistration);
router.post('/registration', createRegistration);

export default router;
