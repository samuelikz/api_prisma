import { prisma } from "../../utils/prisma";
import { Request, Response } from 'express';
import { securityUtils } from "../../utils/securityUtils";

export const createUser = async (req: Request, res: Response) => {
    const { name, password } = req.body;
    const hashedPASSWORD = await securityUtils.hashd(password);

    const userI = await prisma.user_accounts.findUnique({ where: { name } })

        if (userI) {
            return res.json({error: 'User Ecxist'});
        }

    const user = await prisma.user_accounts.create({
        data: {
            name,
            password: hashedPASSWORD
        }
    });
    res.json(user);
}
