/**
 * @file Controller responsável pelas operações de produtos.
 */

const Produto = require('../models/produtoModel');

/**
 * Lista todos os produtos cadastrados.
 *
 * @param {import('express').Request} req Requisição HTTP.
 * @param {import('express').Response} res Resposta HTTP.
 */
exports.listar = (req, res) => {
  res.render('produtos', { produtos: Produto.listar() });
};

/**
 * Exibe o formulário de criação de produto.
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
exports.formCriar = (req, res) => {
  res.render('criarProduto');
};

/**
 * Cria um novo produto.
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
exports.criar = (req, res) => {
  Produto.adicionar(req.body);
  res.redirect('/produtos');
};

/**
 * Exibe o formulário de edição.
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
exports.formEditar = (req, res) => {
  const produto = Produto.buscarPorId(req.params.id);
  res.render('editarProduto', { produto });
};

/**
 * Atualiza um produto existente.
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
exports.editar = (req, res) => {
  Produto.atualizar(req.params.id, req.body);
  res.redirect('/produtos');
};

/**
 * Remove um produto.
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
exports.deletar = (req, res) => {
  Produto.remover(req.params.id);
  res.redirect('/produtos');
};