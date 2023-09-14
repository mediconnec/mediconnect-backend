const {Model, DataTypes, Sequelize} = require('sequelize');

const PERSON_TABLE = 'tbl_expediente';

class Expediente extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: PERSON_TABLE,
            modelName: 'Expediente',
            timestamps: true
        }
    }

    static associate(models) {
        this.belongsTo(models.Cita, {foreignKey: 'id_cita'})
    }
}

const ExpedienteSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    id_cita: {
        type: DataTypes.INTEGER,
        foreignKey: true
    },
    nota: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'nota'
    }
}

module.exports = {Expediente, ExpedienteSchema};