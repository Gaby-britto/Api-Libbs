const { json } = require("express");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require ('jsonwebtoken');


const UserController = {
  login: async (req, res) => {
    try {
      const { email, senha } = req.body;
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(400).json({
          msg: "Email ou senha incorretos",
        });
      };

      const isValid = await bcrypt.compare(senha, user.senha);
      if(!isValid){
        return res.status(400).json({
          msg: 'Email ou senha incorretos'
        });
      };
      
      const token = jwt.sign({
        email: user.email, 
        nome: user.nome
      }, process.env.SECRET, {expiresIn: '1hr'});


      return res.status(200).json({
        msg: 'Login realizado!',
        token
      })

    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Acione o Suporte",
      });
    }
  },

  create: async (req, res) => {
    try {
      const { nome, senha, email } = req.body;

      const hashSenha = await bcrypt.hash(senha, 10);

      //axios.post -> React
      const userCriado = await User.create({ nome, senha: hashSenha, email });

      return res.status(200).json({
        msg: "Usuario criado com sucesso!",
        user: userCriado,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o suporte" });
    }
  },
  update: async (req, res) => {
    const { id } = req.params; //Usuario//atualizar//12345678
    const { nome, senha, email } = req.body;
    //axios.post -> React
    console.log({ id });
    console.log({ nome, senha, email });

    try {
      const userUpadte = await User.findByPk(id);
      if (userUpadte == null) {
        return res.status(404).json({
          msg: "Usuário não encontrado",
        });
      }

      const upadate = await userUpadte.update({
        nome,
        senha,
        email,
      });

      if (upadate) {
        return res.status(200).json({
          msg: "Erro ao atualizar usuário",
        });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o suporte" });
    }
  },
  getAll: async (req, res) => {
    try {
      const usuarios = await User.findAll();
      return res.status(200).json({
        msg: "Users encontrados!!",
        usuarios,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o suporte" });
    }
  },
  getOne: async (req, res) => {
    try {
      const { id } = req.params;

      const usuarioEspecifico = await User.findByPk(id);

      if (usuarioEspecifico === null) {
        res.status(404).json({
          msg: "usuario não encontrado",
        });
      }

      return res.status(200).json({
        msg: "USUARIO ENCONTRADO",
        user: usuarioEspecifico,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o suporte" });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;

      const userFinded = await User.findByPk(id);

      if (userFinded == null) {
        return res.status(404).json({
          msg: "User não encontrado",
        });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o suporte" });
    }
  },
};
module.exports = UserController;
