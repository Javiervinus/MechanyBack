module.exports = (sequelize, type) => {
    return sequelize.define('Promocion', {
        idPromocion: {
            type: type.UUID,
            primaryKey: true,
        },
        idArticulo: type.UUID,
        promocion:  type.STRING,    
    },
        {
            freezeTableName: true,
        });

}