const { Person, PersonSchema } = require('./persons.model');
const { Expediente, ExpedienteSchema } = require('./expedientes.model');
const { Cita, CitaSchema } = require('./citas.model');
function setupModels(sequelize) {
    Person.init(PersonSchema, Person.config(sequelize));
    Expediente.init(ExpedienteSchema, Expediente.config(sequelize));
    Cita.init(CitaSchema, Cita.config(sequelize));
}

module.exports = setupModels;
