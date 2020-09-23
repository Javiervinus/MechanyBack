const Sequelize = require('sequelize');

const sequelize = new Sequelize('MechanyDB', 'root', 'admin', {
  host: '104.198.150.244',
  dialect: 'mysql'
});
//Persona
const PersonaModel = require('./models/persona');
const Persona = PersonaModel(sequelize, Sequelize);
//Usuario
const UsuarioModel = require('./models/usuario');
const Usuario = UsuarioModel(sequelize, Sequelize);
//Mecanico
const MecanicoModel = require('./models/mecanico');
const Mecanico = MecanicoModel(sequelize, Sequelize);
//Comentarios
const ComentarioModel= require('./models/comentario');
const Comentario= ComentarioModel(sequelize,Sequelize);
//Tienda
const TiendaModel= require('./models/tienda');
const Tienda= TiendaModel(sequelize,Sequelize);
//Articulo
const ArticuloModel= require("./models/articulo");
const Articulo= ArticuloModel(sequelize,Sequelize);
//Promocion
const PromocionModel= require("./models/promocion");
const Promocion= PromocionModel(sequelize,Sequelize);


//relaciones
Persona.hasOne(Usuario, {
  as: "PersonaUsuario",
  foreignKey: "idPersona"
});
Usuario.belongsTo(Persona, {
  as: "PersonaUsuario",
  foreignKey: "idPersona"
});
Persona.hasOne(Mecanico, {
  as: "PersonaMecanico",
  foreignKey: "idPersona"
});
Mecanico.belongsTo(Persona, {
  as: "PersonaMecanico",
  foreignKey: "idPersona"
});
Mecanico.hasMany(Comentario,{
  as: 'MecanicoComentario',
  foreignKey:'idMecanico'
});
Comentario.belongsTo(Mecanico,{
  as: 'MecanicoComentario',
  foreignKey:'idMecanico'
});
Tienda.hasMany(Articulo,{
  as: 'TiendaArticulo',
  foreignKey:'idTienda'
});
Articulo.belongsTo(Tienda,{
  as: 'TiendaArticulo',
  foreignKey:'idTienda'
});
Tienda.hasMany(Promocion,{
  as: 'TiendaPromocion',
  foreignKey:'idTienda'
});
Promocion.belongsTo(Tienda,{
  as: 'TiendaPromocion',
  foreignKey:'idTienda'
});

//Sincronizacion
sequelize.sync({ alter: false }).then(() => {
  console.log('tablas sincronizadas');
})


module.exports = {
  Persona,
  Usuario,
  Mecanico,
  Comentario,
  Tienda,
  Articulo,
  Promocion
}
console.log("All models were synchronized successfully.");
