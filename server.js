const express = require("express");
const app = express();

const puppeteer = require("puppeteer");

const session = require('express-session');
const passport = require('passport');
require('./auth')(passport);

const bodyParse = require("body-parser");
const db = require("./db");

const { response } = require("express");

const path = require('path');


const ControllIndex = require("./controllers/ControllIndex");
const UsuarioController = require("./controllers/UsuarioController");
const HomeController = require("./controllers/HomeController");
const LimiteController = require("./controllers/LimiteController");
const ConverterLancamentoController = require("./controllers/ConverterLancamentoController");
const PorcentagemController = require("./controllers/PorcentagemController");
const CategoriaController = require("./controllers/CategoriaController");
const LancamentoController = require("./controllers/LancamentoController");
const { Cookie } = require("express-session");
const RelatoriosController = require("./controllers/RelatoriosController");
const { loadPDF } = require("./controllers/RelatoriosController");


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

//app.use('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(express.static('public'))
//app.use('views', path.join(__dirname, 'public'));

authenticationMiddleware = (req, res, next) => {
    if (req.isAuthenticated()) return next();
    res.redirect('/login');
}

expiroulogin = (req, res, next , maxAge , cookie, session) => {
    if(session.maxAge == 8 ||session.cookie == 8)
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
app.get("/home"  ,expiroulogin, authenticationMiddleware,HomeController.loadhome);
app.get("/categoria", expiroulogin, authenticationMiddleware,CategoriaController.loadCategoria);
app.get("/lancamento", expiroulogin,authenticationMiddleware,LimiteController.loadLimit);
app.get("/limite",expiroulogin,authenticationMiddleware, LimiteController.loadLimit);
app.get("/converte", expiroulogin,authenticationMiddleware,ConverterLancamentoController.loadConverter);
app.get("/porcentagem", expiroulogin,authenticationMiddleware,PorcentagemController.loadPorcentagem);
app.get("/lancamento/:id", expiroulogin,authenticationMiddleware,HomeController.editarLancamento);
app.get("/gastosganhos", RelatoriosController.loadRelatorios);
//app.get("/pdf" , loadPDF);
app.get("/relatoriConversao", RelatoriosController.loadRelatorioConversaos);

app.post("/saveUsuario" , UsuarioController.saveUsuario);
app.post("/salva", expiroulogin,authenticationMiddleware,HomeController.saveLancamento);
app.post("/salvaCategoria", expiroulogin,authenticationMiddleware,CategoriaController.saveCategoria);
app.post("/salvaLimite", expiroulogin,authenticationMiddleware,LimiteController.saveLimite);



app.get("/", authenticationMiddleware, (req, res) => {
    console.log(__dirname + "/../html/index.html");
    res.sendFile(
        global.rootPath + "/views/html/index.html" // pq tu tá indo para o index
    );
});

/*
app.get('*', (req, res) => {
    res.sendFile(
        global.rootPath + "/views/html/404.html", 404
    );
});
*/
app.get("/pdf" ,async (req , res) =>{
    const brouser = await puppeteer.launch();
    const pagina = await brouser.newPage();

    await pagina.goto("http://localhost:8080/gastosganhos" , {
        waitUntil: 'networkidle0' 
    });

    const pdf = await pagina.pdf({

        printBackground:true ,
        format:"letter" ,
        margin:{
            top:"20px" ,
            bottom:"30px" ,
            left:"20px" ,
            right: "20px"
        }

    });

    
    await brouser.close();
  res.contentType("application/pdf");// com esse comando rederiza o pdf
  // sem faz dawload

    return res.send(pdf);
});

app.get("/relatorio" ,async (req , res) =>{
    const brouser = await puppeteer.launch();
    const pagina = await brouser.newPage();

    await pagina.goto("http://localhost:8080/relatoriConversao" , {
        waitUntil: 'networkidle0' 
    });

    const pdf = await pagina.pdf({

        printBackground:true ,
        format:"letter" ,
        margin:{
            top:"20px" ,
            bottom:"30px" ,
            left:"20px" ,
            right: "20px"
        }

    });

    
    await brouser.close();
  res.contentType("application/pdf");// com esse comando rederiza o pdf
  // sem faz dawload

    return res.send(pdf);
});

const server = app.listen(8080, function () {
    console.log("Running");
    console.log("Chaamou");
});

module.exports = server;
