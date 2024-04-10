/**
 *
 * @param {string} cadena
 */

const invertida1 = function (cadena) {
  let cadenaInvertida = "";

  for (let i = cadena.length - 1; i >= 0; i--) {
    console.log(cadena[i]);
    cadenaInvertida += cadena[i];
  }

  return cadenaInvertida;
};

console.log(invertida1("hola"));

/**
 *
 * @param {string} cadena
 * @returns
 */
const invertida2 = function (cadena) {
  // Paso 1. Usa el método split() para devolver un nuevo arreglo
  var invrtirCadena = cadena.split("").reverse();

  // Paso 2. Usa el método join() para unir todos los elementos del arreglo en una cadena
  var unirArreglo = invrtirCadena.join("");

  //Paso 4. Devolver la cadena invertida
  return unirArreglo; // "aloh"
};

console.log(invertida2("hola"));

/**
 *
 * @param {string} cadena
 * @returns
 */
const invertida3 = function (cadena) {
  if (cadena === "") return "";
  else return invertida3(cadena.substring(1)) + cadena.charAt(0);
};

console.log(invertida3("hola"));
