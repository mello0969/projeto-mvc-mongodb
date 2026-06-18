const express = require('express');
const router = express.Router();
const { paginaAlunos, criarAluno, paginaEditar, atualizarAluno, deletarAluno } = require('../controllers/alunoController');
const { validarAluno } = require('../middlewares/validacaoMiddleware');

router.get('/',            paginaAlunos);
router.post('/',           validarAluno, criarAluno);
router.get('/:id/editar',  paginaEditar);
router.post('/:id/editar', validarAluno, atualizarAluno);
router.post('/:id/deletar', deletarAluno);

module.exports = router;
