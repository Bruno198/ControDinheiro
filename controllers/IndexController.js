
const Lancamentos = require("../models/Lancamentos");

module.exports = {
    loadIndex (req, res) {
        Lancamentos.findAll().then((data) => {
            console.log("foi\n\n\n");
           res.render(__dirname+"/../views/ejs/index", {list : data});
         //  await Lancamentos.create(req.body);
         });
    },
    async saveLancamento (req, res) { 
        await Lancamentos.create(req.body);
        console.log("SalvouLancamentos\n\n\n");
        //global.connection.collection("elementosHoje").insertOne();
         res.redirect("/");
    }
         
   
}