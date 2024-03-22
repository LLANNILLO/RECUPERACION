//sin recursividad

function factorial(num) {
  let n = parseFloat(num);
  if (isNaN(n)) {
    return "Este factorial no existe";
  }
  let valor = 1;
  for (let i = 1; i <= n; i++) {
    valor *= i;
  }
  let resultado = `Tu factorial es: ${valor}`;
  return resultado;
}

var numero = prompt("Numero para realizar el factorial");
alert(`${factorial(numero)}`);

//con recursividad
