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
//router comentarios
const comentarioRouter = require('./api/comentario');
router.use('/comentario', comentarioRouter);
//router tienda
const tiendaRouter = require('./api/tienda');
router.use('/tienda', tiendaRouter);
//router articulo
const articuloRouter = require('./api/articulo');
router.use('/articulo', articuloRouter);
//router comentariosArticulo
const comentarioARouter = require('./api/comentarioA');
router.use('/comentarioA', comentarioARouter);
//router Promocion
const promocionRouter = require('./api/promocion');
router.use('/promocion', promocionRouter);
