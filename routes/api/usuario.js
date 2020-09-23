const router=require ('express').Router();
var usuarioController = require('../../controllers/usuarioController');
router.get('/', usuarioController.obtenerTodos);
router.post('/', usuarioController.registrar);
router.post('/signin', usuarioController.signIn);
module.exports=router;