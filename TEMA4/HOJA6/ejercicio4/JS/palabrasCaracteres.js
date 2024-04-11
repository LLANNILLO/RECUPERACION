/**
 *
 * @param {string} cadena1
 * @param {string} cadena2
 */
function caracteresIgualesCadenas(cadena1, cadena2) {
  let iguales = true;

  if (cadena1.length !== cadena2.length) {
    iguales = false;
  } else {
    cadena1 = cadena1.toLowerCase();
    cadena2 = cadena2.toLowerCase();
    let letrasCadena1 = cadena1.split("");

    letrasCadena1.forEach((letra) => {
      if (!cadena2.includes(letra)) iguales = false;
    });
  }

  resultado = iguales
    ? "Las cadenas son iguales"
    : "Las cadenas no son iguales";

  return resultado;
}

console.log(caracteresIgualesCadenas("Hola", "aloH"));
console.log(caracteresIgualesCadenas("Hola", "Jola"));
