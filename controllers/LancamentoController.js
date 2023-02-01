const Lancamentos = require("../models/lancamentos");
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
let data = new Date();
let dia, mes, ano;
module.exports = {

  loadLancamentos(req, res) {
        res.render(__dirname + "/../views/ejs/lancamento", {});


  } , 
  async save(req, res) {

    await Lancamentos.create(req.body);
    console.log("SalvouLancamentos\n\n\n");
  }
} 

  