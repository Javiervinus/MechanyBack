var { Articulo, Promocion } = require('../db');
var { uuid } = require("uuidv4");

exports.obtenerTodos = async (req, res) => {
  try {
    const promociones = await Promocion.findAll();
    return res.json(promociones);
  } catch (err) {
    console.log(err)
    res.status(400).send("Error al obtener promociones")
  }
};

exports.crear = async (req, res) => {
  try {
    req.body.idPromocion = uuid();
    const Prom = await Promocion.create(req.body);
    return res.json(Prom);
  } catch (err) {
    console.log(err)
    res.status(400).send("Error al crear promocion")
  }

};
exports.buscarPorId= async (req, res)=>{

    try {
        let idArticulo= req.params.idArticulo;
        const Prom = await Promocion.findAll({ where: { idArticulo } });
        return res.json(Prom);
      } catch (err) {
        console.log(err)
        res.status(400).send("Error al buscar promocionxIdArticulo")
      }

};