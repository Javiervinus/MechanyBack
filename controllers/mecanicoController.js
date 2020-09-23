var { Mecanico } = require('../db');
var { Persona } = require('../db');
var { uuid } = require("uuidv4");
exports.obtenerTodos = async (req, res) => {
    try {
      const mecanicos = await Mecanico.findAll({
        include: [
          {
            model: Persona,
            as: "PersonaMecanico",
            attributes: ["nombres", "apellidos","direccion"]
          }
        ]
  
      });
      return res.json(mecanicos);
    } catch (err) {
      console.log(err)
      res.status(400).send("Error al obtener mecanico")
    }
  };
  exports.registrar = async (req, res) => {
    try {
      req.body.idPersona = uuid();
      req.body.PersonaMecanico.idMecanico = uuid();
      req.body.PersonaMecanico.idPersona = req.body.id;
      const Mecan = await Persona.create(req.body, {
        include: [
          {
            model: Mecanico,
            as: "PersonaMecanico"
          }
        ]
      });
  
      return res.json(Mecan);
    } catch (err) {
      console.log(err)
      res.status(400).send("Error al crear mecanico")
    }
  
  };