const bcrypt = require('bcryptjs');
const User = require("./models/User");
const LocalStrategy = require('passport-local').Strategy

module.exports = function(passport){ 
 
    
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });
 
    passport.deserializeUser((id, done) => {
        try {
            User.findByPk(id).then((user) => {
                done(null, user);
            });
            
        } catch (err) {
            done(err, null);
        }
    });

    passport.use(new LocalStrategy(
    //campos que vem do form de login
    {
        usernameField: 'username',
        passwordField: 'password'
    },
    (username, password, done) => {
        try {
            console.log(password);
            return User.findOne({where: {
                username: username
             }}).then((user) => {
                if (!user) { return done(null, false) }
    
                const isValid = bcrypt.compareSync(password, user.password);
                if (!isValid) return done(null, false)
                
                return done(null, user)
             });
            
        } catch (err) {
            done(err, false);
        }
    }));
}