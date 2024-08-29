const authenticateToken = require('../middlewares/authenticateToken');
const { Router } = require('express');
const router = Router();

const userRoutes = require("./routerUser");
const UserController = require('../controller/UserController');

router.use('/user', userRoutes);

router.post('/login', (req, res) => {
    UserController.login(req, res)
});

const productRoutes = require("./routerProducts");
router.use('/product', productRoutes);

const colaboratesRouter = require("./routerColaborates");
router.use('/colaboartes', colaboratesRouter);



module.exports = router;
