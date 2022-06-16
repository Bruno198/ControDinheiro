
const Lancamentos = require("../models/Lancamentos");
const Categoria = require("../models/Categoria");
const Conversao = require("../models/Conversao");
const LancamentoController = require("../controllers/LancamentoController");

let data = new Date();
let dia, mes, ano;
let valo_converido;
let i, indice;
module.exports = {

  loadConverter(req, res) {

    //dia.forEach((indice) => {
      //dia[indice] = data.getDate();
      //indice++;
      //console.log(dia[indice])
    //});
    //for(let i =0; i< dia.length; i++)
    //{/
    //indice++;
    //dia[indice] = data.getDate();
    //}
    dia = data.getDate();
    mes = data.getMonth();
    ano = data.getFullYear();
    Conversao.findAll().then((dataConvert) => {
      res.render(__dirname + "/../views/ejs/converte", { listconvert: dataConvert, dia, mes, ano });

    })


  }
}

