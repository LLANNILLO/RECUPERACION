var arrayPalabras = [];

do {
  let palabra = prompt("Nueva palabra");
  let continuar = false;

  if (palabra !== "" && palabra !== null) {
    continuar = true;
    arrayPalabras.push(palabra);
  }
} while (continuar);

/**
 *
 * @param {array} arrayPalabras
 */
function repeticionPalabras(arrayPalabras) {
  let mapaPalabrasRepetidas = new Map();

  arrayPalabras.forEach((palabra) => {
    if (!mapaPalabrasRepetidas.has(palabra)) {
      let arrayPalabraRepetida = arrayPalabras.filter((palabraRepetida) => {
        return palabraRepetida === palabra;
      });
      mapaPalabrasRepetidas.set(palabra, arrayPalabraRepetida.length);
    }
  });
  return mapaPalabrasRepetidas;
}

console.log(repeticionPalabras(arrayPalabras));
