const validarAluno = (req, res, next) => {
  const { nome, email, curso, nota } = req.body;
  const faltando = [];
  if (!nome?.trim()) faltando.push('nome');
  if (!email?.trim()) faltando.push('email');
  if (!curso?.trim()) faltando.push('curso');
  if (nota === undefined || nota === '') faltando.push('nota');
  if (faltando.length > 0)
    return res.status(400).json({ sucesso: false, mensagem: 'Campos obrigatórios ausentes', faltando });
  next();
};

module.exports = { validarAluno };
