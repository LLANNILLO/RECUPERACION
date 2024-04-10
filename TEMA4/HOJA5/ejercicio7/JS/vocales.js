/**
 *
 * @param {string} cadena1
 * @param {string} cadena2
 */
const vocales = (cadena1, cadena2) => {
  let vocales = ["a", "e", "i", "o", "u"];

  let cadena1Dividida = cadena1.split("");
  let cadena2Dividida = cadena2.split("");

  let vocales1 = 0;
  let vocales2 = 0;
  cadena1Dividida.forEach((letra) => {
    if (vocales.includes(letra)) {
      vocales1++;
    }
  });

  cadena2Dividida.forEach((letra) => {
    if (vocales.includes(letra)) {
      vocales2++;
    }
  });

  let resultado =
    vocales1 > vocales2
      ? "La cadena 1 tiene mas vocales"
      : "La cadena 2 tiene más vocales";

  return resultado;
};

console.log(vocales("caca", "cococo"));
