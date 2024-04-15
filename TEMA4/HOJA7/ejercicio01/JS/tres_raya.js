function generarTresRaya() {
  var tresRaya = [];

  let fila = [];
  let valoresX = [];
  let valoresO = [];
  do {
    let valor = Math.floor(Math.random());

    let pieza = valor === 1 ? "X" : "O";

    pieza === "X" ? valoresX.push(pieza) : valoresO.push(pieza);
    if (valoresO.length === valoresX.length) {
      fila.push(pieza);
    }

    if (fila.length === 3) {
      tresRaya.push(fila);
      fila = fila.slice();
    }
  } while (tresRaya.length < 3);
  return tresRaya;
}

var tresRaya = generarTresRaya();

/* 
Utiliza las estructuras de datos que consideres oportunas para generar un
tablero del tres en raya con todas las posiciones rellenas e indique si alguno de
los jugadores ha ganado la partida.
Hay que tener en cuenta que la cantidad de piezas ha de ser iguales para simular la partida entre dos jugadores
 */
