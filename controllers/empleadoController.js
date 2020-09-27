const Empleado = require('../models/empleado');

exports.empleadosGetAll = (req, res) => {
  Empleado.find()
  .then((emps) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({ success: true, data: emps });
  })
  .catch((err) => {
    console.log(err);
    res.setHeader('Content-Type', 'application/json');
    res.status(401).json({ success: false, data: err });
  });
}

exports.empleadosGetOne = (req, res) => {
  var id = req.params.id;
  Empleado.findOne({ id })
  .then((emp) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({ success: true, data: emp });
  })
  .catch((err) => {
    console.log(err);
    res.setHeader('Content-Type', 'application/json');
    res.status(401).json({ success: false, data: err });
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
  var monthlySalary = req.body.hourlySalary;

  var empleadoNuevo = new Empleado({ id, name, contractTypeName, roleId, roleName, roleDescription,
                                    hourlySalary, monthlySalary});
  Empleado.create(empleadoNuevo)
  .then((emp) => {
    res.setHeader('Content-Type', 'application/json');
    // Respondemos con el empleado creado
    res.status(200).json({ success: true, data: emp });
  })
  .catch((err) => {
    console.log(err);
    res.setHeader('Content-Type', 'application/json');
    res.status(401).json({ success: false, data: err });
  });
}