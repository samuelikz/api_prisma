import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import { JWTService } from "../utils/jwtService";

export const ensureAuthentication: RequestHandler = async (req, res, next) => {
    const { authorization } = req.headers;


    if (!authorization) {
        return res.status(StatusCodes.UNAUTHORIZED).json({
            erros: { default: 'Não Autorizado' }
        });
    }

    const [type, token] = authorization.split(' ');

    if (type !== 'Bearer') {
        return res.status(StatusCodes.UNAUTHORIZED).json({
            erros: { default: 'Não Autorizado' }
        });
    }
    const jwData = JWTService.verify(token);

    if (jwData === 'jwt-secret-not-found') {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            erros: { default: 'Erro ao verificar o token' }
        });
    } else if (jwData === 'invalid_token') {
        return res.status(StatusCodes.UNAUTHORIZED).json({
            erros: { default: 'Não Autorizado' }
        });
    }

    return next();
}