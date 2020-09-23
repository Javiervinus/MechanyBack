const router=require ('express').Router();
var promocionController = require('../../controllers/promocionController');
router.get('/', promocionController.obtenerTodos);
router.post('/', promocionController.crear);
router.get('/:idArticulo',promocionController.buscarPorId);
module.exports=router;