/**
 * @file Arquivo principal da aplicação.
 * Responsável por configurar o servidor Express,
 * middlewares, engine de visualização e rotas.
 */

const express = require('express');
const app = express();

/**
 * Middleware para processar dados enviados por formulários HTML.
 */
app.use(express.urlencoded({ extended: true }));

/**
 * Middleware para servir arquivos estáticos da pasta public.
 */
app.use(express.static('public'));

/**
 * Configuração do motor de templates EJS.
 */
app.set('view engine', 'ejs');

/**
 * Rota da página inicial.
 */
app.get('/', (req, res) => res.render('home'));

/**
 * Rota da página sobre.
 */
app.get('/sobre', (req, res) => res.render('sobre'));

/**
 * Rota da página de contato.
 */
app.get('/contato', (req, res) => res.render('contato'));

const produtoRoutes = require('./routes/produtoRoutes');

/**
 * Rotas relacionadas aos produtos.
 */
app.use('/produtos', produtoRoutes);

/**
 * Inicializa o servidor na porta 3000.
 */
app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});