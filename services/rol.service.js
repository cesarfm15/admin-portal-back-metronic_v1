const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize');

class RolServicio {
    constructor(){}

    async create(data){
        const nuevoRol = await models.Rol.create(data);
        return nuevoRol;
    }

    async find(){
        const rta = await models.Rol.findAll()
        return rta;
    }

    async findOne(id){
        const rol = await models.Rol.findByPk(id);
        if(!rol){
            throw boom.notFound(`[rol.service]: ${id} not found`);
        }
        return rol;
    }

    async update(id, changes){
        const rol = await this.findOne(id);
        const rolUpdated = await rol.update(changes);
        return rolUpdated;
    }

    async delete(id){
        const rol = await this.findOne(id);
        await rol.destroy();
        return { id };
    }
}


module.exports = RolServicio;