const express = require("express");
const app = express();

const bodyParse = require("body-parser");
const db = require("./db");

const IndexController = require("./controllers/IndexController");
const LancamentoController = require("./controllers/LancamentoController");
const CategoriaController = require("./controllers/CategoriaController");
const LimiteController = require("./controllers/LimiteController");


app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended: false}));

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get("/" , IndexController.loadIndex);// chamando lancamentos
app.get("/categoria" , CategoriaController.loadCategoria);
app.get("/lancamento" , LancamentoController.loadLancamento);
app.get("/" , LimiteController.saveLimite);

app.post("/salva", IndexController.saveLancamento);// salva os dados
app.post("/salvaCategoria", CategoriaController.saveCategoria);
app.post("/salvaLimite", LimiteController.saveLimite);

app.listen(8080, function(){
    console.log("Running");
    console.log("Chaamou");
});

