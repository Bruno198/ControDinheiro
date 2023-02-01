const express = require("express");
const app = express();

const session = require('express-session');
const passport = require('passport');
require('./auth')(passport);

const bodyParse = require("body-parser");
const db = require("./db");

const path = require("path");

const ControllIndex = require("./controllers/ControllIndex");
const UsuarioController = require("./controllers/UsuarioController");
const HomeController = require("./controllers/HomeController");
const LimiteController = require("./controllers/LimiteController");
const ConverterLancamentoController = require("./controllers/ConverterLancamentoController");
const PorcentagemController = require("./controllers/PorcentagemController");
const CategoriaController = require("./controllers/CategoriaController");
const LancamentoController = require("./controllers/LancamentoController");



global.rootPath = __dirname;

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: false }));

app.use(session({
    secret: 'nosso-segredo',
    cookie: { maxAge: 9 * 60 * 1000 },
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
authenticationMiddleware = (req, res, next) => {
    if (req.isAuthenticated()) return next();
    res.redirect('/login');
}

app.post("/login", passport.authenticate('local', {
    successRedirect: '/home',
    failureRedirect: '/login?fail=true'
}));
app.get("/logout", (req, res) => {
    req.logOut((err) => { console.log(err); });
    res.redirect('/');
});

app.get("/", ControllIndex.Inicio);
app.get("/login" , UsuarioController.loadLogin);
app.get("/login" , UsuarioController.loadLogin);
app.get("/home" ,authenticationMiddleware , HomeController.loadhome);
app.get("/home" , authenticationMiddleware,UsuarioController.loadUsuario);
app.get("/categoria", authenticationMiddleware,CategoriaController.loadCategoria);
app.get("/lancamento", authenticationMiddleware,LimiteController.loadLimit);
app.get("/limite",authenticationMiddleware, LimiteController.loadLimit);
app.get("/converte", authenticationMiddleware,ConverterLancamentoController.loadConverter);
app.get("/porcentagem", authenticationMiddleware,PorcentagemController.loadPorcentagem);
app.get("/lancamento/:id", authenticationMiddleware,HomeController.editarLancamento);

app.post("/saveUsuario" , UsuarioController.saveUsuario);
app.post("/salva", authenticationMiddleware,HomeController.saveLancamento);
app.post("/salvaCategoria", authenticationMiddleware,CategoriaController.saveCategoria);
app.post("/salvaLimite", authenticationMiddleware,LimiteController.saveLimite);



app.get("/", authenticationMiddleware, (req, res) => {
    console.log(__dirname + "/../html/index.html");
    res.sendFile(
        global.rootPath + "/views/html/index.html" // pq tu tá indo para o index
    );
});


app.get('*', (req, res) => {
    res.sendFile(
        global.rootPath + "/views/html/404.html", 404
    );
});


const server = app.listen(8080, function () {
    console.log("Running");
    console.log("Chaamou");
});

module.exports = server;
