const { Router } = require('express');

const ProductController = require("../controller/ProductController");
const { validateProduto, validateProdutoId } = require('../middlewares/ValidateProduts');

const router = Router();

// Rotas para ProductController
router.post('/products', validateProduto, (req, res) => {
    ProductController.create(req, res);
});

router.get('/products', (req, res) => {
    ProductController.getAll(req, res);
});

router.get('/products/:id', validateProdutoId, (req, res) => {
    ProductController.getOne(req, res);
});

router.put('/products/:id', validateProduto, validateProdutoId, (req, res) => {
    ProductController.update(req, res);
});

router.delete('/products/:id', validateProdutoId, (req, res) => {
    ProductController.delete(req, res);
});

module.exports = router;