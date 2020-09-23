const router=require ('express').Router();
var articuloController = require('../../controllers/articuloController');
router.get('/', articuloController.obtenerTodos);
router.post('/', articuloController.crear);
router.get('/:idArticulo', articuloController.buscarPorId);

module.exports=router;