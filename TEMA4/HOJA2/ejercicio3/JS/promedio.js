var arrayValores = [];
var cuantosValores = parseInt(prompt("¿Cuántos valores quieres en el array?"));
var suma = 0;

for (let i = 0; i < cuantosValores; i++) {
  let valorNumerico = Math.floor(Math.random() * 100) + 1;
  suma += valorNumerico;
  arrayValores.push(valorNumerico);
}

var promedio = arrayValores.length !== 0 ? suma / arrayValores.length : 0;

console.log(suma);
console.log(promedio);
