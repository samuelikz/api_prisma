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
exports.signin = void 0;
const prisma_1 = require("../../utils/prisma");
const securityUtils_1 = require("../../utils/securityUtils");
const jwtService_1 = require("../../utils/jwtService");
const signin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, password } = req.body;
    const user = yield prisma_1.prisma.user_accounts.findUnique({ where: { name } });
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    const passwordMatch = user.password;
    if (passwordMatch === null) {
        return res.status(401).json({ error: 'Invalid password' });
    }
    const isPasswordValid = yield securityUtils_1.securityUtils.verify(password, passwordMatch);
    if (!isPasswordValid) {
        return res.status(401).json({ error: 'Invalid password' });
    }
    else {
        const userData = { uid: Number(user.id) };
        const accessToken = jwtService_1.JWTService.sing(userData);
        if (accessToken === 'jwt-secret-not-found') {
            return res.status(500).json({ error: 'INTERNAL_SERVER_ERROR-TOKEN NO GENERATE' });
        }
        return res.json({ token: accessToken });
    }
});
exports.signin = signin;
