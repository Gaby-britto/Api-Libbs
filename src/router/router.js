const authenticateToken = require('../middlewares/authenticateToken');
const { Router } = require('express');

const router = Router();


const userRoutes = require("./routerUser");
const UserController = require('../controller/UserController');
const uploadsRoutes = require('./routerUpload');
const productRoutes = require("./routerProducts");
const colaboratesRouter = require("./routerColaborates");

router.use('/user', userRoutes);

router.use('/image', uploadsRoutes);

router.use('/product', productRoutes);

router.use('/colaboartes', colaboratesRouter);

router.post('/login', (req, res) => {
    UserController.login(req, res)
});

module.exports = router;
