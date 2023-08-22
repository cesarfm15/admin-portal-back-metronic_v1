const express = require('express');
const PersonaServicio = require('../services/persona.service');
const validatorHandler = require('../middlewares/validator.handler');
const { obtPersonaSchema,
        crearPersonaSchema,
        actPersonaSchema } = require('../schemas/persona.schema');

const router = express.Router();
const personaServicio = new PersonaServicio();

router.get('/',
    async(req, res, next)=>{
        try{
            const personas = await personaServicio.find();
            res.status(200).json(personas);
        }catch(error){
            next(error);
        }    
    }    
)

router.get('/:id',
    validatorHandler(obtPersonaSchema, 'params'),
    async(req, res, next)=>{
        try{
            const { id } = req.params;
            const personas = await personaServicio.findOne(id);
            res.status(200).json(personas);
        }catch(error){
            next(error);
        }    
    }    
)

router.post('/',
    validatorHandler(crearPersonaSchema, 'body'),
    async(req, res, next)=>{
        try {
            const body = req.body
            const nuevaPersona = await personaServicio.create(body);
            res.status(201).json(nuevaPersona);
        } catch (error) {
            next(error)
        }        
    }
)


module.exports = router;