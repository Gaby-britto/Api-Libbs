const { DataTypes} = require("sequelize");
const sequelize = require("../config/config");

const Colaborates = sequelize.define('colaborates', {
    empresa:{
        type: DataTypes.STRING,
        allowNull: false
    },
    mercadoria:{
        type: DataTypes.STRING,
        allowNull: false
    },
    cnpj: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Colaborates;