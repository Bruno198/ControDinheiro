
const Limite = require("../models/Limite");
const Lancamentos = require("../models/lancamentos");
const Categoria = require("../models/Categoria");
const User = require('../models/User');

let armazena_limite;
let utrapassou_limite;
let valor_lancamento;
let nomouser;
module.exports = {
    async saveLimite (req, res) { 
        await Limite.create(req.body);
        //global.connection.collection("elementosHoje").insertOne();
        armazena_limite = req.body.limite;
      //  utrapassou_limite = req.body.limite;
        valor_lancamento = req.body.valor;

        console.log("Salvou Limite "+ armazena_limite+"\n\n\n");
        console.log("Salvou Limite "+ utrapassou_limite+"\n\n\n");
        
         res.redirect("/home");
    },
    loadLimit (req, res) {
        Lancamentos.findAll().then((data) => {// para fazer join includi e o nome dá tabela que eu quero fazer join
          Categoria.findAll().then((dataCategoria) => {
            nomouser = req.user.username;
            res.render(__dirname+"/../views/ejs/lancamento", {nomouser,listCategoria: dataCategoria , armazena_limite , listLancamento:data , utrapassou_limite , valor_lancamento});
            //console.log("LListouCategoria\n\n\n");
           
         armazena_limite = "";
          if(req.body.limite === "");
          armazena_limite = "Nenhum Cadastro de Limite Informado";
          if(armazena_limite === "undefined ")
          armazena_limite = "Nenhum Cadastro de Limite Informado";
           // if(req.body.gasto === "on" && req.body.valor > utrapassou_limite)
            utrapassou_limite = "Voçe utrapassou o Limite Informe um valor Menor";
          
          });
         
        });
        
  }
}