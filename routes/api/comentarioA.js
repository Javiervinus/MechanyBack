const router=require ('express').Router();
var comentarioAController = require('../../controllers/comentarioAController');
const comentario = require('../../models/comentarioA');
router.get('/', comentarioAController.obtenerTodos);
router.post('/', comentarioAController.crear);
router.get('/:idArticulo',comentarioAController.buscarPorId);
module.exports=router;