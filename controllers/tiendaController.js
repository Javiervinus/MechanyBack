var { Tienda } = require('../db');
var { uuid } = require("uuidv4");
exports.obtenerTodos = async (req, res) => {
    try {
        const tiendas = await Tienda.findAll();
        return res.json(tiendas);
    } catch (err) {
        console.log(err)
        res.status(400).send("Error al obtener tiendas")
    }
};
exports.registrar = async (req,res)=>{
    try{
        req.body.idTienda=uuid();
        const tienda= await Tienda.create(req.body);
        return res.json(tienda);
    } catch (err){
        console.log(err)
        res.status(400).send("Error al crear tienda")
    }
    
};