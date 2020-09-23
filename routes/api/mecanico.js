const router=require ('express').Router();
var mecanicoController = require('../../controllers/mecanicoController');
router.get('/', mecanicoController.obtenerTodos);
router.post('/', mecanicoController.registrar);
module.exports=router;