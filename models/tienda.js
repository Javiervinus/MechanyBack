
module.exports= (sequelize,type)=>{
    return sequelize.define('Tienda',{
        idTienda:{
            type: type.UUID,
            primaryKey: true
        },
        nombre: type.STRING,
        direccion: type.STRING,
        coordenadax: type.FLOAT,
        coordenaday: type.FLOAT,
        telefono:   type.STRING(11)
    },
        {
            freezeTableName: true,
        });

}