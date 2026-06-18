const express = require('express');
const router = express.Router();
const { home, sobre, contato } = require('../controllers/paginasController');

router.get('/',        home);
router.get('/sobre',   sobre);
router.get('/contato', contato);

module.exports = router;
