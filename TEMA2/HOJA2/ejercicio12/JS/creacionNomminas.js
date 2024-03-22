var cargo = prompt(
  "¿Cuál es tu cargo en la empresa?\n1.Junior\n2.Senior\n3.Jefe Proyecto"
).toLowerCase();

var diasViaje = parseInt(
  prompt("¿Cuántos días has viajado para visitar a los clientes?")
);
var estadoCivil = prompt("¿Casado o soltero?").toLowerCase();

var empleado = new Empleado(cargoEmpresa(cargo), diasViaje, estadoCivil);

let sueldo = empleado.getSueldo();

alert(`Te corresponden ${sueldo}€:`);

function cargoEmpresa(cargo) {
  switch (cargo) {
    case "1":
      cargo = "junior";
      break;
    case "2":
      cargo = "senior";
      break;
    case "3":
      cargo = "jefe proyecto";
      break;
    default:
      cargo;
      break;
  }
  return cargo;
}
