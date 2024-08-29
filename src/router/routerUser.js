const { Router } = require('express');

const UserController = require("../controller/UserController");
const { validateUser, validateUserId } = require('../middlewares/ValidateUser');

const router = Router();

// Rotas para UserController
router.post('/', validateUser, (req, res) => {
    UserController.create(req, res);
});

router.get('/', (req, res) => {
    UserController.getAll(req, res);
});

router.get('/:id', validateUserId, (req, res) => {
    UserController.getOne(req, res);
});

router.put('/:id', validateUser, validateUserId, (req, res) => {
    UserController.update(req, res);
});

router.delete('/:id',  validateUserId, (req, res) => {
    UserController.delete(req, res);
});

module.exports = router;