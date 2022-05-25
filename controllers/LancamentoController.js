const Lancamentos = require("../models/Lancamentos");

module.exports = {
   async saveLancamento (req, res) { 
      if(req.body.ganho === "on")
      req.body.ganho = "Ganho";
      else if(req.body.ganho !== "on")
      req.body.gasto = "Gasto";

      req.body.data_lancamento

       await Lancamentos.create(req.body);
       console.log("SalvouLancamentos\n\n\n");
     
       //global.connection.collection("elementosHoje").insertOne();
        res.redirect("/");
   },
   loadLancamento (req, res) {
      Lancamentos.findAll().then((data) => {// para fazer join includi e o nome dá tabela que eu quero fazer join
        res.render(__dirname+"/../views/ejs/lancamentos", {listLancamento : data});
        console.log("LListouLancamento\n\n\n");
      });
      
   }
}
