module.exports = (sequelize, type) => {
    return sequelize.define('Comentario', {
        idComentario: {
            type: type.UUID,
            primaryKey: true,
        },
        idMecanico: {
            type: type.UUID
        },
        comentario: type.STRING(100)
    },
        {
            freezeTableName: true,
        });
}