const express = require('express');
const RolServicio = require('../services/rol.service')

const router = express.Router();
const rolServicio = new RolServicio();


router.get('/',
    async(req, res, next)=>{
        try {
            const roles = await rolServicio.find();
            res.json(roles);
        } catch (error) {
            next(error);
        }        
    }
);

router.get('/:id',
    async(req, res, next)=>{
        try {
            const { id } = req.params;
            const roles = await rolServicio.findOne(id);
            res.json(roles);
        } catch (error) {
            next(error);
        }        
    }
);

router.post('/',
    async(req, res, next)=>{
        try {
            const body = req.body;
            const nuevoRol = await rolServicio.create(body);
            res.status(201).json(nuevoRol);
        } catch (error) {
            next(error);
        }
    }
)

router.patch('/:id',
    async(req, res, next)=>{
        try {
            const { id } = req.params;
            const body = req.body;
            const rol = await rolServicio.update(id,body);
            res.status(200).json(rol);
        } catch (error) {
            next(error);
        }
    }
)

router.delete('/:id',
    async(req, res, next)=>{
        try {
            const { id } = req.params;
            await rolServicio.delete(id);
            res.status(200).json({ id });
        } catch (error) {
            next(error);
        }
    }
)


module.exports = router;