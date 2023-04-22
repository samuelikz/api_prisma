import { prisma } from "../../utils/prisma";
import { Request, Response } from 'express';

export const getUsers =async (req: Request, res: Response) => {
    const users = await prisma.user_accounts.findMany();
    return res.json(users);
}