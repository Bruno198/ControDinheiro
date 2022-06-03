
const Lancamentos = require("../models/Lancamentos");
const Categoria = require("../models/Categoria");

let salvaSaldo;
let soma ;
module.exports = {

    loadConverter (req, res) {
        if(req.body.dolar === "on")
        {
          let valor_original;
            valor_original = req.body.valor;
            let enviaConversao;
            enviaConversao = converter;
            res.render(__dirname+"/../views/ejs/converte", {enviaConversao , valor_original});
        }
      }
         
   
}