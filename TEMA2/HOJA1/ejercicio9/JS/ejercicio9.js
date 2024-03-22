//while
var numero = 1;
function obtenerPrimosWhile(numero) {
  let numerosImpares = Array();
  while (numero <= 100) {
    numeroValido(numero) ? numerosImpares.push(numero) : 0;
    numero++;
  }
  return numerosImpares;
}

console.log("Array creado a partir de la funcion definida usando while()");
var numerosImpares = obtenerPrimosWhile(numero);
console.log(numerosImpares);

//do... while
function obtenerPrimosDoWhile(numero) {
  let numerosImpares = Array();
  do {
    numeroValido(numero) ? numerosImpares.push(numero) : 0;
    numero++;
  } while (numero <= 100);
  return numerosImpares;
}

console.log("Array creado a partir de la funcion definida usando do...while()");
var numerosImpares = obtenerPrimosDoWhile(numero);
console.log(numerosImpares);

//for
function obtenerPrimosFor() {
  let numerosImpares = Array();

  for (let num = 1; num <= 100; num++) {
    numeroValido(numero) ? numerosImpares.push(numero) : 0;
    numero++;
  }
  return numerosImpares;
}

console.log("Array creado a partir de la funcion definida usando for");
var numerosImpares = obtenerPrimosWhile(numero);
console.log(numerosImpares);

//comprobacion del numero
function numeroValido(numero) {
  let validacion = false;
  if (numero % 2 !== 0 && numero % 3 !== 0 && numero % 7 !== 0) {
    validacion = true;
  }

  return validacion;
}
