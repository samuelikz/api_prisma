import { prisma } from "../utils/prisma";
import { Router, Request, Response } from 'express';
import { Crypto } from "../services";

// 20/04/2023 Created function on creater user from request samuelikz;

export const createLogging = async (req: Request, res: Response) => {
    const { system, ipInfo, location } = req.body;

    const logging = await prisma.data_logging.create({
        data: {
            system,
            ipInfo,
            location
        }
    });
    res.json(logging);
}

export const createUser = async (req: Request, res: Response) => {
    const { name, password } = req.body;
    const hashedPASSWORD = await Crypto.hashd(password);

    const user = await prisma.user_accounts.create({
        data: {
            name,
            password: hashedPASSWORD
        }
    });
    res.json(user);
}

// 20/04/2023 Created function on created post from form samuelikz;

export const createRegistration = async (req: Request, res: Response) => {
    try {
        const { name, email, cpf, data_nascimento, description } = req.body;

        const hashedCPF = await Crypto.hashd(cpf);
        const hashedEMAIL = await Crypto.hashd(email);

        const registration = await prisma.data_registration.create({
            data: {
                name,
                email: hashedEMAIL,
                cpf: hashedCPF,
                data_nascimento,
                description
            }
        });

        res.json(registration);
    } catch (error) {

        console.error(error);
        res.status(500).send('Erro ao cadastrar o registro');

    }
};

// 20/04/2023 Created function on get users informations samuelikz;

export const getLogging = async (req: Request, res: Response) => {
    try {

        const logging = await prisma.data_logging.findMany();
        res.json(logging);

    } catch (error) {

        console.error(error);
        res.status(500).send('Erro ao buscar os registros');

    }
}

// 20/04/2023 Created function on get post informations samuelikz;

export const getRegistration = async (req: Request, res: Response) => {
    try {

        const registration = await prisma.data_registration.findMany();
        res.json(registration);

    } catch (error) {

        console.error(error);
        res.status(500).send('Erro ao buscar os registros');

    }
}