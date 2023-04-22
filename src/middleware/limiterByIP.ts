import rateLimit from 'express-rate-limit';

// Limite de solicitações por IP
export const limiterByIP = rateLimit({
  windowMs: 6 * 10000, // 1m em milissegundos
  max: 15, // limite de solicitações por IP e windowMs
  message: 'Limite de solicitações excedido. Por favor, tente novamente mais tarde.',
  keyGenerator: (req) => {
    console.log(req.ip)
    return req.ip; // gera uma chave com base no endereço IP do cliente
  },
});
