const Lancamentos = require("../models/Lancamentos");
const Categoria = require("../models/Categoria");
const Porcentagem = require("../models/Porcentagem");
const { setInternalBufferSize } = require("bson");
const User = require("../models/User");
const { root } = require("./UsuarioController");
const Conversao = require("../models/Conversao");
const moment = require('moment');


let salvaSaldo;
let soma = 0;
let converter, flag = 0, novoGanho, nao_convertido;
let conversaos_dolar = [];
let coveter_dolar, porcentagem, nomeUsuario, temp = 3, msg_logar;
let id_lancamento;
let pega_porcentagem;
let dataFomatada = [], data_do_db, mais, dataconvertida;
module.exports = {

  loadIndex(req, res) {

    Lancamentos.findAll().then((data) => {
      Categoria.findAll().then((dataCategoria) => {

        console.log("foi\n\n\n");
        msg_logar = "Faça Login Para Continuar Usando o Contro Dinheiro";

        res.render(__dirname + "/../views/ejs/index", { dataFomatada, listCategoria: dataCategoria, list: data, categoriaList: data, converter, listconvert: data, salvaSaldo, novoGanho, nao_convertido, coveter_dolar, nomeUsuario, msg_logar, temp, id_lancamento, data_do_db });



      });

    });
  },
  async saveLancamento(req, res) {

    //res.render(__dirname+"/../views/ejs/index", {seusaldo : soma}); verificar se assim consigo motrar a mensagem dá soma
    await Lancamentos.create(req.body);
    console.log("SalvouLancamentos\n\n\n");



    if (req.body.ganho === "on")
      novoGanho = " +Ganho";
    else if (req.body.ganho !== "on")
      novoGanho = "Gasto";

    salvaSaldo = req.body.valor;
    soma = req.body.valor;
    let soma2 = 0;

    console.log("Salvou Saldo " + salvaSaldo + "\n\n\n");

    console.log(soma);

    coveter_dolar = req.body.dolar;

    if (req.body.dolar === "on") {
      converter = req.body.valor * 5.;
      flag = 1;
      let valor_original;
      valor_original = req.body.valor;
      console.log("Valor" + converter);
      coveter_dolar = "on"
      let enviaConversao;
      enviaConversao = converter;
      let pegaValor;
      pegaValor = req.body.valor_original = req.body.valor;

      console.log("Valor dá Conversão" + pegaValor);
      req.body.valor_convertido = converter;

      Conversao.create(req.body);
    }
    else if (req.body.dolar !== "on") {
      //nao_convertido = 0;
      coveter_dolar = "";
      nao_convertido = "Nenhuma Conversão selecionada";
      console.log(nao_convertido);
      converter = 0;
    }

    if (req.body.porcentagem > 0) {
      req.body.porcentagem_do_db = req.body.porcentagem;
      req.body.valor_do_lancamento = req.body.valor;
      pega_porcentagem = req.body.porcentagem / 100;
      req.body.porcentagem_calculada = pega_porcentagem * req.body.valor;
      Porcentagem.create(req.body);
    }

    // {
    //dataFomatada = moment(req.body.data_lancamento).format("DD/MM/YYYY");
    // for (var i = 0; i < dataFomatada.length; i++)
    //{
    dataFomatada = moment(req.body.data_lancamento).format("DD/MM/YYYY");
    // res.body.data_lancamento = data_do_db;
    //  console.log("A data  é " +  dataFomatada[i]);
    //}


    res.redirect("/");

  },
}