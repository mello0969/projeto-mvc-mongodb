const Aluno = require('../models/alunoModel');
const mongoose = require('mongoose');

const isValidId = (id) => mongoose.Types.ObjectId.isValid(id);

const paginaAlunos = async (req, res) => {
  try {
    const alunos = await Aluno.find().sort({ createdAt: -1 });
    res.render('alunos/index', { alunos, erro: null, sucesso: req.query.sucesso || null });
  } catch {
    res.render('alunos/index', { alunos: [], erro: 'Erro ao carregar alunos.', sucesso: null });
  }
};

const criarAluno = async (req, res) => {
  try {
    await Aluno.create(req.body);
    res.redirect('/alunos?sucesso=cadastrado');
  } catch (error) {
    const alunos = await Aluno.find().sort({ createdAt: -1 });
    const erro = error.code === 11000 ? 'Este e-mail já está cadastrado.' : 'Erro ao cadastrar aluno.';
    res.render('alunos/index', { alunos, erro, sucesso: null });
  }
};

const paginaEditar = async (req, res) => {
  try {
    if (!isValidId(req.params.id)) return res.redirect('/alunos');
    const aluno = await Aluno.findById(req.params.id);
    if (!aluno) return res.redirect('/alunos');
    res.render('alunos/editar', { aluno, erro: null });
  } catch {
    res.redirect('/alunos');
  }
};

const atualizarAluno = async (req, res) => {
  try {
    if (!isValidId(req.params.id)) return res.redirect('/alunos');
    await Aluno.findByIdAndUpdate(req.params.id, req.body, { runValidators: true });
    res.redirect('/alunos?sucesso=atualizado');
  } catch (error) {
    const aluno = await Aluno.findById(req.params.id);
    res.render('alunos/editar', { aluno, erro: 'Erro ao atualizar aluno.' });
  }
};

const deletarAluno = async (req, res) => {
  try {
    if (!isValidId(req.params.id)) return res.redirect('/alunos');
    await Aluno.findByIdAndDelete(req.params.id);
    res.redirect('/alunos?sucesso=removido');
  } catch {
    res.redirect('/alunos');
  }
};

module.exports = { paginaAlunos, criarAluno, paginaEditar, atualizarAluno, deletarAluno };
