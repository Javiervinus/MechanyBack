const router=require ('express').Router();
var tiendaController = require('../../controllers/tiendaController');
router.get('/', tiendaController.obtenerTodos);
router.post('/', tiendaController.registrar);
module.exports=router;