const mongoose = require("mongoose");
var Schema = mongoose.Schema;

// No se pone el salario anual ya que es un cálculo que se realiza a partir de los datos que hay
// en la BD y es innecesario almacenarlo
var empleadoSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true  // id único que identifica a un empleado (adicional al que por defecto crea Mongo)
  },
  name: {
    type: String,
    default: ''
  },
  contractTypeName: {
    type: String,
    required: true,
    enum: ["HourlySalaryEmployee", "MonthlySalaryEmployee"]  
    // Restringe a que solo se admiten estos dos tipos de contratos
  },
  roleId: {
    type: Number,
    required: true
  },
  roleName: {
    type: String,
    required: true
  },
  roleDescription: String,
  hourlySalary: {
    type: Number,
    default: 0
  },
  monthlySalary: {
    type: Number,
    default: 0
  }

});

module.exports = mongoose.model("Empleado", empleadoSchema);