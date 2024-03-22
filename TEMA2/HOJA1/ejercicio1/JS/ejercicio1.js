var frutas = 5;
const FRUTASINICIALES = frutas;

function añadirManzanas(numFrutas) {
  let manzanas = numFrutas;
  frutas += numFrutas;
  //FRUTASINICIALES += numFrutas;
  return manzanas;
}

console.log(frutas);
console.log(FRUTASINICIALES);

console.log("Se van a añadir 15 manzanas");
añadirManzanas(15);
console.log(`Numero total de frutas inicial: ${FRUTASINICIALES}`);
console.log(`Numero total de frutas: ${frutas}`);
console.log(manzanas);
