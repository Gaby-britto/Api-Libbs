const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");

const Product = sequelize.define('product', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    preco: {
        type: DataTypes.DOUBLE,
        allowNull: false
    }
});

module.exports = Product;