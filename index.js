const express = require("express");
const app = express();

const session = require('express-session');
const passport = require('passport');
require('./auth')(passport);

const bodyParse = require("body-parser");
const db = require("./db");

const IndexController = require("./controllers/IndexController");
const LancamentoController = require("./controllers/LancamentoController");
const CategoriaController = require("./controllers/CategoriaController");
const LimiteController = require("./controllers/LimiteController");
const { saveLimite } = require("./controllers/LimiteController");
const convertLancamentosController = require("./controllers/ConverteLancamentosController");
const { loadIndex } = require("./controllers/IndexController");
const { loadDolar } = require("./controllers/ConverteLancamentosController");
const PorcentagemController = require("./controllers/PorcentagemController");
const UsuarioController = require("./controllers/UsuarioController");
const { root } = require("./controllers/UsuarioController");



global.rootPath = __dirname;

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended: false}));

app.use(session({ 
    secret: 'nosso-segredo', 
    cookie: { maxAge: 1 * 60 * 1000 }, 
    resave: false, 
    saveUninitialized: false 
}));
app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'ejs');
app.use(express.static('public'));

 authenticationMiddleware = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  res.redirect('/login');
}


app.get("/login", UsuarioController.loadLogin);
app.post("/login", passport.authenticate('local',{
    successRedirect: '/',
    failureRedirect: '/login?fail=true'
}));
app.get("/logout", (req, res) =>{
    req.logOut((err) =>{console.log(err);});
    res.redirect('/');
});
//se n foi feito o login
//mostro só a pagina inicial

//se deu certo mostro todas paginas
//if(!rootPath)
//{
  //  app.get("/" , IndexController.loadIndex);
//}
//else{
 let root_novo = 0;
   if(root_novo == 0)
        app.get("/" , IndexController.loadIndex);// chamando lancamentos
        root_novo++;
    // if(root == 1){
        app.get("/" , IndexController.loadIndex);// chamando lancamentos
        app.get("/converte" , convertLancamentosController.loadConverter);
        app.get("/categoria" , CategoriaController.loadCategoria);
        app.get("/lancamento" , LimiteController.loadLimit);
        app.get("/limite" , LimiteController.loadLimit);
        app.get("/" , UsuarioController.loadLogin);

        app.post("/salva", IndexController.saveLancamento);// salva os dados
        app.post("/salvaCategoria", CategoriaController.saveCategoria);
        app.post("/salvaLimite", LimiteController.saveLimite);
        app.post("/savePorcentagem", PorcentagemController.savePorcentagem);
        app.post("/saveUsuario", UsuarioController.saveUsuario);
//app.get("/lancamento" , LancamentoController.listaCategoria);
  //  }
   
    
    //app.post("/salva", convertLancamentosController.saveLancamentodolar);// salva os dados
   
app.get("/", authenticationMiddleware, (req, res) => {
    console.log(__dirname + "/../html/index.html");
    res.sendFile(
        global.rootPath + "/views/html/index.html" // pq tu tá indo para o index
    );
});


app.get('*', (req, res)=>{
    res.sendFile(
        global.rootPath + "/views/html/404.html", 404
    );
});


const server =  app.listen(8080, function(){
    root_novo = 0;
    console.log("Running");
    console.log("Chaamou");
});

module.exports = server;
