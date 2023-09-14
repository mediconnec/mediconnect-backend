const { Model, DataTypes, Sequelize } = require('sequelize');

const PERSON_TABLE = 'tbl_categoria';

class Categoria extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: PERSON_TABLE,
            modelName: 'Categoria',
            timestamps: true
        }
    }
}

const CategoriaSchema = {
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

module.exports = { Categoria, CategoriaSchema };