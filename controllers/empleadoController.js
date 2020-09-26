const Empleado = require('../models/empleado');

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
  Empleado.add(empleadoNuevo, (err, emp) => {
    if (err) console.log(err);  
    else console.log(emp);
  });
}