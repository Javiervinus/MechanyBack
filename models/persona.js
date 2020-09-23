
module.exports = (sequelize, type) => {
    return sequelize.define('Persona', {
        idPersona: {
            type: type.UUID,
            primaryKey: true,
        },
        nombres: type.STRING,
        apellidos: type.STRING,
        telefono: type.STRING,
        correo: type.STRING,
        direccion: type.STRING
    }, {
        freezeTableName: true, 
    });
}