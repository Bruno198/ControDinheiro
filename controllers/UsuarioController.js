
const User = require("../models/User");
const bcrypt = require('bcryptjs');
//const LancamentoController = require("../controllers/LancamentoController");

let nomeUsuario, root = 0;
let lognNome;
module.exports = {

  async saveUsuario(req, res) {
    req.body.password = bcrypt.hashSync(req.body.password);
    await User.create(req.body);
    //global.connection.collection("elementosHoje").insertOne();

    root = 1;
    console.log("Root" + root);

    res.redirect("/login");
  },

  loadLogin(req, res) {
    root = 1;

    if (req.query.fail)
      res.render("ejs/login", { message: 'Senha ou Login Errado!' });

    else {
      res.render("ejs/login", { message: null, nomeUsuario, lognNome });
      // res.redirect("*");
      //res.render(__dirname+"/../views/ejs/index", {list ,nomeUsuario});
      // res.render("ejs/index", {nomeUsuario});
      // res.render(__dirname+"/../views/ejs/login", {nomeUsuario});
    }
    //temp = 2;

  },

  root(req, res) {
    if (root == 0)
      root = -1;
    //  res.render(__dirname+"/../views/ejs/categoria", {});

  },

  loadUsuario(req, res) {
    User.findAll().then((data) => {
      console.log("foi\n\n\n");

      nomeUsuario = req.body.username;
      console.log("Login do Usuario " + nomeUsuario);
      res.render(__dirname + "/../views/ejs/index", { list: data, nomeUsuario });

    });
  },
}