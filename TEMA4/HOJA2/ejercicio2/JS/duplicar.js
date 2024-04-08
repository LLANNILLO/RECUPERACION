var valores = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

function multi(array) {
  let duplicados = [];
  for (let i = 0; i < array.length; i++) {
    duplicados.push(array[i] * 2);
  }
  return duplicados;
}

console.log(valores);
var duplicados = multi(valores);
console.log(duplicados);
