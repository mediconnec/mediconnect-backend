const { Model, DataTypes, Sequelize } = require('sequelize');

const PERSON_TABLE = 'tbl_cita';

class Cita extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: PERSON_TABLE,
            modelName: 'Cita',
            timestamps: true
        }
    }
}

const CitaSchema = {
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

module.exports = { Cita, CitaSchema };