const logRequisicao = (req, res, next) => {
  const hora = new Date().toLocaleTimeString('pt-BR', { timeZone: 'America/Sao_Paulo' });
  console.log(`[${hora}] ${req.method} ${req.originalUrl}`);
  next();
};

module.exports = logRequisicao;
