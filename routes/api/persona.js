const router=require ('express').Router();
var personaController = require('../../controllers/personaController');
router.get('/', personaController.obtenerTodos);
router.post('/', personaController.registrar);
router.put('/:idPersona', personaController.actualizar);
router.delete('/:idPersona', personaController.borrar);
module.exports=router;