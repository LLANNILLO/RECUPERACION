var arrayValores = numerosAleatoriosArray();

function numerosAleatoriosArray() {
  let valores = [];

  do {
    let valorNumerico = Math.floor(Math.random() * 100) + 1;
    if (valorNumerico % 5 === 0) valores.push(valorNumerico);
  } while (valores.length < 4);

  return valores;
}

function eliminarPrimero(array) {
  let primero = array[0];

  if (primero < 50) array.shift();
}

function eliminarUltimo(array) {
  let ultimo = array[array.length - 1];

  if (ultimo > 50) array.pop();
}

function mostrarContenidoArray(array) {
  array.forEach((multiplo5) => {
    document.write(`<p>${multiplo5}</p>`);
  });
}

console.log(arrayValores);
eliminarPrimero(arrayValores);
eliminarUltimo(arrayValores);
mostrarContenidoArray(arrayValores);
