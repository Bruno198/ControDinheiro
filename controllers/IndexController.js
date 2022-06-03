
const Lancamentos = require("../models/Lancamentos");
const Categoria = require("../models/Categoria");

let salvaSaldo;
let soma ;
let converter , flag = 0 , novoGanho , nao_convertido;
let conversaos_dolar = [];
let coveter_dolar;
module.exports = {

    loadIndex (req, res) {
        Lancamentos.findAll().then((data) => {       
     console.log("foi\n\n\n");
//            console.log(soma);
           res.render(__dirname+"/../views/ejs/index", {list : data , Lancamentos : Lancamentos  , soma ,categoriaList :data  , converter , flag , listconvert :data ,salvaSaldo , novoGanho , nao_convertido , coveter_dolar});
         //  await Lancamentos.create(req.body);
        
         
         if(req.body.dolar === "on")
        {
          let valor_original;
            valor_original = req.body.valor;
            let enviaConversao;
            enviaConversao = converter;
            res.render(__dirname+"/../views/ejs/converte", {enviaConversao , valor_original});
        }
       
         });
    },
    async saveLancamento (req, res) { 
      
        //res.render(__dirname+"/../views/ejs/index", {seusaldo : soma}); verificar se assim consigo motrar a mensagem dá soma
        await Lancamentos.create(req.body);
        console.log("SalvouLancamentos\n\n\n");
      
       if(req.body.ganho === "on")
        novoGanho = " +Ganho";
        else if(req.body.ganho !== "on")
        novoGanho = "Gasto";

        salvaSaldo = req.body.valor;
        soma = req.body.valor;
        let soma2 = 0;
       
        console.log("Salvou Saldo "+ salvaSaldo+"\n\n\n");
        
        if(req.body.ganho === "on")
          (soma) = soma +  parseInt(salvaSaldo) ;
           // talves tenha q converter soma para string
         console.log(soma);

         coveter_dolar = req.body.dolar;
    
         if(req.body.dolar === "on")
         {
          converter = req.body.valor * 5.;
          flag = 1;
          let valor_original;
          valor_original = req.body.valor;
          console.log( "Valor" +  converter);
          coveter_dolar = "on"
       let enviaConversao;
       enviaConversao = converter;
        }
        else if(req.body.dolar !== "on")
        {
          //nao_convertido = 0;
          coveter_dolar = "";
          nao_convertido = "Nenhuma Conversão selecionada"; 
          console.log(nao_convertido);
        }
        
       
        
       
         
         
        // quando eu fizer o one to many para o lancamentos eu consigo usar o nome do model.o atributo do bancco
        // e eu posso criar um atributo saldo no banco para armazenar a soma e ai usar o atributo
     //  console.log(soma +"\n");
        //global.connection.collection("elementosHoje").insertOne();
         res.redirect("/");
    },
   
  
      
         
   
}