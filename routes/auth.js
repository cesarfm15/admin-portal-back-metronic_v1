const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const { config } = require('../config/config');

const router = express.Router();

router.use((req, res, next) => {
  bootstrap.init();
  bootstrap.initAuthLayout()
  next()
})

router.get('/sign-in',
  async (req, res) => {    
  theme.addJavascriptFile("js/custom/authentication/sign-in/general.js");
  res.render(theme.getPageViewPath("auth","sign-in"), { currentLayout: theme.getLayoutPath("auth") });
});

// router.get('/sign-up', (req, res) => {
//   theme.addJavascriptFile("js/custom/authentication/sign-up/general.js");
//   res.render(theme.getPageViewPath("auth", "sign-up"), { currentLayout: theme.getLayoutPath("auth") });
// });

router.post('/login',
  passport.authenticate('local', {session: false}),  
  async (req, res, next) => {
    try {
        // console.log('req: ',req);
        const usuario = req.user;
        const payload = {
            sub: usuario.usId,
            rol: usuario.rolId
        }
        const token = jwt.sign(payload,config.jwtSecret);
        
        res.json({
            usuario,
            token
        });
    } catch (error) {
        next(error);
    }
  }
);









module.exports = router;