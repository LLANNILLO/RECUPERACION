var matriz1 = [
  [1, 2, 2, 1],
  [8, 4, 3, 7],
  [12, 22, 4, 7],
  [4, 33, 2, 1],
];
var matriz2 = [
  [4, 2, 6, 5],
  [5, 4, 3, 1],
  [500, 14, 2, 100],
  [7, 33, 5, 2],
];

/**
 *
 * @param {array} matriz1
 * @param {array} matriz2
 */
function matricesConValoresIguales(matriz1, matriz2) {
  let matrizResultante = [];

  for (let i = 0; i < matriz1.length; i++) {
    let identicos = [];
    for (let j = 0; j < matriz1[i].length; j++) {
      valorComparacion = matriz1[i][j];
      valorComparacion === matriz2[i][j]
        ? identicos.push(valorComparacion)
        : identicos.push(0);
    }
    matrizResultante.push(identicos);
  }
  return matrizResultante;
}

var matrizIguales = matricesConValoresIguales(matriz1, matriz2);

console.log(matrizIguales);
