const fs = require("fs");
const {parse} = require("querystring");

const express = require("express");
const app = express();

const db = require("./db");

var url = require('url');
var path = require('path');
const { brotliDecompress } = require("zlib");

var loadData = (response) => {
    let list = [];
     global.connection.collection("elementos").find({}).toArray((err, docs) => {
        if (err) {
            console.log("Deu merda!");
            return;
        }
        console.log(docs);

        docs.forEach(element => {
            list.push(element);  
        });
        response.end(readFile("index.html").replace("@$list@", list.length)
        .replace("{$linhas}", createListElements(list)));
    });
}

var createListElements = (list) => {
    let listaGerada = ' ';

    let layout = `<tr>
        <td>{$nome}</td>
        <td>{$sobrenome}</td>
    </tr>`;
    list.forEach(element => {
            listaGerada+= layout.replace("{$nome}", element.fname).replace("{$sobrenome}", element.lname);    
        });

   
    return listaGerada;
}

var list = [];


var readFile = (file) => {
    let html = fs.readFileSync(__dirname + "/views/html/"+ file, "utf8");
    return html;
};

var collectData = (rq, cal) => {
    var data = '';
   
    rq.on('data', (chunk) => {
        data += chunk;
    });
    rq.on ('end', () => {
        let new_element = parse(data);
                
        global.connection.collection("elementos").insertOne(new_element);
        cal(parse(data));
    });
}

module.exports = (request, response) => {
    if (request.method === 'GET') {
        
        let url_parsed = url.parse(request.url, true);
        switch (url_parsed.pathname) {
            case '/':
                response.writeHead(200, {'Content-Type': 'text/html'});
                loadData(response);
                
                break;
            case '/element':
                response.writeHead(200, {'Content-Type': 'text/plain'});
                response.end("Elemento: " +url_parsed.query.id + " acessado!");

                break;
            case '/pessoa':
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.end(readFile("index.html").replace("@$list@", list.length)
                .replace("{$linhas}", createListElements(db.findElements())));
                break;
            default:
                break;
        }
      } else if (request.method === 'POST') {

        switch (request.url.trim()) {
            case '/action':
                collectData(request, (data) => {
                    response.writeHead(200, {'Content-Type': 'text/plain'});
                    console.log(data.fname);
                    response.end("Elemento: " +data.fname + " cadastrado!");
                });    
                break;
        
            default:
                response.writeHead(404, {'Content-Type': 'text/plain'});
                response.end('Not a post action!');
                break;
        }
      }
};