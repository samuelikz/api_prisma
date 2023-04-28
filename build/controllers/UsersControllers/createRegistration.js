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
exports.createRegistration = void 0;
const prisma_1 = require("../../utils/prisma");
const securityUtils_1 = require("../../utils/securityUtils");
const createRegistration = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, cpf, data_nascimento, description } = req.body;
        let hashedCPF = yield securityUtils_1.securityUtils.hashd(cpf);
        let hashedEMAIL = yield securityUtils_1.securityUtils.hashd(email);
        hashedCPF = 'INFORMADO';
        hashedEMAIL = 'INFORMADO';
        const registration = yield prisma_1.prisma.data_registration.create({
            data: {
                name,
                email: hashedEMAIL,
                cpf: hashedCPF,
                data_nascimento,
                description
            }
        });
        res.json(registration);
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Erro ao cadastrar o registro');
    }
});
exports.createRegistration = createRegistration;
