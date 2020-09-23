var { Usuario, Persona } = require('../db');
var { uuid } = require("uuidv4");

exports.obtenerTodos = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll({
      include: [
        {
          model: Persona,
          as: "PersonaUsuario",
          attributes: ["nombres", "apellidos"]
        }
      ]

    });
    return res.json(usuarios);
  } catch (err) {
    console.log(err)
    res.status(400).send("Error al obtener usuarios")
  }
};

exports.registrar = async (req, res) => {
  try {
    req.body.idPersona = uuid();
    req.body.PersonaUsuario.idUsuario = uuid();
    req.body.PersonaUsuario.idPersona = req.body.id;
    const User = await Persona.create(req.body, {
      include: [
        {
          model: Usuario,
          as: "PersonaUsuario"
        }
      ]
    });

    return res.json(User);
  } catch (err) {
    console.log(err)
    res.status(400).send("Error al crear usuario")
  }

};

exports.signIn = async (req, res) => {
  try {
    let { usuario, password } = req.body;
    const user = await Usuario.findOne({ where: { usuario } });
    if (user && password==user.password) {
      return res.json(user);
    } else {
      res.status(401).send("Credenciales incorrectas")
    }
  }
  catch (err) {
    console.log(err)
    res.status(400).send("Error al iniciar sesion")
  }
};


