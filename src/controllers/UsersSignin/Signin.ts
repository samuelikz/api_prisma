import { prisma } from "../../utils/prisma";
import { Request, Response } from 'express';
import { securityUtils } from "../../utils/securityUtils";
import { user_accounts } from '.prisma/client';
import { JWTService, IjwtData } from "../../utils/jwtService";

export const signin = async (req: Request, res: Response) => {
  const { name, password } = req.body;

  const user: user_accounts | null = await prisma.user_accounts.findUnique({ where: { name } });

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  const passwordMatch: string | null = user.password;

  if (passwordMatch === null) {
    return res.status(401).json({ error: 'Invalid password' });
  }

  const isPasswordValid: boolean = await securityUtils.verify(password, passwordMatch);
 

  if (!isPasswordValid) {
    return res.status(401).json({ error: 'Invalid password' });
  } else {
    const userData: IjwtData = { uid: Number(user.id) };
    const accessToken = JWTService.sing(userData);

    if (accessToken === 'jwt-secret-not-found') {
      return res.status(500).json({ error: 'INTERNAL_SERVER_ERROR-TOKEN NO GENERATE' });
    }

    return res.json({ token: accessToken });
  }
}
