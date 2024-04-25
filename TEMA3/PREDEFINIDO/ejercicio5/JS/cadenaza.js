var contenido;
do {
  contenido = prompt("Introduce una frase (+10 caracteres)");
  var numeroPalabras = contenido.length;
  if (numeroPalabras < 10) {
    alert("No has introducido mas de 10 palabras");
  }
} while (numeroPalabras < 10);

var octavoCaracter = contenido[7];

var primeraAparicion = contenido.indexOf(octavoCaracter);
var ultimaAparicion = contenido.lastIndexOf(octavoCaracter);
var contenidoEntreApariciones = contenido.slice(
  primeraAparicion,
  ultimaAparicion
);

//solucion
var contenidoAlterado = [];
let posicion = 0;
contenidoEntreApariciones.split("").forEach((caracter) => {
  console.log(posicion);
  if (posicion % 2 === 0) {
    caracter = caracter.toUpperCase();
  } else {
    caracter = caracter.toLowerCase();
  }
  contenidoAlterado.push(caracter);
  posicion++;
});
console.log(contenidoAlterado.join(""));
