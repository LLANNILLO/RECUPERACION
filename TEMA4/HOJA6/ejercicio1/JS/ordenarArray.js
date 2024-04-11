/**
 *
 * @param {array} valores
 */
function ordenarvalores(valores) {
  valores = valores.sort((a, b) => a - b);
  let valoresPares = [];
  let valoresImpares = [];

  for (let valor in valores) {
    let numero = valores[valor];
    numero % 2 === 0 ? valoresPares.push(numero) : valoresImpares.push(numero);
  }
  console.log(valoresPares);
  console.log(valoresImpares);
  valores = valores.splice().concat(valoresPares, valoresImpares);
  return valores;
}

var valores = [12, 45, 681, 2, 3, 5, 2, 3, 6, 10];
var valoresOrdenados = ordenarvalores(valores);

console.log(valoresOrdenados);
