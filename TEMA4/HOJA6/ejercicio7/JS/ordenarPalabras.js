function ordenarPalabras() {
  var arrayPalabras = [];
  //var setPalabras = new Set();
  do {
    let palabra = prompt("Nueva palabra");
    var continuar = false;

    if (palabra !== "" && palabra !== null) {
      continuar = true;
      if (!arrayPalabras.includes(palabra)) {
        arrayPalabras.push(palabra);
      }
    }
    //setPalabras.add(palabra);
  } while (continuar);

  //let arrayPalabras = Array.from(setPalabras).sort((a, b) => b.localeCompare(a, 'es'));
  arrayPalabras.sort((a, b) => b.localeCompare(a, "es"));
  return arrayPalabras;
}

console.log(ordenarPalabras());
