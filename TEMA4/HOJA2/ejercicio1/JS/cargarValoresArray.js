var arrayValores = [];
var arrayValoresPares = [];
var arrayValoresImpares = [];
var cuantosValores = parseInt(prompt("¿Cuántos valores quieres en el array?"));

for (let i = 0; i < cuantosValores; i++) {
  let valorNumerico = Math.floor(Math.random() * 100) + 1;

  arrayValores.push(valorNumerico);

  valorNumerico % 2 === 0
    ? arrayValoresPares.push(valorNumerico)
    : arrayValoresImpares.push(valorNumerico);
}

console.log(arrayValores);
console.log("Valores pares");
console.log(arrayValoresPares);
console.log("Valores impares");
console.log(arrayValoresImpares);
