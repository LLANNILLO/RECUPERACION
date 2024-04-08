var arrayValores = [];
var cuantosValores = parseInt(prompt("¿Cuántos valores quieres en el array?"));

for (let i = 0; i < cuantosValores; i++) {
  let valorNumerico = Math.floor(Math.random() * 100) + 1;
  arrayValores.push(valorNumerico);
}

var conjunto = new Set(arrayValores);

