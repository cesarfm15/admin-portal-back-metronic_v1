const  Joi = require('joi');

const id = Joi.number().integer();
const rolId = Joi.number().integer();
const username = Joi.string().min(4).max(50);
const password = Joi.string().min(6).max(10);
const perId = Joi.number().integer();

const tipoDocIdent = Joi.number().integer();
const numDoc = Joi.string().min(8).max(15);
const apePat = Joi.string().min(2).max(20);
const apeMat = Joi.string().min(2).max(20);
const nomPri = Joi.string().min(2).max(20);
const nomSeg = Joi.string().min(2).max(20);
const nomTer = Joi.string().min(2).max(20);
const correoUno = Joi.string().email();

const obtUsuarioSchema = Joi.object({
    peId: id.required()
});

const crearUsuarioSchema = Joi.object({
    rolId: rolId.required(),
    username: username.required(),
    password: password.required(),
    persona: Joi.object({
        tidId: tipoDocIdent.required(),
        numDoc: numDoc.required(),
        apePat: apePat.required(),
        apeMat: apeMat.required(),
        nomPri: nomPri.required(),
        nomSeg: nomSeg.required(),
        nomTer: nomTer,
        correoUno: correoUno.required()
    })
});

const actUsurioSchema = Joi.object({
    password: password,
});

module.exports = {
    obtUsuarioSchema,
    crearUsuarioSchema,
    actUsurioSchema
}