const Colaborates = require("../models/colaborates");
const { create } = require("./ProductController");

const ColaboratesController = {
  create: async (req, res) => {
    try {
      const { empresa, mercadoria, cnpj } = req.body;
      const colaboratesCriado = await Colaborates.create({
        empresa,
        mercadoria,
        cnpj,
      });

      return res.status(200).json({
        msg: "Colaborador criado com sucesso",
        colaboratesCriado,
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
    const { empresa, mercadoria, cnpj } = req.body;

    try {
      const colaboratesUpdate = await Colaborates.findByPk(id);
      if (colaboratesUpdate === null) {
        return res.status(404).json({
          msg: "Colaborador não encontrado",
        });
      }

      const update = await colaboratesUpdate.update({
        empresa,
        mercadoria,
        cnpj,
      });

      return res.status(200).json({
        msg: "Colaborador atualizado com sucesso!",
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
      const colaborates = await Colaborates.findAll();
      return res.status(200).json({
        msg: "Colaboradores encontrados",
        colaborates,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Erro interno do servidor. Acione o suporte",
      });
    }
  },

  getOne: async (req, res) => {
    try {
      const { id } = req.params;
      const colaborateEncontrado = await Colaborates.findByPk(id);
      if (colaborateEncontrado === null) {
        return res.status(400).json({
          msg: "Colaborador não encontrado!",
        });
      }

      res.status(200).json({
        msg: "Produto encontrado!",
        colaborate: colaborateEncontrado,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Acione o suporte",
      });
    }
  },

  delete: async(req, res) => {
    try {
        const {id} = req.params;
        const colaborateFinded = await Colaborates.findByPk(id);
    if(colaborateFinded === null) {
        return res.status(404).json({
            msg: "Produto não encontrado",
        });
    }

    await colaborateFinded.destroy();

    return res.status(200).json({
        msg: "Colaborador excluido com sucesso!",
    });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            msg: "Acione o suporte."
        })
        
    }
  }
};
module.exports = ColaboratesController;
