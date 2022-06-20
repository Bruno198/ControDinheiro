
const User = require("../models/User");
const bcrypt = require('bcryptjs');
const { use } = require("passport");
//const LancamentoController = require("../controllers/LancamentoController");

let nomeUsuario, root = 0;
let lognNome, msg_login;
module.exports = {

  async saveUsuario(req, res) {
    req.body.password = bcrypt.hashSync(req.body.password);
    await User.create(req.body);
    //global.connection.collection("elementosHoje").insertOne();
    lognNome = req.body.user_sobrenome;
    root = 1;
    console.log("Root" + root);

    res.redirect("/login");
  },

  loadLogin(req, res) {
    root = 1;

    if (req.query.fail)
      res.render("ejs/login", { message: 'Senha ou Login Errado!' });

    else {
      res.render("ejs/login", { message: null });
      // res.redirect("*");
      //res.render(__dirname+"/../views/ejs/index", {list ,nomeUsuario});
      // res.render("ejs/index", {nomeUsuario});
      // res.render(__dirname+"/../views/ejs/login", {nomeUsuario});
    }
    //temp = 2

  },

  root(req, res) {
    if (root == 0)
      root = -1;
    //  res.render(__dirname+"/../views/ejs/categoria", {});

  },

  loadUsuario(req, res) {
    // User.findAll().then((data) => { 
    use.findAll().then((data) => {
      // nomeUsuario = req.body.username;
      console.log("Login do Usuario " + nomeUsuario);
      console.log("foi o loadUsuario\n\n\n");
      if (!req.query.fail) {
        msg_login = "Não está logado";
      }
      else {
        msg_login = "Bem Vindo";
        res.render(__dirname + "/../views/ejs/index", { nomeUsuario: "select username from users where id=" + req.User.id, lognNome, msg_login });
      }

    });

    // n se se é a tabela user ou o pouport use
  },
}