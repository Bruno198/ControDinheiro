const Lancamentos = require("../models/Lancamentos");
const Categoria = require("../models/Categoria");
const Porcentagem = require("../models/Porcentagem");
const { setInternalBufferSize } = require("bson");
const User = require("../models/User");
const { root } = require("./UsuarioController");
const Conversao = require("../models/Conversao");

let salvaSaldo;
let soma  = 0;
let converter , flag = 0 , novoGanho , nao_convertido;
let conversaos_dolar = [];
let coveter_dolar , porcentagem , nomeUsuario , temp = 3 , msg_logar;
let id_lancamento;
let pega_porcentagem;
module.exports = {

    loadIndex (req, res) {
        Lancamentos.findAll().then((data) => {       
          Categoria.findAll().then((dataCategoria) => {
           
              console.log("foi\n\n\n");
                   msg_logar = "Faça Login Para Continuar Usando o Contro Dinheiro";
                
         
                    res.render(__dirname+"/../views/ejs/index", { listCategoria : dataCategoria, list : data , Lancamentos : Lancamentos  , soma ,categoriaList :data  , converter , flag , listconvert :data ,salvaSaldo , novoGanho , nao_convertido , coveter_dolar  , nomeUsuario , msg_logar , temp , id_lancamento});
                  //  await Lancamentos.create(req.body);
                  
                  // root = -1;
                
                 
                  
                  if(req.body.dolar === "on")
                 {
                   let valor_original;
                     valor_original = req.body.valor;
                     let enviaConversao;
                     enviaConversao = converter;
                     res.render(__dirname+"/../views/ejs/converte", {enviaConversao , valor_original});
                 }
                
                  });
    
         });
    },
    async saveLancamento (req, res) { 
      
        //res.render(__dirname+"/../views/ejs/index", {seusaldo : soma}); verificar se assim consigo motrar a mensagem dá soma
        await Lancamentos.create(req.body);
        console.log("SalvouLancamentos\n\n\n");
      

       ///   for(let i =0; i < listCategoria.length; i++)
          //{
            //req.body.select_novo = req.body.Categoria;
          //}
       if(req.body.ganho === "on")
        novoGanho = " +Ganho";
        else if(req.body.ganho !== "on")
        novoGanho = "Gasto";

        salvaSaldo = req.body.valor;
        soma = req.body.valor;
        let soma2 = 0;
       
        console.log("Salvou Saldo "+ salvaSaldo+"\n\n\n");
        //for(let i = 0; i < list.length; i++)
        //{
          //if(req.body.ganho === "on")
          //(soma) = soma +  parseInt(salvaSaldo) ;
         // else if(req.body.ganho !== "on")
          //soma = soma - parseInt(salvaSaldo) ;
        //}

       
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
       //nao_convertido = "";
          let pegaValor;
       // insere na tabela conversão com um insert automatico
       pegaValor =  req.body.valor_original = req.body.valor; // para poder pegar dados de outras tabelas tem que inserir fazer o insert Conversao.create(req.body);

       console.log("Valor dá Conversão" + pegaValor);
       req.body.valor_convertido = converter;
        Conversao.create(req.body);

        
       
        }
        else if(req.body.dolar !== "on")
        {
          //nao_convertido = 0;
          coveter_dolar = "";
          nao_convertido = "Nenhuma Conversão selecionada"; 
          console.log(nao_convertido);
          converter = 0;
        }

        if(req.body.porcentagem  > 0)
        {
          req.body.porcentagem_do_db = req.body.porcentagem;
          req.body.valor_do_lancamento = req.body.valor;
          pega_porcentagem = req.body.porcentagem / 100;
          req.body.porcentagem_calculada = pega_porcentagem * req.body.valor;
          Porcentagem.create(req.body);
        }
       //else if(req.body.nao_porcentagem)
       //pega_porcentagem = "Nenhuma Porcentagem";
        
       
        // let insert = "insert into conversaos (valor_original , valor_convertido , data_da_conversao) values(enviaConversao , valor_original)";
         
        // quando eu fizer o one to many para o lancamentos eu consigo usar o nome do model.o atributo do bancco
        // e eu posso criar um atributo saldo no banco para armazenar a soma e ai usar o atributo
     //  console.log(soma +"\n");
        //global.connection.collection("elementosHoje").insertOne();

        //nomeUsuario = req.body.username;

       // console.log("Nome do Usuario"+nomeUsuario);

         res.redirect("/");

    },

   
}