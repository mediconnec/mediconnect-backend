const { Model, DataTypes, Sequelize } = require('sequelize');

const PERSON_TABLE = 'tbl_especialidad';

class Especialidad extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: PERSON_TABLE,
            modelName: 'Especialidad',
            timestamps: true
        }
    }
}

const EspecialidadSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nombre: {
        allowNull: false,
        type: DataTypes.STRING,
        field:'nombre'
    }
}

module.exports = { Especialidad, EspecialidadSchema };