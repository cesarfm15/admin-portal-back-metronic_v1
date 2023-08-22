const boom = require('@hapi/boom');
const { config } =require('./../config/config')

/* function checkApiKey(req, res, next){
    const apiKey = req.headers['api'];

    if(apiKey === config.apiKey){
        next();
    }else{
        next(boom.unauthorized());
    }
} */

function checkAdminRole(req, res, next){
    console.log('checkAdminRole: ',req.user);
    const usuario = req.user;
    if(usuario.rolId === 1){
        next();
    }else{
        next(boom.forbidden(`se requieren permisos de administrador`));
    }
}  

function checkRoles(...roles){
    return (req, res, next) => {
        const usuario = req.user;
        // console.log('...roles: ', ...roles);
        // console.log('usuario: ', typeof(usuario.rol));
        if(roles.includes(usuario.rol)){
            next();
        }else{
            next(boom.unauthorized());
        }
    }
}

module.exports = { 
        // checkApiKey, 
        checkAdminRole, 
        checkRoles 
};