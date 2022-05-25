const Categoria = require("../models/Categoria");
const Lancamentos = require("../models/Lancamentos");

module.exports = {
     loadCategoria (req, res) {
          Categoria.findAll().then((data) => {// para fazer join includi e o nome dá tabela que eu quero fazer join
            res.render(__dirname+"/../views/ejs/categoria", {listCategoria : data});
            console.log("LListouCategoria\n\n\n");
          });
          
    },
    async saveCategoria (req, res) { 
        await Categoria.create(req.body);
        //global.connection.collection("elementosHoje").insertOne();
         res.redirect("/");
    }
}