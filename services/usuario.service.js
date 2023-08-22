const bcrypt = require('bcrypt');
const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize');

class UsuarioServicio {
    constructor(){}

    async create(data){
        const { persona } = data
        const personaExiste = await models.Persona.findOne({
            where: {
                numDoc: persona.numDoc
            }
        });

        if(personaExiste){
            throw boom.conflict(`[usuario.service]: persona con documento n° ${persona.numDoc} existe`);
        }
        
        const hash = await bcrypt.hash(data.password,10)
        const newData = {
            ...data,
            password: hash
        }
        //*crear usuario y persona a la vez x asociacion
        const nuevoUsuario = await models.Usuario.create(newData, {
            include: ['persona']
        })
        delete nuevoUsuario.password;
        return nuevoUsuario;

        //*crear usuario unicamente
        // const nuevoUsuario = await models.Usuario.create({
        //     ...data,
        //     password: hash
        // });
    }

    async find(){
        const rta = await models.Usuario.findAll({
            include: ['persona'] 
        });
        return rta;
    }

    async findOne(id){
        const usuario = await models.Usuario.findByPk(id);
        if(!usuario){
            throw boom.notFound(`[usuario.service]: ${id}` )
        }
        return usuario;
    }

    async findByUsername(username){
        const usernameFound = await models.Usuario.findOne({
            where: {
                username: username
            }
        });
        return usernameFound;
    }

    async update(id, changes){
        const usuario = await this.findOne(id);
        const usuarioUpdated = await usuario.update(changes);
        return usuarioUpdated;
    }

    async delete(id){
        const rol = await this.findOne(id);
        await rol.destroy();
        return { id };
    }



}

module.exports = UsuarioServicio;