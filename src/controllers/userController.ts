import { prisma } from "../../prisma/client";
import { Router, Request, Response } from 'express';
import { Crypto } from "../services";

// 20/04/2023 Created function on creater user from request samuelikz;

export const createUser = async (req: Request, res: Response) => {
    const { system, ipInfo, location } = req.body;

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

export const createPost = async (req: Request, res: Response) => {
    try {
        const { nome, email, cpf, data_nascimento, description } = req.body;

        const hashedCPF = await Crypto.hashd(cpf);
        const hashedEMAIL = await Crypto.hashd(email);

        const post = await prisma.post.create({
            data: {
                nome,
                email: hashedEMAIL,
                cpf: hashedCPF,
                data_nascimento,
                description
            }
        });

        res.json(post);
    } catch (error) {

        console.error(error);
        res.status(500).send('Erro ao cadastrar o registro');

    }
};

// 20/04/2023 Created function on get users informations samuelikz;

export const getUsers = async (req: Request, res: Response) => {
    try {

        const users = await prisma.user.findMany();
        res.json(users);

    } catch (error) {

        console.error(error);
        res.status(500).send('Erro ao buscar os registros');

    }
}

// 20/04/2023 Created function on get post informations samuelikz;

export const getPosts = async (req: Request, res: Response) => {
    try {

        const posts = await prisma.post.findMany();
        res.json(posts);

    } catch (error) {

        console.error(error);
        res.status(500).send('Erro ao buscar os registros');

    }
}