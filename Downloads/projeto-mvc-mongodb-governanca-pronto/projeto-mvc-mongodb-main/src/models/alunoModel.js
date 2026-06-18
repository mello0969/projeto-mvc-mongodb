const mongoose = require('mongoose');

/**
 * Schema responsável por representar os alunos cadastrados no sistema.
 *
 * @typedef {Object} Aluno
 * @property {string} nome Nome completo do aluno.
 * @property {string} email E-mail único do aluno.
 * @property {string} curso Curso em que o aluno está matriculado.
 * @property {number} nota Nota do aluno, variando entre 0 e 10.
 */

/**
 * Define a estrutura dos dados dos alunos no MongoDB.
 */
const alunoSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: [true, 'Nome obrigatório'],
      trim: true
    },

    email: {
      type: String,
      required: [true, 'E-mail obrigatório'],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'E-mail inválido']
    },

    curso: {
      type: String,
      required: [true, 'Curso obrigatório'],
      trim: true
    },

    nota: {
      type: Number,
      required: [true, 'Nota obrigatória'],
      min: [0, 'Mínimo 0'],
      max: [10, 'Máximo 10']
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Aluno', alunoSchema);