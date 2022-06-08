
const Lancamentos = require("../models/Lancamentos");
const Categoria = require("../models/Categoria");
const Conversao = require("../models/Conversao");
const LancamentoController = require("../controllers/LancamentoController");


let valor_original = [] ,enviaConversao = [];
let nenhuma_conversao;

module.exports = {

   loadConverter (req, res) { 
  
      
           
     
           res.render(__dirname+"/../views/ejs/converte", { listConverter: dataConverter ,  nenhuma_conversao  });
          
     
           
      }
   } 
         
   