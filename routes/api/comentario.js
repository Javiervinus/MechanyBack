const router=require ('express').Router();
var comentarioController = require('../../controllers/comentarioController');
const comentario = require('../../models/comentario');
router.get('/', comentarioController.obtenerTodos);
router.post('/', comentarioController.crear);
router.get('/:idMecanico',comentarioController.buscarPorId);
module.exports=router;