/**
 *
 * @param {string} fecha
 */
function comprobarFecha(fecha) {
  let regEx = /^(?:\d{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12]\d|3[01]))$/;

  let fechaValida = regEx.test(fecha);

  return fechaValida;
}

//Ejercicio hecho por mi
var mapaFecha = new Map();
var contador = 1;
do {
  let fecha = prompt("Pasame una fecha (aaaa-mm-dd)");

  if (comprobarFecha(fecha)) {
    nuevaFecha = new Fechita(fecha);

    mapaFecha.set(`fecha${contador}`, nuevaFecha);
    contador++;
  } else {
    alert("La fecha no es valida");
  }

  var continuar = confirm("Quieres añadir otra fecha");
} while (continuar);

mapaFecha.forEach((fecha) => {
  console.log(fecha.ver());
});

/* 
// Función para crear un array de objetos Flechita
function crearArrayFlechitas() {
  const flechitas = [];
  let fechaInput = prompt("Introduce una fecha (formato: AAAA-MM-DD):");

  while (fechaInput !== "0") {
    const flechita = new Flechita(fechaInput);
    flechitas.push(flechita);
    fechaInput = prompt(
      "Introduce otra fecha (formato: AAAA-MM-DD), o introduce 0 para terminar:"
    );
  }

  return flechitas;
}

// Probamos el objeto Flechita
const arrayFlechitas = crearArrayFlechitas();
console.log("Fechas introducidas:");
for (let flechita of arrayFlechitas) {
  flechita.sumarDias(12);
  flechita.restarMeses(20);
  flechita.ver();
}
 */
