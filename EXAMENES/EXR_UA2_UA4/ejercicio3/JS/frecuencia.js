//funcion para generar la frecuencia de los valores
function frecuenciaDeLosValores() {
  //Crear un mapa con el orden de valores preestablecido
  let frecuencia = new Map([
    [1, 0],
    [2, 0],
    [3, 0],
    [4, 0],
    [5, 0],
    [6, 0],
    [7, 0],
    [8, 0],
    [9, 0],
    [10, 0],
  ]);

  //contador para generar los 10000 valores
  let contador = 0;
  do {
    /*
    generar un nuevo valor y
    realizar la suma segun su valor en el mapa
    */
    let valor = Math.floor(Math.random() * 10) + 1;
    frecuenciaValor = frecuencia.get(valor);
    frecuenciaValor++;
    //setear la nueva frecuencia del valor
    frecuencia.set(valor, frecuenciaValor);
    contador++;
  } while (contador < 10000);

  return frecuencia;
}

/**
 *Funcion para mostrar por pantalla la frecuenca de los valores
 * @param {Map} frecuencia
 */
function mostrarFrecuencia(frecuencia) {
  document.write("<h1>Repetición números del 1 al 10</h1>");
  document.write("<ul>");
  for (let [valor, frencuenciaValor] of frecuencia) {
    document.write(`<li>Número ${valor}->${frencuenciaValor}</li>`);
  }
  document.write("</ul>");
}

mostrarFrecuencia(frecuenciaDeLosValores());
