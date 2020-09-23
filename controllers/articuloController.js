var { Articulo,Tienda } = require('../db');
var { uuid } = require("uuidv4");

exports.obtenerTodos = async (req, res) => {
    try {
      const articulos = await Articulo.findAll({
        include: [
          {
            model: Tienda,
            as: "TiendaArticulo",
            attributes: ["direccion"]
          }
        ]
  
      });
      return res.json(articulos);
    } catch (err) {
      console.log(err)
      res.status(400).send("Error al obtener articulos")
    }
  };
  
  exports.crear = async (req, res) => {
    try {
      req.body.idArticulo = uuid();
      const arti = await Articulo.create(req.body);
      return res.json(arti);
    } catch (err) {
      console.log(err)
      res.status(400).send("Error al crear articulo")
    }
  
  };
  exports.buscarPorId= async (req, res)=>{

    try {
        let idArticulo= req.params.idArticulo;
        const arti = await Articulo.findOne({ where: { idArticulo } });
        return res.json(arti);
      } catch (err) {
        console.log(err)
        res.status(400).send("Error al buscar articulo")
      }

};
exports.stock= async (req, res)=>{

    try {
        let idTienda= req.params.idTienda;
        const arti = await Articulo.findAll({ where: { idTienda } });
        return res.json(arti);
      } catch (err) {
        console.log(err)
        res.status(400).send("Error al buscar stock en tienda")
      }

};