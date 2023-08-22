const express = require('express');
// Imports
const themesettings = require("./_keenthemes/lib/themesettings.json");
/* const dashboardRouter = require("./router/dashboard")
const authRouter = require("./router/auth")
const userRouter = require("./router/user")
const systemRouter = require("./router/system") */
const createKtThemeInstance = require("./_keenthemes/lib/theme")
const createKtBootstrapInstance = require(`./views/layout/${themesettings.name}/bootstrap`)
const routerApi = require('./routes');
const { logErrors,
        errorHandler,
        boomErrorHandler, } = require('./middlewares/error.handler');
const expressLayouts = require('express-ejs-layouts');

global.themesettings = themesettings;

const app =  express();
const port = process.env.PORT;

const init = function (req, res, next) {
    global.theme = createKtThemeInstance();
    global.bootstrap = createKtBootstrapInstance();
    next()
}

app.use(express.json());
// Static Files
app.use(express.static('public'));
// Set Templating Engine
app.use(expressLayouts)
app.set('layout', 'layout/master')
app.set('view engine', 'ejs')
app.use(init);


//llama a /auth/index.js 
require('./utils/auth');

//TODO crear un miidleware que valide el jwt antes de ingresar a las demás ROUTES
//app.use(autenticacion);
routerApi(app); 

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, ()=> {
    console.log('PD port: ' + port);
})

