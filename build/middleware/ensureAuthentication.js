"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureAuthentication = void 0;
const http_status_codes_1 = require("http-status-codes");
const jwtService_1 = require("../utils/jwtService");
const ensureAuthentication = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).json({
            erros: { default: 'Não Autorizado' }
        });
    }
    const [type, token] = authorization.split(' ');
    if (type !== 'Bearer') {
        return res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).json({
            erros: { default: 'Não Autorizado' }
        });
    }
    const jwData = jwtService_1.JWTService.verify(token);
    if (jwData === 'jwt-secret-not-found') {
        return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json({
            erros: { default: 'Erro ao verificar o token' }
        });
    }
    else if (jwData === 'invalid_token') {
        return res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).json({
            erros: { default: 'Não Autorizado' }
        });
    }
    req.headers.idUsuario = jwData.uid.toString();
    return next();
});
exports.ensureAuthentication = ensureAuthentication;
