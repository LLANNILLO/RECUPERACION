var minus = [
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado",
  "domingo",
];

var mayus = [];

/**
 *
 * @param {string[]} array
 * @param {string[]} arrayAlterado
 */
function alterarArray(array, arrayAlterado) {
  array.forEach((dia) => {
    let primerDigito = dia.lastIndexOf(dia.charAt(0));
    let ultimoDigito = dia.lastIndexOf(dia.charAt(dia.length - 1));
    let resto = dia.slice(1, dia.length - 1);
    let diaEntrega = "";

    diaEntrega =
      dia[primerDigito].toUpperCase() + resto + dia[ultimoDigito].toUpperCase();

    arrayAlterado.push(diaEntrega);
  });
}

alterarArray(minus, mayus);
console.log(mayus);
