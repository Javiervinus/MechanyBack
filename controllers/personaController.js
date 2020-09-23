var { Persona } = require('../db');
exports.obtenerTodos = async (req, res) => {
    try {
        const personas = await Persona.findAll();
        return res.json(personas);
    } catch (err) {
        console.log(err)
        res.status(400).send("Error al obtener personas")
    }
};
exports.registrar = async (req,res)=>{
    try{
        const persona= await Persona.create(req.body);
        return res.json(persona);
    } catch (err){
        console.log(err)
        res.status(400).send("Error al crear persona")
    }
    
};
exports.actualizar = async (req,res)=>{
    try{
        await Persona.update(req.body,{
            where: {idPersona: req.params.idPersona}
        });
        return res.json(req.body);
    } catch (err){
        console.log(err)
        res.status(400).send("Error al actualizar persona")
    }
    
};
exports.borrar = async (req,res)=>{
    try{
        await Persona.destroy({
            where: {idPersona: req.params.idPersona}
        });
        return res.json({mensaje:'Persona borrada'});
    } catch (err){
        console.log(err)
        res.status(400).send("Error al borrar persona")
    }
    
};