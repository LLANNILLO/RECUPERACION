var arrayValores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 1];
var arrayValoresCopiados = [];
var mapaValoresCopiados = new Map();

for (let i = 0; i < arrayValores.length; i++) {
  let valorCopiadoNVeces = 0;
  let valorCopiado = arrayValores[i];
  var posicion = i;
  do {
    let posValor = i;
    posicion = arrayValores.indexOf(valorCopiado, posValor);

    if (posicion !== -1) {
      posValor = posicion;
      valorCopiadoNVeces++;
    }
  } while (posicion >= 0);
  mapaValoresCopiados.set(valorCopiado, valorCopiadoNVeces);
}

console.log(arrayValores);
console.log(mapaValoresCopiados);
