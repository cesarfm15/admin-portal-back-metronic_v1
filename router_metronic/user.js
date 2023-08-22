const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    bootstrap.init();
    bootstrap.initAuthLayout()
    next()
})

router.get('/aea', (req, res) => {
    theme.addJavascriptFile("js/custom/authentication/sign-in/general.js");
    res.render(theme.getPageViewPath("auth","sign-in"), { currentLayout: theme.getLayoutPath("auth") });
 });

module.exports = router;