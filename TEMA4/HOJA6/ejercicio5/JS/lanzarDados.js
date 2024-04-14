function lanzarDados(lanazamientos) {
  let puntuacionGanadora = 0;
  let contador = 0;

  do {
    let dado1 = Math.floor(Math.random() * 6) + 1;
    let dado2 = Math.floor(Math.random() * 6) + 1;

    // puntuacionGanadora =
    //   dado1 > puntuacionGanadora && dado1 > dado2
    //     ? dado1
    //     : dado2 > puntuacionGanadora && dado2 > dado1
    //     ? dado2
    //     : puntuacionGanadora;

    if (dado1 > puntuacionGanadora || dado2 > puntuacionGanadora) {
      puntuacionGanadora = dado1 > dado2 ? dado1 : dado2;
    }
    contador++;
    console.log(dado1);
    console.log(dado2);
  } while (contador < lanazamientos);

  console.log("dado mayor");
  return puntuacionGanadora;
}

console.log(lanzarDados(2));
