import { prisma } from "../../utils/prisma";
import { Request, Response } from 'express';

export const getUsers =async (req: Request, res: Response) => {
    const users = await prisma.user_accounts.findMany();
    // console.log('idUsuario', req.headers.idUsuario); retorna id do usuario 
    return res.json(users);
}