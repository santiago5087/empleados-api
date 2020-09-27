const Empleado = require('../models/empleado');

exports.empleadosGetAll = (req, res) => {
  Empleado.find()
  .then((emps) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({ success: true, data: emps, msg: "Empleados encontrados exitosamente!" });
  })
  .catch((err) => {
    console.log(err);
    res.setHeader('Content-Type', 'application/json');
    res.status(403).json({ success: false, data: null, msg: "Ha ocurrido un error", error: err.errors });
  });
}

exports.empleadosGetOne = (req, res) => {
  var id = req.params.id;
  Empleado.findOne({ id })
  .then((emp) => {
    res.setHeader('Content-Type', 'application/json');
    if (emp) {
      if (emp.contractTypeName == "HourlySalaryEmployee") {
        emp.salarioAnual = 120 * emp.hourlySalary * 12;

        // Se pone 'else' directamente porque se tiene la restricción en el esquema del empleado de 
        // que un tipo de contrato TIENE que ser igual a "HourlySalaryEmployee" o a "MonthlySalaryEmployee"
      } else {  
        emp.salarioAnual = emp.monthlySalary * 12;
      }
      res.status(200).json({ success: true, data: emp, msg: "Usuario encontrado exitosamente!" });

    } else {
      res.status(200).json({ success: false, data: null, msg: "Usuario no encontrado" });
    }
  })
  .catch((err) => {
    console.log(err);
    res.setHeader('Content-Type', 'application/json');
    res.status(403).json({ success: false, data: null, msg: "Ha ocurrido un error", error: err.errors });
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
    res.status(200).json({ success: true, data: emp, msg: "Empleado creado exitosamente!" });
  })
  .catch((err) => {
    console.log(err);
    res.setHeader('Content-Type', 'application/json');
    res.status(403).json({ success: false, data: null, msg: "Ha ocurrido un error", error: err.errors });
  });
}

exports.empleadosDeleteOne = (req, res) => {
  var id = req.params.id;
  Empleado.findOneAndDelete({ id })
  .then((emp) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({ success: true, data: emp, msg: "Empleado eliminado exitosamente!" });
  })
  .catch((err) => {
    console.log(err);
    res.setHeader('Content-Type', 'application/json');
    res.status(403).json({ success: false, data: null, msg: "Ha ocurrido un error", error: err.errors });
  });
}