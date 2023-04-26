import { prisma } from "../../utils/prisma";
import { Request, Response } from 'express';
import { securityUtils } from "../../utils/securityUtils";

export const createRegistration = async (req: Request, res: Response) => {
    try {
        const { name, email, cpf, data_nascimento, description } = req.body;

        let hashedCPF = await securityUtils.hashd(cpf);
        let hashedEMAIL = await securityUtils.hashd(email);

        hashedCPF = 'INFORMADO';
        hashedEMAIL = 'INFORMADO';

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