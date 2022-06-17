const Limite = require("../models/Limite");
const Lancamentos = require("../models/Lancamentos");
const Porcentagem = require("../models/Porcentagem");

let armazena_porcentagem;
let utrapassou_limite;
let valor_lancamento;
module.exports = {
    loadPorcentagem (req, res) {
      Porcentagem.findAll().then((data) => {// para fazer join includi e o nome dá tabela que eu quero fazer join
        
       //req.body.porcentagem_calculada =  req.body.Porcentagem * req.body.valor;
        
          res.render(__dirname+"/../views/ejs/porcentagem", {listporcentagem : data});
          //console.log("LListouCategoria\n\n\n");
      });
      
}
}