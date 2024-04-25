var cancion = "Espronceda Por cien cañones por banda";

var palabras = cancion.split(" ");

var numeroPalabras = palabras.length;

/**
 *
 * @param {string} autor
 * @param {string[]} array
 */
function buscarAutor(autor, array) {
  let encontrado = false;
  array.forEach((palabra) => {
    if (palabra === autor) {
      let punto = palabra.match(autor);
      let palabraPosicion = array.indexOf(autor);
      array[palabraPosicion] = punto[0] + ":";
      encontrado = true;
    }
  });
  return encontrado;
}

if (buscarAutor("Espronceda", palabras)) {
  alert("Se ha encontrado al autor");
} else {
  alert("no se ha encontrado al autor");
}
console.log(palabras.join(" "));
console.log(numeroPalabras);
