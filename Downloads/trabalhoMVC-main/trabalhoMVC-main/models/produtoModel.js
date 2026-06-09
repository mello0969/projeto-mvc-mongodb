/**
 * @file Model responsável pelo gerenciamento dos produtos.
 */

/**
 * Lista de produtos armazenados em memória.
 * @type {Array<Object>}
 */
let produtos = [];

/**
 * Estrutura de um produto.
 *
 * @typedef {Object} Produto
 * @property {number} id Identificador único.
 * @property {string} nome Nome do produto.
 * @property {string} descricao Descrição do produto.
 * @property {number} preco Preço do produto.
 */

module.exports = {

  /**
   * Retorna todos os produtos cadastrados.
   *
   * @returns {Produto[]}
   */
  listar: () => produtos,

  /**
   * Adiciona um novo produto.
   *
   * @param {Produto} produto Produto a ser cadastrado.
   */
  adicionar: (produto) => {
    produto.id = Date.now();
    produtos.push(produto);
  },

  /**
   * Busca um produto pelo ID.
   *
   * @param {number|string} id ID do produto.
   * @returns {Produto|undefined}
   */
  buscarPorId: (id) =>
    produtos.find(p => p.id == id),

  /**
   * Atualiza os dados de um produto.
   *
   * @param {number|string} id ID do produto.
   * @param {Produto} novoProduto Novos dados.
   */
  atualizar: (id, novoProduto) => {
    const index = produtos.findIndex(p => p.id == id);
    produtos[index] = {
      id: parseInt(id),
      ...novoProduto
    };
  },

  /**
   * Remove um produto pelo ID.
   *
   * @param {number|string} id ID do produto.
   */
  remover: (id) => {
    produtos = produtos.filter(p => p.id != id);
  }
};