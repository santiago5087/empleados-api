exports.calcularSalarioAnual = (emp) => {
  var empConSalario = { 
    id: emp.id,
    name: emp.name,
    contractTypeName: emp.contractTypeName,
    roleId: emp.roleId,
    roleName: emp.roleName,
    roleDescription: emp.roleDescription,
    hourlySalary: emp.hourlySalary,
    monthlySalary: emp.monthlySalary 
    };

  if (emp.contractTypeName == "HourlySalaryEmployee") {
    empConSalario.annualSalary = 120 * emp.hourlySalary * 12;

    // Se pone 'else' directamente porque se tiene la restricción en el esquema del empleado de 
    // que un tipo de contrato TIENE que ser igual a "HourlySalaryEmployee" o a "MonthlySalaryEmployee"
  } else {  
    empConSalario.annualSalary = emp.monthlySalary * 12;
  }
  return empConSalario;
}