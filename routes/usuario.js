const express = require('express');
const passport = require('passport');

const UsuarioServicio = require('../services/usuario.service');
const validatorHandler = require('../middlewares/validator.handler');
const { checkAdminRole,
        checkRoles } = require('../middlewares/auth.handler');
const { obtUsuarioSchema,
        crearUsuarioSchema,
        actUsurioSchema } = require('../schemas/usuario.schema');

const router = express.Router();
const usuarioServicio = new UsuarioServicio();

router.get('/',
    async(req, res, next)=>{
        try {
            const usuarios = await usuarioServicio.find();
            res.status(200).json(usuarios);
        } catch (error) {
            next(error);
        }       
    }
);

router.get('/:id',
    validatorHandler(obtUsuarioSchema, 'params'),
    async(req, res, next)=>{
        try {
            const { id } = req.params;
            const usuarios = await usuarioServicio.findOne(id);
            res.status(200).json(usuarios);
        } catch (error) {
            next(error);
        }       
    }
);

router.post('/',
    passport.authenticate('jwt', { session: false }),
    // checkAdminRole,
    checkRoles(3,6,7),
    validatorHandler(crearUsuarioSchema, 'body'),
    async(req, res, next)=>{
        try {
            const body = req.body;
            console.log(body);
            const nuevoUsuario = await usuarioServicio.create(body);
            res.status(201).json(nuevoUsuario);
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
            const usuario = await usuarioServicio.update(id,body);
            res.status(200).json(usuario);
        } catch (error) {
            next(error);
        }
    }
)

router.delete('/:id',
    async(req, res, next)=>{
        try {
            const { id } = req.params;
            await usuarioServicio.delete(id);
            res.status(200).json({ id });
        } catch (error) {
            next(error);
        }
    }
)


module.exports = router;