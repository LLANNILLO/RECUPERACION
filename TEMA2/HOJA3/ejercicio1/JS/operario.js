function cacularSueldoOperario(sueldo, antiguedad) {
  let resultado;
  if (isNaN(sueldo) && isNaN(antiguedad)) {
    resultado = "No son validos los datos pasados";
  } else {
    if (sueldo < 500 && antiguedad >= 10) {
      sueldo *= 1.2;
    } else if (sueldo < 500 && antiguedad < 10) {
      sueldo *= 1.05;
    }
    resultado = `El sueldo del operario es de: ${sueldo}`;
  }
  return resultado;
}

var sueldo = prompt("¿Sueldo del operario?");
var antiguedad = prompt("¿Antigüedad del operario?");

console.log(cacularSueldoOperario(sueldo, antiguedad));
