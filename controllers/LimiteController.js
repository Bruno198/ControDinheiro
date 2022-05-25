
const Limite = require("../models/Limite");

module.exports = {
    async saveLimite (req, res) { 
        await Limite.create(req.body);
        //global.connection.collection("elementosHoje").insertOne();
        console.log("Salvou Limite\n\n\n");
         res.redirect("/");
    },
    loadLimit (req, res) {
        Limite.findAll().then((data) => {// para fazer join includi e o nome dá tabela que eu quero fazer join
          res.render(__dirname+"/../views/ejs/index", {listCategoria : data});
          //console.log("LListouCategoria\n\n\n");
        });
        
  }
}