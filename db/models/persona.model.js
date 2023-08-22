const { Model, DataTypes, Sequelize } = require('sequelize');

const PERSONA_TABLE = 'av_persona_portal';

const PersonaSchema = {
    peId: {
        field: 'av_per_id',
        type: DataTypes.BIGINT(10),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    tidId: {
        field: 'av_tid_id',
        type: DataTypes.BIGINT(10),
        allowNull: false,
        defaultValue: 1
    },
    numDoc: {
        field: 'av_per_doc_num',
        type: DataTypes.STRING(50),
        allowNull: false
    },
    password: {
        field: 'av_per_password',
        type: DataTypes.STRING(45),
        allowNull: true
    },
    apePat: {
        field: 'av_per_apepat',
        type: DataTypes.STRING(50),
        allowNull: true
    },
    apeMat: {
        field: 'av_per_apemat',
        type: DataTypes.STRING(50),
        allowNull: true
    },
    nomPri: {
        field: 'av_per_nombre_pri',
        type: DataTypes.STRING(50),
        allowNull: true
    },
    nomSeg: {
        field: 'av_per_nombre_seg',
        type: DataTypes.STRING(50),
        allowNull: true
    },
    nomTer: {
        field: 'av_per_nombre_ter',
        type: DataTypes.STRING(50),
        allowNull: true
    },
    sexo: {
        field: 'av_per_sexo',
        type: DataTypes.CHAR(1),
        allowNull: true
    },
    fecNac: {
        field: 'av_per_fecha_nac',
        type: DataTypes.STRING(12),
        allowNull: true
    },
    fecNac2: {
        field: 'av_per_fecha_nac_2',
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    fecNac3: {
        field: 'av_per_fecha_nac_3',
        type: DataTypes.STRING(12),
        allowNull: true
    },
    correoInst: {
        field: 'av_per_correo_institucional',
        type: DataTypes.STRING(150),
        allowNull: true
    },
    correoUno: {
        field: 'av_per_correo1',
        type: DataTypes.STRING(50),
        allowNull: true
    },
    correoDos: {
        field: 'av_per_correo2',
        type: DataTypes.STRING(50),
        allowNull: true
    },
    paisDomicilio: {
        field: 'av_per_pais_domicilio',
        type: DataTypes.STRING(4),
        allowNull: true
    },
    ubigeoCod: {
        field: 'av_ubi_cod',
        type: DataTypes.STRING(6),
        allowNull: true
    },
    dirUno: {
        field: 'av_per_direccion1',
        type: DataTypes.STRING(100),
        allowNull: true
    },
    dirDos: {
        field: 'av_per_direccion2',
        type: DataTypes.STRING(100),
        allowNull: true
    },
    codigoPostal: {
        field: 'av_per_codigo_postal',
        type: DataTypes.STRING(10),
        allowNull: true
    },
    telfDom: {
        field: 'av_per_telf_dom',
        type: DataTypes.STRING(12),
        allowNull: true
    },
    telfCel: {
        field: 'av_per_telf_cel',
        type: DataTypes.STRING(12),
        allowNull: true
    },
    telfTra: {
        field: 'av_per_telf_trab',
        type: DataTypes.STRING(12),
        allowNull: true
    },
    estado: {
        field: 'av_per_estado',
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 1
    },
    estadoLab: {
        field: 'av_per_estado_laboral',
        type: DataTypes.STRING(10),
        allowNull: true
    },
    estadoCiv: {
        field: 'av_per_estado_civil',
        type: DataTypes.STRING(10),
        allowNull: true
    },
    origenPais: {
        field: 'av_per_origen_pais',
        type: DataTypes.STRING(45),
        allowNull: true
    },
    origenIdi: {
        field: 'av_per_origen_idioma',
        type: DataTypes.STRING(45),
        allowNull: true
    },
    origenCol: {
        field: 'av_per_origen_colegio',
        type: DataTypes.STRING(100),
        allowNull: true
    },
    createdAt: {
        field: 'sys_reg_fecha',
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: Sequelize.NOW
    },
    createdBy: {
        field: 'sys_reg_usuario',
        type: DataTypes.STRING(45),
        allowNull: true
    },
    fecPost: {
        field: 'fecha_postulacion',
        type: DataTypes.STRING(20),
        allowNull: true
    },
    perOrigen: {
        field: 'av_per_origin',
        type: DataTypes.STRING(50),
        allowNull: true
    },
    perPatDos: {
        field: 'av_per_apepat2',
        type: DataTypes.STRING(50),
        allowNull: true
    },
    perMatDos: {
        field: 'av_per_apemat2',
        type: DataTypes.STRING(50),
        allowNull: true
    },
    nomPriDos: {
        field: 'av_per_nombre_pri2',
        type: DataTypes.STRING(50),
        allowNull: true
    },
    nomSegDos: {
        field: 'av_per_nombre_seg2',
        type: DataTypes.STRING(50),
        allowNull: true
    },
    sesion: {
        field: 'sesion',
        type: DataTypes.STRING(10),
        allowNull: true
    },
    valPer: {
        field: 'val_persona',
        type: DataTypes.CHAR(2),
        allowNull: true
    },
    valEst: {
        field: 'val_estudiante',
        type: DataTypes.CHAR(2),
        allowNull: true
    },
    imgPerf: {
        field: 'av_per_img_perfil',
        type: DataTypes.STRING(500),
        allowNull: true
    }
}

class Persona extends Model {
    static associate(models){
        // this.belongsTo(models.Usuario, { as:'usuario'});
        this.hasOne(models.Usuario, {
            as: 'usuario',
            foreignKey: 'perId'
        })
    }
    static config(sequelize){
        return {
            sequelize,
            tableName: PERSONA_TABLE,
            modelName: 'Persona',
            hasTrigger: true,
            timestamps: false,
            indexes: [
                // {
                //     name: "PRIMARY",
                //     unique: true,
                //     using: "BTREE",
                //     fields: [
                //     { name: "av_per_id" },
                //     ]
                // },
                {
                    name: "fk_T_persona_T_ubigeo1",
                    using: "BTREE",
                    fields: [
                    { name: "av_ubi_cod" },
                    ]
                },
                {
                    name: "fk_T_persona_T_tipo_documento1",
                    using: "BTREE",
                    fields: [
                    { name: "av_tid_id" },
                    ]
                },
                {
                    name: "av_per_doc_num",
                    using: "BTREE",
                    fields: [
                    { name: "av_per_doc_num" },
                    ]
                },
                {
                    name: "av_per_id_2",
                    using: "BTREE",
                    fields: [
                    { name: "av_per_id" },
                    ]
                },
                {
                    name: "av_per_id",
                    using: "BTREE",
                    fields: [
                    { name: "av_per_id" },
                    ]
                },
                {
                    name: "av_per_id_3",
                    using: "BTREE",
                    fields: [
                    { name: "av_per_id" },
                    ]
                },
            ]
        }
    }
}

module.exports = { Persona, PersonaSchema, PERSONA_TABLE };