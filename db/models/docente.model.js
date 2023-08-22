const { Model, DataTypes, Sequelize } = require('sequelize');

const DOCENTE_TABLE = 'av_docente_portal';

const DocenteSchema = {
    docId: {
        field: 'doc_id',
        type:  DataTypes.BIGINT(10),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    docCorreo: {
        field: 'doc_correo',
        type: DataTypes.STRING(150),
        allowNull: true,
    },
    docCorreoInst: {
        field: 'doc_correo_inst',
        type: DataTypes.STRING(150),
        allowNull: true,
    },
    docEstado: {
        field: 'doc_estado',
        type: DataTypes.CHAR(1),
        allowNull: false,
        defaultValue: 1
    },
    docCodEnt: {
        field: 'doc_cod_ent',
        type: DataTypes.CHAR(2),
        allowNull: true
    },
    docCodFac: {
        field: 'doc_cod_',
        type: DataTypes.CHAR(2),
        allowNull: true
    },
    docGrado: {
        field: 'doc_grad_acad',
        type: DataTypes.STRING(10),
        allowNull: false
    },
    







}