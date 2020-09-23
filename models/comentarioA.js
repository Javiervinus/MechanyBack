module.exports = (sequelize, type) => {
    return sequelize.define('ComentarioA', {
        idComentario: {
            type: type.UUID,
            primaryKey: true,
        },
        idArticulo: {
            type: type.UUID
        },
        comentario: type.STRING(100)
    },
        {
            freezeTableName: true,
        });
}