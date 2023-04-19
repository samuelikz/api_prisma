import { Router, Request, Response } from 'express';
import prisma from '../../prisma/client';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.json({ message: 'hello world !!' });
});


router.get('/users', async (req: Request, res: Response) => {
    const users = await prisma.user.findMany();
    res.json(users);
});

router.get('/posts', async (req: Request, res: Response) => {
    const posts = await prisma.post.findMany();
    res.json(posts);
});

router.post('/users', async (req: Request, res: Response) => {
    const { nome, cpf } = req.body;
    const user = await prisma.user.create({
        data: { nome, cpf },
    });
    res.json(user);
});

router.post('/posts', async (req: Request, res: Response) => {
    const { nome, email, cpf, data_nascimento, description } = req.body;
    const post = await prisma.post.create({
        data: { nome, email, cpf, data_nascimento, description },
    });
    res.json(post);
});

export default router;
