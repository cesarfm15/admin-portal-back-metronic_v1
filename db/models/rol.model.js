const { Model, DataTypes, Sequelize } = require('sequelize');


const ROL_TABLE = 'av_rol_portal';

const RolSchema = {
    roId:{
        field: 'rol_id',
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT(10)
    },
    nombre:{
        field: 'rol_nombre',
        allowNull: false,
        type: DataTypes.STRING(50)
    },
    slug:{
        field: 'rol_slug',
        allowNull: false,
        type: DataTypes.STRING(50)
    },
    descripcion:{
        field: 'rol_desc',
        allowNull: false,
        type: DataTypes.STRING(150)
    },
    createdAt:{
        field: 'rol_fec_reg',
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    }

}

class Rol extends Model {
    static associate(models){
        this.hasMany(models.Usuario, {
            as: 'usuario',
            foreignKey: 'rolId'
        });
    }

    static config(sequelize){
        return {
            sequelize,
            tableName: ROL_TABLE,
            modelName: 'Rol',
            timestamps: false
        }
    }
}

module.exports = { Rol, RolSchema, ROL_TABLE };