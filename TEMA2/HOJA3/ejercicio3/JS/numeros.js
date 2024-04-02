function comprobarValores(num1, num2) {
  let resultado = isNaN(num1) || isNaN(num2) ? false : true;
  return resultado;
}

function menorValores(num1, num2) {
  let resultado =
    num1 !== num2
      ? num1 > num2
        ? `${num2} es menor que ${num1}`
        : `${num1} es menor que ${num2}`
      : `${num1} es igual que ${num2}`;
  return resultado;
}

function segundoPositivo(num2) {
  let resultado = num2 > 0 ? `${num2} es positivo` : `${num2} es negativo`;
  return resultado;
}

function primeroDistintoCero(num1) {
  let resultado =
    num1 !== 0
      ? num1 < 0
        ? `${num1} es menor que 0`
        : `${num1} es mayor que cero`
      : `El primer numero es igual a 0`;

  return resultado;
}

function incrementoPrimero(num1, num2) {
  let numero1Incrementado = num1 + 1;
  let resultado =
    numero1Incrementado >= num2
      ? numero1Incrementado === num2
        ? `El incremento en uno hace iguales a ${num1} y a ${num2}`
        : `El incremento en uno hace mayor a ${num1} de ${num2}`
      : `El incremento en uno no hace igual o mayor a ${num1} de ${num2}`;

  return resultado;
}

var num1 = parseInt(prompt("Numero 1:"));
var num2 = parseInt(prompt("Numero 2:"));

if (!comprobarValores(num1, num2)) {
  console.log("Los numeros pasados no son validos");
} else {
  console.log(menorValores(num1, num2));
  console.log(segundoPositivo(num2));
  console.log(primeroDistintoCero(num1));
  console.log(incrementoPrimero(num1, num2));
}
