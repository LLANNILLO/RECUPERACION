var jugador1 = 0;
var jugador2 = 0;

function jugarPartida(numPartidas = 5) {
  for (let i = 0; i < numPartidas; i++) {
    //dados del jugador1
    let dados1 = Math.floor(Math.random() * 6) + 1;
    let dados2 = Math.floor(Math.random() * 6) + 1;

    jugador1 += dados1 + dados2;

    //dados del jugador2
    let dados3 = Math.floor(Math.random() * 6) + 1;
    let dados4 = Math.floor(Math.random() * 6) + 1;

    jugador2 += dados3 + dados4;
  }

  let ganador =
    jugador1 > jugador2
      ? `Jugador 1 ganó con: ${jugador1} puntos.\nEl jugador 2 acumuló solo ${jugador2} puntos`
      : `Jugador 2 ganó con: ${jugador2} puntos.\n El jugador 1 acumuló solo ${jugador1} puntos`;

  return ganador;
}

console.log(jugarPartida());
console.log(jugarPartida(3));
console.log(jugarPartida(10));
console["log"](jugarPartida(10));
