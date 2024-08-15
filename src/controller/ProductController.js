const Product = require("../models/product");

const ProductController = {
  create: async (req, res) => {
    try {
      const { nome, quantidade, preco } = req.body;
      const productCriado = await Product.create({ nome, quantidade, preco });

      return res.status(201).json({
        msg: "Produto criado com sucesso!",
        productCriado,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Acione o suporte.",
      });
    }
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { nome, quantidade, preco } = req.body;

    try {
      const productUpdate = await Product.findByPk(id);
      if (productUpdate === null) {
        return res.status(404).json({
          msg: "Produto não encontrado",
        });
      }

      const update = await productUpdate.update({
        nome,
        quantidade,
        preco,
      });

      return res.status(200).json({
        msg: "Produto atualizado com sucesso!",
        update,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Acione o suporte.",
      });
    }
  },

  getAll: async (req, res) => {
    try {
      const produtos = await Product.findAll();
      return res.status(200).json({
        msg: "Produtos encontrados",
        produtos,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Erro interno do servidor. Acione o suporte.",
      });
    }
  },

  getOne: async (req, res) => {
    try {
      const { id } = req.params;
      const produtoEncontrado = await Product.findByPk(id);
      if (produtoEncontrado == null) {
        return res.status(400).json({
          msg: "Produto nao encontrado!",
        });
      }

      res.status(200).json({
        msg: "Produto encontrado!",
        produto: produtoEncontrado,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: " Acione o suporte." });
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const productFinded = await Product.findByPk(id);

      if (productFinded === null) {
        return res.status(404).json({
          msg: "Produto não encontrado",
        });
      }

      await productFinded.destroy();

      return res.status(200).json({
        msg: "Produto excluído com sucesso",
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: " Acione o suporte." });
    }
  },
};

module.exports = ProductController;
