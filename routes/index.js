const express = require('express');

const usuarioRouter = require('./usuario');
const rolRouter = require('./rol');
const personaRouter = require('./persona');
const authRouter = require('./auth');
const dashboardRouter = require('./dashboard');


function routerApi(app){
    const router = express.Router();
    app.use('/api/v1', router);
    
    router.use('/usuarios', usuarioRouter);
    router.use('/roles', rolRouter);
    router.use('/personas', personaRouter);
    router.use('/auth', authRouter);
    router.use('/', dashboardRouter);
}

module.exports = routerApi;