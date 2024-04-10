var jugador1 = 0;
var jugador2 = 0;

function jugarPartida(numPartidas = 5) {
  for (let i = 0; i < numPartidas; i++) {
    let dados1 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    let dados2 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    jugador1 += dados1;
    jugador2 += dados2;
  }

  let ganador =
    jugador1 > jugador2
      ? `Jugador 1 ganó con: ${jugador1} puntos`
      : `Jugador 2 ganó con: ${jugador2} puntos`;

  return ganador;
}

console.log(jugarPartida());
console.log(jugarPartida(3));
console.log(jugarPartida(10));
