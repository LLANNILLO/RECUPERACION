function calculadora(operador1, operacion, operador2) {
  let numA = parseFloat(operador1);
  let numB = parseFloat(operador2);
  let resultado;
  switch (operacion) {
    case "+":
      resultado = numA + numB;
      break;
    case "-":
      resultado = numA - numB;
      break;
    case "x":
      resultado = numA * numB;
      break;
    case "/":
      resultado = numA / numB;
      break;
    case "pow":
      resultado = numA ** numB;
      break;
    case "mod":
      resultado = numA % numB;
      break;

    default:
      resultado = "Error";
      break;
  }
  return resultado;
}

var numA = prompt("Primer operador");
var operacion = prompt("Tipo operacion");
var numB = prompt("Segundo operador");
var suma = calculadora(numA, operacion, numB);
console.log(suma);
