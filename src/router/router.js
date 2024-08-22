const { Router } = require('express');
const UserController = require("../controller/UserController");
const ProductController = require("../controller/ProductController");
const ColaboratesController = require("../controller/ColaboratesController");
const { validateUser, validateUserId } = require('../middlewares/ValidateUser');
const { validateProduto, validateProdutoId } = require('../middlewares/ValidateProduts');
const { ValidateColaborates, ValidateColaboratesId } = require('../middlewares/ValidateColaborates');
const router = Router();

// Rotas para UserController
router.post('/users', validateUser, (req, res) => {
    UserController.create(req, res);
});

router.get('/users', (req, res) => {
    UserController.getAll(req, res);
});

router.get('/users/:id', validateUserId, (req, res) => {
    UserController.getOne(req, res);
});

router.put('/users/:id', validateUser, validateUserId, (req, res) => {
    UserController.update(req, res);
});

router.delete('/users/:id',  validateUserId, (req, res) => {
    UserController.delete(req, res);
});

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


// Rotas para ColaboratesController
router.post('/colaborates', ValidateColaborates, (req,res) => {
    ColaboratesController.create(req, res);
});

router.get('/colaborates',  (req, res) => {
    ColaboratesController.getAll(req, res);
});

router.get('/colaborates/:id', ValidateColaborates, (req, res) => {
    ColaboratesController.getOne(req, res);
});

router.put('/colaborates/:id', ValidateColaborates, ValidateColaboratesId, (req, res) => {
    ColaboratesController.update(req, res);
});

router.delete('/colaborates/:id', ValidateColaboratesId, (req, res) => {
    ColaboratesController.delete(req, res);
});

module.exports = router;
