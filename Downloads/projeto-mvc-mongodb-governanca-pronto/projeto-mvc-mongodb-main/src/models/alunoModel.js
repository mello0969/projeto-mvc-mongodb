const mongoose = require('mongoose');

/**
 * Modelo responsável pelos alunos.
 */
const alunoSchema = new mongoose.Schema({
  nome:  { type: String, required: [true, 'Nome obrigatório'], trim: true },
  email: { type: String, required: [true, 'E-mail obrigatório'], unique: true, trim: true, lowercase: true, match: [/^\S+@\S+\.\S+$/, 'E-mail inválido'] },
  curso: { type: String, required: [true, 'Curso obrigatório'], trim: true },
  nota:  { type: Number, required: [true, 'Nota obrigatória'], min: [0, 'Mínimo 0'], max: [10, 'Máximo 10'] },
}, { timestamps: true });

module.exports = mongoose.model('Aluno', alunoSchema);
