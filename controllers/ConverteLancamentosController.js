
const Lancamentos = require("../models/Lancamentos");
const Categoria = require("../models/Categoria");
const Conversao = require("../models/Conversao");
const LancamentoController = require("../controllers/LancamentoController");

let data = new Date();
let dia , mes , ano;
let valo_converido;

module.exports = {

   loadConverter (req, res) { 
      dia = data.getDate();
      mes = data.getMonth();
      ano = data.getFullYear();
       req.body.valo_converido = req.body.valor;
        Conversao.findAll().then((dataConvert) => {
          res.render(__dirname+"/../views/ejs/converte", { listconvert : dataConvert , dia , mes , ano});
        
        })
   
           
      }
   } 
         
   