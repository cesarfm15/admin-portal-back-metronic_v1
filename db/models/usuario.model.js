const { Model, DataTypes, Sequelize } = require('sequelize');

const {PERSONA_TABLE } = require('./persona.model');
const {ROL_TABLE } = require('./rol.model');
const USUARIO_TABLE = 'av_usuario_portal';

const UsuarioSchema = {
    usId:{
        field: 'usu_id',
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT(10)
    },
    perId: {
      field: 'av_per_id',
      allowNull: true,
      type: DataTypes.BIGINT(10),
      unique: true,
      references: {
        model: PERSONA_TABLE,
        key: 'av_per_id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },
    rolId: {
      field: 'rol_id',
      allowNull: true,
      type: DataTypes.BIGINT(10),
      references: {
        model: ROL_TABLE,
        key: 'rol_id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    },
    username:{
        field: 'usu_username',
        allowNull: false,
        unique: true,
        type: DataTypes.STRING(50)
    },
    password:{
        field: 'usu_password',
        allowNull: false,
        type: DataTypes.STRING(150)
    },
    createdAt:{
        field: 'usu_fec_reg',
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    },
    estado:{
        field: 'usu_estado',
        allowNull: false,
        type: DataTypes.CHAR(1),
        defaultValue: '1'
    }
}

class Usuario extends Model {
  static associate(models){
    this.belongsTo(models.Persona, { as: 'persona', foreignKey: 'perId'})

    // this.hasOne(models.Persona, { as: 'persona', foreignKey: 'peId'})
    // this.belongsTo(models.Rol, { as: 'rol' });
  }
  static config(sequelize){
    return {
      sequelize,
      tableName: USUARIO_TABLE,
      modelName: 'Usuario',
      timestamps: false
    }
  }
}

module.exports = { Usuario, UsuarioSchema, USUARIO_TABLE }
