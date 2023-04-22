import rateLimit from 'express-rate-limit';
import path from 'path';

// Limite de solicitações por IP
export const limiterByIP = rateLimit({
  windowMs: 6 * 10000, // 1m em milissegundos
  max: 10, // limite de solicitações por IP e windowMs
  message: 'Limite de solicitações excedido. Por favor, tente novamente mais tarde.',
  keyGenerator: (req) => {
    //console.log(req.ip)
    return req.ip; // gera uma chave com base no endereço IP do cliente
  },
  handler: (req, res, next) => {
    // Renderiza a página de erro quando o limite é atingido
    res.status(429).render(path.join(__dirname, '../views/404_error'), {
      title: 'Not Found',
      error: {
        status: '429',
        message: 'The requested page limit'
      }
    });
  }
});
