const Empleado = require('../models/empleado');
const { calcularSalarioAnual } = require('../config/functions_aux');

exports.empleadosGetAll = (req, res) => {
  Empleado.find()
  .then((emps) => {
    res.setHeader('Content-Type', 'application/json');

    if (emps.length > 0) {
      // Calcula el salario anual para todos los empleados
      emps = emps.map((emp) => calcularSalarioAnual(emp));
      res.status(200).json({ success: true, data: emps, msg: "Employees found successfully!" });
      
    } else {
      res.status(200).json({ success: true, data: [], msg: "There aren't registered employees" });
    }
  })
  .catch((err) => {
    console.log(err);
    res.setHeader('Content-Type', 'application/json');
    res.status(403).json({ success: false, data: null, msg: "An error has occurred", error: err });
  });
}

exports.empleadosGetOne = (req, res) => {
  var id = req.params.id;
  Empleado.findOne({ id })
  .then((emp) => {
    res.setHeader('Content-Type', 'application/json');
    if (emp) {
      emp = calcularSalarioAnual(emp);
      res.status(200).json({ success: true, data: emp, msg: "Employee found successfully!" });
      
    } else {
      res.status(200).json({ success: false, data: null, msg: "Employee not found" });
    }
  })
  .catch((err) => {
    console.log(err);
    res.setHeader('Content-Type', 'application/json');
    res.status(403).json({ success: false, data: null, msg: "An error has occurred", error: err });
  });
}

exports.empleadosCreatePost = (req, res) => {
  // Se desglosa la petición de esta manera para facilitar la lectura y entendimiento del código
  var id = req.body.id;
  var name = req.body.name;
  var contractTypeName = req.body.contractTypeName;
  var roleId = req.body.roleId;
  var roleName = req.body.roleName;
  var roleDescription = req.body.roleDescription;
  var hourlySalary = req.body.hourlySalary;
  var monthlySalary = req.body.monthlySalary;

  var empleadoNuevo = new Empleado({ id, name, contractTypeName, roleId, roleName, roleDescription,
    hourlySalary, monthlySalary});
    Empleado.create(empleadoNuevo)
  .then((emp) => {
    res.setHeader('Content-Type', 'application/json');
    // Respondemos con el empleado creado
    emp = calcularSalarioAnual(emp);
    res.status(200).json({ success: true, data: emp, msg: "Employee created successfully!" });
  })
  .catch((err) => {
    console.log(err);
    res.setHeader('Content-Type', 'application/json');
    res.status(403).json({ success: false, data: null, msg: "An error has occurred", error: err });
  });
}

exports.empleadosDeleteOne = (req, res) => {
  var id = req.params.id;
  Empleado.findOneAndDelete({ id })
  .then((emp) => {
    res.setHeader('Content-Type', 'application/json');
    if (emp) {
      emp = calcularSalarioAnual(emp);
      res.status(200).json({ success: true, data: emp, msg: "Employee deleted successfully!" });
    } else {
      res.status(200).json({ success: false, data: null, msg: "Employee not found" });
    }
  })
  .catch((err) => {
    console.log(err);
    res.setHeader('Content-Type', 'application/json');
    res.status(403).json({ success: false, data: null, msg: "An error has occurred", error: err });
  });
  
}