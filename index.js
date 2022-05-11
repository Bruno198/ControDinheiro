const express = require("express");
const app = express();

const bodyParse = require("body-parser");
const db = require("./db");


app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended: false}));

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get("/", (req, res)=>{/// talvez seja em get nessee get app.get("/",
   loadData(res);//res.sendFile(__dirname+"/views/html/index.html");
    
});
app.get("/lancamento", (req, res)=>{/// talvez seja em get nessee get app.get("/",
    loadDatadois(res);
    
});
app.get("/categoria", (req, res)=>{/// talvez seja em get nessee get app.get("/",
    loadDataCategoria(res);//res.sendFile(__dirname+"/views/html/index.html");
     
 });
 app.get("/limite_lancamento", (req, res)=>{/// talvez seja em get nessee get app.get("/",
    loadDataLimite(res);//res.sendFile(__dirname+"/views/html/index.html");
     
 });
 app.get("/pesquisa", (req, res)=>{/// talvez seja em get nessee get app.get("/",
    loadPesquisa(res);//res.sendFile(__dirname+"/views/html/index.html");
     
 });

app.post("/salva", (req, res)=>{ // aqui ele o insert em lancamento
    global.connection.collection("lancamentos").insertOne(req.body);
   // res.sendFile(__dirname+"/views/html/index.html"); 
  
   
    res.redirect("/");
});

app.post("/salvaCategoria", (req, res)=>{ // aqui ele o insert em lancamento
    global.connection.collection("categoria").insertOne(req.body);
   // res.sendFile(__dirname+"/views/html/index.html"); 
    res.redirect("/");
});
app.post("/salvaLimite", (req, res)=>{ // aqui ele o insert em lancamento
     global.connection.collection("limite").insertOne(req.body);
     let vetor_limite = [];
     if(global.connection.collection("limite").countDocuments(req.body) > 1)
     {
       
       // if(listLimite.forEach(element => {
         //   vetor_limite[i] = element.limite;
           // //vetor_limite.push(element); // talvez usar isso
        //}))
        global.connection.collection("limite").deleteOne(req.body);/// n está deletando a colection do banco
     }
   //  var limite_insert = element.limite;
    // res.redirect("/");
    // se o usuario inserir outro limit eu deto o anterior e insiro um novo
    
   // res.sendFile(__dirname+"/views/html/index.html"); 
   //$('.modal_limite').modal('hide'); 
    
});
app.post("/salvaPesquisa", (req, res)=>{ // aqui ele o insert em lancamento
    global.connection.collection("pesquisa").insertOne(req.body);
   // res.sendFile(__dirname+"/views/html/index.html"); 
    res.redirect("/");
});

app.listen(8080, function(){// aqui é aonde aperece no shell do git
    console.log("Running");
    console.log("chamando");
    //console.log(limite_insert);
});


var loadData = (response) => {
    let list = [];
    let listLancamento = [];
    let listLimite = [];
   list = listLancamento;
     global.connection.collection("lancamentos").find({}).toArray((err, docs) => {
        if (err) {
            console.log("Deu merda!");
            return;
        }
        console.log(docs);

    
           
        docs.forEach(element => {
            listLancamento.push(element); 
            listLimite.push(element); 
        //    list.push(element);
            //estava até duplicando
        });
        response.render(__dirname+"/views/ejs/index", { list : listLancamento } ); // se eu quise que uma variavel apareça na pagina que eu to mexendo tenho que enviar ela como o maior , maior//, function(Remove)}  );
        // para chamar uma outra funcão fazer como tava no compra só coloco funcao()
    });

}

var loadDatadois = (response) => {
    let listLancamento = [];
    let listCategoria = [];
    let listLimite = [];
     global.connection.collection("categoria").find({}).toArray((err, docs) => {
        if (err) {
            console.log("Deu merda!");
            return;
        }
        console.log(docs);

        docs.forEach(element => {
            listLancamento.push(element);  
            listCategoria.push(element); 
            listLimite.push(element); // n é nessesario é só mudar o nome dá coletion de tu vai pesquisar
        });
        response.render(__dirname+"/views/ejs/lancamento", { listLancamento : listCategoria }); // listCategoria tmb n é nessesario
        // para chamar uma outra funcão fazer como tava no compra só coloco funcao()
    });

}

var loadDataCategoria = (response) => {
    let listCategoria = [];
     global.connection.collection("categoria").find({}).toArray((err, docs) => {
        if (err) {
            console.log("Deu merda!");
            return;
        }
        console.log(docs);

        docs.forEach(element => {
            listCategoria.push(element);  
        });
        response.render(__dirname+"/views/ejs/categoria", { listCategoria});
        // para chamar uma outra funcão fazer como tava no compra só coloco funcao()
    });

}

var loadDataLimite = (response) => {
    let listLimite = [];
    let listLancamento = [];
     global.connection.collection("limite").find({}).toArray((err, docs) => {
        if (err) {
            console.log("Deu merda!");
            return;
        }
        console.log(docs);

        docs.forEach(element => {
            //listCategoria.push(element);  
            listLimite.push(element);
            listLancamento.push(element);  
        });
        response.render(__dirname+"/views/ejs/limite_lancamento", { listLimite : listLancamento});
        // para chamar uma outra funcão fazer como tava no compra só coloco funcao()
    });

}
var loadDataLimite = (response) => {
    let listLimite = [];
    let listLancamento = [];
     global.connection.collection("limite").find({}).toArray((err, docs) => {
        if (err) {
            console.log("Deu merda!");
            return;
        }
        console.log(docs);

        docs.forEach(element => {
            //listCategoria.push(element);  
            listLimite.push(element);
            listLancamento.push(element);  
        });
        response.render(__dirname+"/views/ejs/limite_lancamento", { listLimite : listLancamento});
        // para chamar uma outra funcão fazer como tava no compra só coloco funcao()
    });

}

var loadPesquisa = (response) => {
    let listPesquisa = [];
   
     global.connection.collection("lancamentos").find({}).toArray((err, docs) => {
        if (err) {
            console.log("Deu merda!");
            return;
        }
        console.log(docs);

      //  for(let i = 0; i < list.length; i++){
          //  maior = list[i];
        //}
           
        docs.forEach(element => {
            listLancamento.push(element); 
            listPesquisa.push(element); 
        //    list.push(element);
            //estava até duplicando
        });
        response.render(__dirname+"/views/ejs/pesquisa", { listPesquisa : list } );
    
        // se eu quise que uma variavel apareça na pagina que eu to mexendo tenho que enviar ela como o maior , maior//, function(Remove)}  );
        // para chamar uma outra funcão fazer como tava no compra só coloco funcao()
    });

}

