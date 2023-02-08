const Lancamentos = require("../models/lancamentos");
const pdf = require("html-pdf");
const express = require("express");
const app = express();
const puppeteer = require("puppeteer");
const ejs = require("ejs");
const { response } = require("express");
const path = require('path');
const Conversao = require("../models/Conversao");

let datarelatorio = new Date();
let dia, mes, ano;

module.exports = {


    loadRelatorios(req, res) {
        // CRIANDO PDFS

        /*  const op = {
              height: "11.25in" ,
              width: "8.5in" ,
              Header:{
                  height:"20mm"
              } ,
              footer:{
                  height: "20mm"
              }
          } 
          pdf.create(list , op).toFile("report.pdf" , (err ) =>{
              if(err)
              res.send("Erro em criar o relatorio Tente Depois");
          })
         
          //return res.send("Arquivo Gerado Com Sucesso");
          */

        const op = {
            height: "11.25in",
            width: "8.5in",
            Header: {
                height: "20mm"
            },
            footer: {
                height: "20mm"
            }
        }




        Lancamentos.findAll().then((data) => {
            ejs.renderFile("/../views/ejs/gastosganhos.ejs"
                , { data }, (err, html) => {
                    if (err) {
                        console.log("Deu um erro");

                    }
                    else {
                        pdf.create(html, op, {}).toFile("./meupdflindao.pdf", (err, data) => {
                            if (err)
                                res.render("Erro em criar o relatorio Tente Depois");
                            else {
                                console.log(data);
                                // return res.render(data);
                            }

                        });
                    }
                });


            dia = datarelatorio.getDate();
            mes = datarelatorio.getMonth() + 1;
            ano = datarelatorio.getFullYear();

            res.render(__dirname + "/../views/ejs/gastosganhos", { list: data, dia, mes, ano });
           
        });

    },

    loadRelatorioConversaos(req , res){
        Conversao.findAll().then((data) => {
            dia = datarelatorio.getDate();
            mes = datarelatorio.getMonth() + 1;
            ano = datarelatorio.getFullYear();
            
            res.render(__dirname + "/../views/ejs/relatoriConversao", { listconvert: data, dia, mes, ano });
        });
    }

}