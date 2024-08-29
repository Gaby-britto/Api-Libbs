require('dotenv').config();
const express = require('express');
const router = require('./router/router');
const sequelize = require('./config/config');
const User = require("./models/user");
const Product = require ("./models/product");
const app = express();

//modelo da Api Json
app.use(express.json());
app.use('/api', router)
app.use('/api/product/', router)



// Listen ouvir (8080) porta
sequelize.authenticate()
.then(async() => {
    console.log("Conexão estabelecida com sucesso");
    await sequelize.sync();
})
.then(() =>  {
    app.listen(process.env.PORT == null ? 8080 : process.env.PORT, () => {
        console.log("------------");
        console.log("  Rodando   ");
        console.log("------------");
    
    });
})
.catch((error) => {
    console.log("Erro ao se conectar");
    
})
//Rota de teste -> 'HealthCheck'
app.get('/HealthCheck', (req,res)=>{
    return res.status(200).json({
        msg: "Estamos vivos!",
        alive: true
    });
});