const mongoClient = require("mongodb").MongoClient;

const uri = "mongodb+srv://admin:h2=a2+b2@cluster0.9twgo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const client = mongoClient.connect(uri, {useUnifiedTopology: true }, (error, connection) => {
    if (error) {
        console.log("falha na conexão");
        return;
    }
    global.connection = connection.db("aula");
    console.log("conectou!");
});


const Sequelize = require("sequelize");
const configDb = require("./config/relationalDb");
const Categoria = require("./models/Categoria");
const Lancamentos = require("./models/Lancamentos");
//const Lancamentos = require("./models/Lancamentos");
const  Limite = require("./models/Limite");

const connection = new Sequelize(configDb);


Categoria.init(connection);
Lancamentos.init(connection);
Limite.init(connection);


module.exports = {}; 