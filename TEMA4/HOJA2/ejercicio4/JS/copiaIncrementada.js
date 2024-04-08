var arrayValores = [];
var cuantosValores = parseInt(prompt("¿Cuántos valores quieres en el array?"));

for (let i = 0; i < cuantosValores; i++) {
  let valorNumerico = Math.floor(Math.random() * 100) + 1;
  arrayValores.push(valorNumerico);
}

var arrayCopiaIncrementado = arrayValores.slice();

for (let i = 0; i < arrayCopiaIncrementado.length; i++) {
  arrayCopiaIncrementado[i] += 1;
}

console.log(arrayValores);
console.log(arrayCopiaIncrementado);
