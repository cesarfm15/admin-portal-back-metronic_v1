const Joi = require('joi');

const id = Joi.number().integer();
const tipoDocIdent = Joi.number().integer();
const numDoc = Joi.string().min(8).max(15);
const apePat = Joi.string().min(2).max(20);
const apeMat = Joi.string().min(2).max(20);
const nomPri = Joi.string().min(2).max(20);
const nomSeg = Joi.string().min(2).max(20);
const nomTer = Joi.string().min(2).max(20);
const correoUno = Joi.string().email();


const obtPersonaSchema = Joi.object({
    peId: id.required()
})

const crearPersonaSchema = Joi.object({
    tidId: tipoDocIdent.required(),
    numDoc: numDoc.required(),
    apePat: apePat.required(),
    apeMat: apeMat.required(),
    nomPri: nomPri.required(),
    nomSeg: nomSeg.required(),
    nomTer: nomTer,
    correoUno: correoUno.required()
});

const actPersonaSchema = Joi.object({
    tidId: tipoDocIdent.required(),
    numDoc: numDoc,
    apePat: apePat,
    apeMat: apeMat,
    nomPri: nomPri,
    nomSeg: nomSeg,
    nomTer: nomTer,
    correoUno: correoUno
})

module.exports = {
    obtPersonaSchema,
    crearPersonaSchema,
    actPersonaSchema
}