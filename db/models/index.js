const { Usuario, UsuarioSchema } = require('./usuario.model');
const { Rol, RolSchema } = require('./rol.model');
const { Persona, PersonaSchema } = require('./persona.model');

function setupModels(sequelize){
    Rol.init(RolSchema, Rol.config(sequelize));
    Usuario.init(UsuarioSchema, Usuario.config(sequelize));
    Persona.init(PersonaSchema, Persona.config(sequelize));

    Usuario.associate(sequelize.models);
    Rol.associate(sequelize.models);
    Persona.associate(sequelize.models);
    
    

}


module.exports = setupModels;