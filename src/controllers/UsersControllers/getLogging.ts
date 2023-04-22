import { prisma } from "../../utils/prisma";
import { Router, Request, Response } from 'express';

export const getLogging = async (req: Request, res: Response) => {
    try {

        const logging = await prisma.data_logging.findMany();
        res.json(logging);

    } catch (error) {

        console.error(error);
        res.status(500).send('Erro ao buscar os registros');

    }
}