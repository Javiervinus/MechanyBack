module.exports = (sequelize, type) => {
    return sequelize.define('Articulo', {
        idArticulo: {
            type: type.UUID,
            primaryKey: true,
        },
        idTienda: type.UUID,
        articulo: {
            type: type.STRING,
            unique: true
        },
        marca: type.STRING,
        descripcion: type.STRING,
        costo: type.FLOAT,
        cantidad: type.INTEGER,
        idCategoria: type.UUID,
        calificacion: type.FLOAT

    },
        {
            freezeTableName: true,
        });

}