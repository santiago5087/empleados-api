var mongoose = require('mongoose');
var Empleado = require('../models/empleado');
const request = require('request');

var urlBase = 'http://localhost:3000/empleados';

// Antes de realizar las prueba
beforeAll((done) => {
  // Se crea una nueva BD para realizar los tests
  var mongoDB = "mongodb://localhost:27017/empleados-testbd";
  mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
  mongoose.set('useCreateIndex', true);

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, "connection error"));
  db.once('open', () => {
      console.log("We are connected to test database");
      done();
  });
});

// Despues de cada prueba "limpiamos" la BD
afterEach((done) => {
  Empleado.deleteMany({}, (err, success) => {
      if (err) console.log(err);
      done();
  });
});

describe("Empleados API", () => {
  describe("GET EMPLEADOS /", () => {
      it("Status 200", (done) => {
          //Verificamos que la BD está vacía
          expect(Empleado.find({}, (err, emps) => {
              expect(emps.length).toBe(0);
          }));

          var nuevoEmpleado = new Empleado({
            id: 1,
            name: "Santiago",
            contractTypeName: "MonthlySalaryEmployee",
            roleId: 2,
            roleName: "Contractor",
            roleDescription: null,
            hourlySalary: 60000,
            monthlySalary: 10000
          });
          
          nuevoEmpleado.save((err, emp) => {
            request.get(urlBase, (error, response, body) => {
                // Se verifica que la API responda la petición GET correctamente
                expect(response.statusCode).toBe(200);
                done();
            })
          });

      });
  });

});