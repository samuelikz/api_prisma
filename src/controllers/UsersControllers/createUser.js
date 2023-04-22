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
exports.createUser = void 0;
const prisma_1 = require("../../utils/prisma");
const securityUtils_1 = require("../../utils/securityUtils");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, password, status } = req.body;
    const hashedPASSWORD = yield securityUtils_1.securityUtils.hashd(password);
    const userI = yield prisma_1.prisma.user_accounts.findUnique({ where: { name } });
    if (userI) {
        return res.json({ error: 'User Ecxist' });
    }
    const user = yield prisma_1.prisma.user_accounts.create({
        data: {
            name,
            password: hashedPASSWORD,
            status
        }
    });
    res.json(user);
});
exports.createUser = createUser;
