module.exports = (sequelize, type) => {
    return sequelize.define('Mecanico', {
        idMecanico: {
            type: type.UUID,
            primaryKey: true,
        },
        idPersona: {
            type: type.UUID
        },
        calificacion: {
            type: type.INTEGER,

        }
    },
        {
            freezeTableName: true,
        });
}