var array1 = [1, 1, 1, 1, 2];
var array2 = [1, 1, 1, 1, 2];
var array3 = ["Limon", "Naranja", "Pomelo"];
var array4 = ["Limon", "Naranja", "Pomelo"];

function compararArrays(array1, array2) {
  let resultado = "Son iguales";
  if (array1.length !== array2.length) {
    resultado = "No tienen la misma longitud";
  } else {
    longitud = array1.length;
    for (let i = 0; i < longitud; i++) {
      if (array1[i] !== array2[i]) {
        resultado = "No son iguales";
      }
    }
  }

  return resultado;
}
