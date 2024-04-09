var mapa = new Map([
  ["1", "1"],
  ["A", "3"],
  ["Z", "4"],
  ["5", "2"],
  ["b", "5"],
]);

function ordenar() {
  let arrayClavesMapa = [];
  for (let clave of mapa.keys()) {
    arrayClavesMapa.push(clave);
  }

  arrayClavesMapa.sort();

  arrayClavesMapa.forEach((clave) => {
    elemento = mapa.get(clave);
    mapa.delete(clave);
    mapa.set(clave, elemento);
  });
}

console.log(mapa);
ordenar();
console.log(mapa);
