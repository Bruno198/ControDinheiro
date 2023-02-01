const Categoria = require("../models/Categoria");
const Lancamentos = require("../models/lancamentos");
let root = 0 , armazenaRoot;

module.exports = {
     loadCategoria (req, res) {
          Categoria.findAll().then((data) => {// para fazer join includi e o nome dá tabela que eu quero fazer join
            if(res.render(__dirname+"/../views/ejs/categoria", {listCategoria : data ,Categoria:Categoria , root}))
              root = 1;

            console.log("LListouCategoria\n\n\n");
          });
          
    },
    async saveCategoria (req, res) { 
        await Categoria.create(req.body);
        //global.connection.collection("elementosHoje").insertOne();
         res.redirect("/home");
    },

   

}