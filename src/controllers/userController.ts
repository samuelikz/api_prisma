import {prisma} from "../../prisma/client";
import { Router, Request, Response } from 'express';

// 20/04/2023 Created function on creater user from request samuelikz;

export const createUser = async (req: Request, res: Response) =>{
    const {  system, ipInfo, location} = req.body;

    const user = await prisma.user.create({
        data: {
            system,
            ipInfo,
            location
        }
    });
    res.json(user);
}

// 20/04/2023 Created function on created post from form samuelikz;
export const createPost = async (req: Request, res: Response) =>{
    const { nome, email, cpf, data_nascimento, description } = req.body;
    const post = await prisma.post.create({
        data: { nome, email, cpf, data_nascimento, description },
    });
    res.json(post);
}

// 20/04/2023 Created function on get users informations samuelikz;
export const getUsers =async (req:Request, res:Response) => {
    const users = await prisma.user.findMany();
    res.json(users);
}

// 20/04/2023 Created function on get post informations samuelikz;
export const getPosts = async (req:Request, res:Response) => {
    const posts = await prisma.post.findMany();
    res.json(posts);
}