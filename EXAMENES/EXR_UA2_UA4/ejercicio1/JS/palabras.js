var arrayPalabras = []; //Array de todas las palabras agregadas por usuario

/*Realizacion de bucle hasta que el prompt este vacio o se cancele*/
do {
  var continuar = true;

  let palabra = prompt("Nueva palabra");

  //si el prompt no esta vacio o nulo se agrega la nueva palabra
  if (!(palabra === "" || palabra === null)) {
    arrayPalabras.push(palabra);
  } else {
    alert("agregadas todas las palabras");
    continuar = false;
  }
} while (continuar);

/**
 * Funcion para crear el mapa con las palabras repetidas
 * @param {array} arrayPalabras
 */
function repeticionPalabras(arrayPalabras) {
  let mapaPalabrasRepetidas = new Map(); //variable del mapa a retornar

  arrayPalabras.forEach((palabra) => {
    //Crear un array que contenga la cantidad de la palabra x que se repite
    let arrayPalabraRepetida = arrayPalabras.filter((palabraRepetida) => {
      return palabraRepetida === palabra;
    });
    /*
    el filter crea ese array que va incluyendo solo la palabraRepetida si
    es igual a palabra
    */

    //aagregar la nueva clave-valor en el mapa
    mapaPalabrasRepetidas.set(palabra, arrayPalabraRepetida.length);
  });

  //retornar el mapa
  return mapaPalabrasRepetidas;
}

//crear una variable para despues devolverla por consola
var mapaPalabrasRepes = repeticionPalabras(arrayPalabras);

console.log(mapaPalabrasRepes);
