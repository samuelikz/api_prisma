import { prisma } from "../../utils/prisma";
import { Request, Response } from 'express';

export const getRegistration = async (req: Request, res: Response) => {
    try {

        const registration = await prisma.data_registration.findMany();
        res.json(registration);

    } catch (error) {

        console.error(error);
        res.status(500).send('Erro ao buscar os registros');

    }
}