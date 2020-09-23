module.exports = (sequelize, type) => {
    return sequelize.define('Usuario', {
        idUsuario: {
            type: type.UUID,
            primaryKey: true,
        },
        idPersona: {
            type: type.UUID
        },
        usuario: {
            type: type.STRING,
            unique: true

        },
        password: type.STRING

    },
        {
            freezeTableName: true,
        });

}