const bcrypt = require('bcrypt');
const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize');

class PersonaServicio {
    constructor(){}

    async create(data){

        const { numDoc } = data;
        const resultado = await models.Persona.findOne({
            where: {
                numDoc: numDoc
            }
        })
        if(resultado){
            throw boom.conflict(`[persona.service]: persona con documento n° ${numDoc} existe`);
            // throw boom.notFound(`[persona.service]: ${id} not found`);
        }


        const nuevaPersona = await models.Persona.create(data);
        return nuevaPersona;
    }

    async find(){
        // const rta = await models.Persona.findAll({
        //     include: ['usuario']
        // });

        const rta = await models.Persona.findAll({
            include: [
                {   //join con Usuario
                    model: models.Usuario,
                    as: 'usuario',
                    required: true
                }
            ]
        });
        return rta;
    }

    async findOne(id){
        // const persona = await models.Persona.findByPk(id);
        const persona = await models.Persona.findOne({
            where: { peId: id },
            include: ['usuario']
        });
        if(!persona){
            throw boom.notFound(`[persona.service]: ${id} not found`);
        }
        return persona;
    }




}

module.exports = PersonaServicio;