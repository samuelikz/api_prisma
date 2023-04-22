import { prisma } from "../../utils/prisma";
import { Request, Response } from 'express';

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