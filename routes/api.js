const router = require('express').Router();
//router persona
const personaRouter = require('./api/persona');
router.use('/persona', personaRouter);
//router usuario
const usuarioRouter = require('./api/usuario');
router.use('/usuario', usuarioRouter);
//router mecanico
const mecanicoRouter = require('./api/mecanico');
router.use('/mecanico', mecanicoRouter);
module.exports = router;