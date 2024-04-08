var array1 = [12, 12, 12, 14];
var array2 = [11, 11, 13, 15];
var array3 = ["i", "j", "k", "l"];

var conjunto = new Set([...array1, ...array2, ...array3]);

/*
    El conjunto en su totalidad contiene 9 elementos.
    Esto se debe porque los valores que se repiten no acaban estando en el propio Conjunto
*/

for (const valor of conjunto) {
  document.write(`<p>${valor}</p>`);
}
