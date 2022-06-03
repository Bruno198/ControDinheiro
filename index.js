const express = require("express");
const app = express();

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


app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended: false}));

app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get("/" , IndexController.loadIndex);// chamando lancamentos
app.get("/converte" , convertLancamentosController.loadConverter);
app.get("/categoria" , CategoriaController.loadCategoria);
app.get("/lancamento" , LimiteController.loadLimit);
app.get("/limite" , LimiteController.loadLimit);
app.get("/lancamento" , LancamentoController.listaCategoria);

app.post("/salva", IndexController.saveLancamento);// salva os dados
app.post("/salvaCategoria", CategoriaController.saveCategoria);
app.post("/salvaLimite", LimiteController.saveLimite);
//app.post("/salva", convertLancamentosController.saveLancamentodolar);// salva os dados

const server =  app.listen(8080, function(){
    console.log("Running");
    console.log("Chaamou");
});

module.exports = server;
