const { Strategy } = require('passport-local');
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const UsuarioServicio = require('./../../../services/usuario.service');


const usuarioServicio = new UsuarioServicio();

const LocalStrategy = new Strategy(
    {
    usernameField: 'username', // como va en el body del enpoint /auth/login
    passwordField: 'password' // como va en el body del enpoint /auth/login
    },
    async (username, password, done) => {
        try {
            const usuario = await usuarioServicio.findByUsername(username);
            console.log('usuario: ',usuario)
            if(!usuario){
                done(boom.unauthorized(), false);
            }
            
            const isMatch = await bcrypt.compare(password, usuario.password);
            if(!isMatch){
                done(boom.unauthorized(), false);
            }

            delete usuario.dataValues.password;

            done(null, usuario);

        } catch (error) {
            done(error, false);
        }
    }
);


module.exports = LocalStrategy;