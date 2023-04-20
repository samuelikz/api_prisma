import { Router, Request, Response } from 'express';
import { createPost, createUser, getPosts, getUsers } from '../controllers/userController';

const router = Router();

router.get('/posts', getPosts);
router.get('/users', getUsers);
router.post('/users', createUser);
router.post('/posts', createPost);

export default router;
