const router=require ('express').Router();
var promocionController = require('../../controllers/promocionController');
router.get('/', promocionController.obtenerTodos);
router.post('/', promocionController.crear);
router.get('/:idTienda',promocionController.buscarPorId);
module.exports=router;