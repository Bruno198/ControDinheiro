const Limite = require("../models/Limite");
const Lancamentos = require("../models/Lancamentos");
const Porcentagem = require("../models/Porcentagem");

let armazena_porcentagem;
let utrapassou_limite;
let valor_lancamento;
module.exports = {
    async savePorcentagem (req, res) { 
        await Porcentagem.create(req.body);
        //global.connection.collection("elementosHoje").insertOne();
        armazena_porcentagem = req.body.Porcentagem;
      //  utrapassou_limite = req.body.limite;
        valor_lancamento = req.body.valor;

        console.log("Salvou Porcentagem "+ armazena_porcentagem+"\n\n\n");
      //  console.log("Salvou Limite "+ utrapassou_limite+"\n\n\n");
        
         res.redirect("/");
    },

    loadLimit (req, res) {
      Lancamentos.findAll().then((data) => {// para fazer join includi e o nome dá tabela que eu quero fazer join
        
        req.body.Porcentagem * req.body.valor;
        
          res.render(__dirname+"/../views/ejs/lancamentos", {armazena_limite , listLancamento:data , utrapassou_limite , valor_lancamento});
          //console.log("LListouCategoria\n\n\n");
       
      
        
      
       
      });
      
}
}