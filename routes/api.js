const router = require('express').Router();
//router persona
const personaRouter = require('./api/persona');
router.use('/persona', personaRouter);
//router usuario
const usuarioRouter = require('./api/usuario');
router.use('/usuario', usuarioRouter);
module.exports = router;