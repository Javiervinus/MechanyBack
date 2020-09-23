var { Mecanico, Comentario } = require('../db');
var { uuid } = require("uuidv4");

exports.obtenerTodos = async (req, res) => {
  try {
    const comentarios = await Comentario.findAll();
    return res.json(comentarios);
  } catch (err) {
    console.log(err)
    res.status(400).send("Error al obtener comentarios")
  }
};

exports.crear = async (req, res) => {
  try {
    req.body.idComentario = uuid();
    const Comen = await Comentario.create(req.body);

    return res.json(Comen);
  } catch (err) {
    console.log(err)
    res.status(400).send("Error al crear comentario")
  }

};
exports.buscarPorId= async (req, res)=>{

    try {
        let idMecanico= req.params.idMecanico;
        const Comen = await Comentario.findAll({ where: { idMecanico } });
        return res.json(Comen);
      } catch (err) {
        console.log(err)
        res.status(400).send("Error al buscar comentario")
      }

};