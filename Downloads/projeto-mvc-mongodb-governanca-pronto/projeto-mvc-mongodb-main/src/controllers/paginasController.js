const home    = (req, res) => res.render('home/index');
const sobre   = (req, res) => res.render('sobre/index');
const contato = (req, res) => res.render('contato/index');

module.exports = { home, sobre, contato };
