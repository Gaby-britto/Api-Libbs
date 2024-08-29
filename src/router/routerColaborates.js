const { Router } = require('express');

const ColaboratesController = require("../controller/ColaboratesController");
const { ValidateColaborates, ValidateColaboratesId } = require('../middlewares/ValidateColaborates');
const router = Router();


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