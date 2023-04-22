"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.limiterByIP = void 0;
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const path_1 = __importDefault(require("path"));
// Limite de solicitações por IP
exports.limiterByIP = (0, express_rate_limit_1.default)({
    windowMs: 6 * 10000,
    max: 10,
    message: 'Limite de solicitações excedido. Por favor, tente novamente mais tarde.',
    keyGenerator: (req) => {
        //console.log(req.ip)
        return req.ip; // gera uma chave com base no endereço IP do cliente
    },
    handler: (req, res, next) => {
        // Renderiza a página de erro quando o limite é atingido
        res.status(429).render(path_1.default.join(__dirname, '../views/page_error'), {
            title: 'Not Found',
            error: {
                status: '429',
                message: 'The requested page limit'
            }
        });
    }
});
