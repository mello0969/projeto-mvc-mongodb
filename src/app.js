require('dotenv').config();

const express   = require('express');
const path      = require('path');
const connectDB = require('./config/database');
const log       = require('./middlewares/logMiddleware');
const pagRoutes = require('./routes/paginasRoutes');
const aluRoutes = require('./routes/alunoRoutes');

const app = express();

connectDB();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..', 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(log);
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/',       pagRoutes);
app.use('/alunos', aluRoutes);

app.use((req, res) => res.status(404).render('404'));
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).send('Erro interno.');
});

module.exports = app;
