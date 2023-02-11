
const Lancamentos = require("../models/lancamentos");
const Categoria = require("../models/Categoria");
const Conversao = require("../models/Conversao");

let data = new Date();
let dia, mes, ano;
let valo_converido;
let i, indice;
let valor_a_converter, moeda_para_conversao, pega_porcentagem;
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


  },

  salvaConversaos(req, res) {
    valor_a_converter = req.body.valor_a_converter_do_input;
    moeda_para_conversao = req.body.moeda_para_conversao_do_input;
    console.log("Valor do Input" + valor_a_converter);
    console.log("Moeda do Input" + moeda_para_conversao)

    let pega_valor;
    let variavel_valor_convertido, variavel_valor_original;

    pega_valor = valor_a_converter * moeda_para_conversao;

    variavel_valor_convertido = req.Conversao.valor_convertido = pega_valor;
    variavel_valor_original = req.Conversao.valor_original = valor_a_converter;


    res.redirect("/home");
  }
}

