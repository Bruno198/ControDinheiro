
const User = require("../models/User");
const bcrypt = require('bcryptjs');


module.exports = {
    
    async saveUsuario (req, res) { 
        req.body.password = bcrypt.hashSync(req.body.password); 
        await User.create(req.body);
        //global.connection.collection("elementosHoje").insertOne();
        res.redirect("/login");
    } ,

    loadLogin (req, res){
        if (req.query.fail)
              res.render("ejs/login", {message : 'Senha ou Login Errado!'});
         else
              res.render("ejs/login", {message : null});
   }
}