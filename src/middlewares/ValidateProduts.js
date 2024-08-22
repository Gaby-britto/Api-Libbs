const validateProduto = (req, res, next) => {
  const { nome, quantiade, preco } = req.body;

  if (!nome || !quantiade || !preco) {
    return res.status(400).json({
      msg: "Campos inválidos, revise",
    });
  }

  return next();
};

const validateProdutoId = (req, res, next) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      msg: "Parâmetro faltando",
    });
  }

  return next();
};

module.exports = { validateProduto, validateProdutoId };
