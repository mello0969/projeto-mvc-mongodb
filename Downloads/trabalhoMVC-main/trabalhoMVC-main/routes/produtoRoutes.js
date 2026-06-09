/**
 * @file Define as rotas relacionadas aos produtos.
 */

const express = require('express');
const router = express.Router();
const controller = require('../controllers/produtoController');

/**
 * GET /produtos
 * Lista todos os produtos.
 */
router.get('/', controller.listar);

/**
 * GET /produtos/novo
 * Exibe o formulário de cadastro.
 */
router.get('/novo', controller.formCriar);

/**
 * POST /produtos/novo
 * Cadastra um novo produto.
 */
router.post('/novo', controller.criar);

/**
 * GET /produtos/editar/:id
 * Exibe o formulário de edição.
 */
router.get('/editar/:id', controller.formEditar);

/**
 * POST /produtos/editar/:id
 * Atualiza um produto existente.
 */
router.post('/editar/:id', controller.editar);

/**
 * GET /produtos/deletar/:id
 * Remove um produto.
 */
router.get('/deletar/:id', controller.deletar);

module.exports = router;