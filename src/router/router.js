const { Router } = require('express');
const UserController = require("../controller/UserController");
const ProductController = require("../controller/ProductController");
const router = Router();

// Rotas para UserController
router.post('/users', (req, res) => {
    UserController.create(req, res);
});

router.get('/users', (req, res) => {
    UserController.getAll(req, res);
});

router.get('/users/:id', (req, res) => {
    UserController.getOne(req, res);
});

router.put('/users/:id', (req, res) => {
    UserController.update(req, res);
});

router.delete('/users/:id', (req, res) => {
    UserController.delete(req, res);
});

// Rotas para ProductController
router.post('/products', (req, res) => {
    ProductController.create(req, res);
});

router.get('/products', (req, res) => {
    ProductController.getAll(req, res);
});

router.get('/products/:id', (req, res) => {
    ProductController.getOne(req, res);
});

router.put('/products/:id', (req, res) => {
    ProductController.update(req, res);
});

router.delete('/products/:id', (req, res) => {
    ProductController.delete(req, res);
});

module.exports = router;
