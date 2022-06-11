const Lancamentos = require("../models/Lancamentos");
const Limite = require("../models/Limite");
const User = require("../models/User");

let armazena_limite;
module.exports = {
   async saveLancamento (req, res) { 
      let soma = "";
      if(req.body.ganho === "on")
      req.body.ganho = "Ganho";
      else if(req.body.ganho !== "on")
      req.body.gasto = "Gasto";
    
      else if(req.body.ganho === "on")
      soma = soma + req.body.valor;

      else if(req.body.gasto === "on")
      soma = soma - req.body.valor;
      console.log(soma +"\n");
    //  req.body.data_lancamento
    
    armazena_limite = req.body.limite; // pode ser tenha q ser antes do criar
    console.log("Salvou Limite no ControlerLancamentos "+ armazena_limite+"\n\n\n");
   
       await Lancamentos.create(req.body);
       console.log("Salvou Lancamento "+"\n\n\n");
       await Limite.create(req.body);
      
      
      
       console.log("SalvouLancamentos\n\n\n");
       console.log("Salvou Limite "+ armazena_limite+"\n\n\n");
       format24Hou(req.body.data_lancamento);
      // aqui é só para salvar os lancamentos
   //salvar faz insert e o load (listar) faz o select
      
        res.redirect("/");
   },
   listaCategoria (req, res) {
      id_categoria.findAll().then((data) => {       
   console.log("foilistada\n\n\n");
   //            console.log(soma);
         res.render(__dirname+"/../views/ejs/lancamentos", {listLancamento : data});
       //  await Lancamentos.create(req.body);
      })
   }
   
 
}
