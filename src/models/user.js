const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");

const User = sequelize.define('user', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = User;