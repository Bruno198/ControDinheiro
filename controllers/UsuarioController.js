
const bcrypt = require('bcryptjs');
const { use } = require("passport");
const User = require('../models/User');
let nomouser;
module.exports = {

  async saveUsuario(req, res) {
    req.body.password = bcrypt.hashSync(req.body.password);
    await User.create(req.body);
    console.log("Salvou Usuario");
    res.redirect("/login");
  },

  loadLogin(req, res) {

    if (req.query.fail)
      res.render("ejs/login", { message: 'Senha ou Login Errado!' });

    else {
      res.render("ejs/login", { message: null });
    
    }
  },

  loadUsuario(req, res) {
   //let  nome_do_usuario = req.User.username;
    //let variavel_nome = "usuario";
 //   nome_do_usuario = req.User.username;

      nomouser = req.User.username;
      res.render(__dirname + "/../views/ejs/home", {nomouser});
    
    
    }


  }
