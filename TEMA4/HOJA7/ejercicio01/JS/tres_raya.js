// Función para imprimir el tablero
function imprimirTablero(tablero) {
  for (let fila of tablero) {
    console.log(fila.join(" | "));
  }
}

// Función para comprobar si hay un ganador
function hayGanador(tablero) {
  const lineasGanadoras = [
    [
      [0, 0],
      [0, 1],
      [0, 2],
    ], // Horizontal superior
    [
      [1, 0],
      [1, 1],
      [1, 2],
    ], // Horizontal media
    [
      [2, 0],
      [2, 1],
      [2, 2],
    ], // Horizontal inferior
    [
      [0, 0],
      [1, 0],
      [2, 0],
    ], // Vertical izquierda
    [
      [0, 1],
      [1, 1],
      [2, 1],
    ], // Vertical media
    [
      [0, 2],
      [1, 2],
      [2, 2],
    ], // Vertical derecha
    [
      [0, 0],
      [1, 1],
      [2, 2],
    ], // Diagonal principal
    [
      [0, 2],
      [1, 1],
      [2, 0],
    ], // Diagonal secundaria
  ];

  // Comprobamos cada línea ganadora
  for (let linea of lineasGanadoras) {
    const [a, b, c] = linea;
    const valor = tablero[a[0]][a[1]];
    if (
      valor &&
      valor === tablero[b[0]][b[1]] &&
      valor === tablero[c[0]][c[1]]
    ) {
      return true; // Si encontramos una línea con el mismo valor en las tres posiciones, hay un ganador
    }
  }
  return false; // Si no se encontró ninguna línea ganadora, no hay ganador
}

// Función para generar un tablero aleatorio lleno de X y O
function generarTableroAleatorio() {
  const tablero = [];
  const opciones = ["X", "O"];
  let contadorX = 0;
  let contadorO = 0;

  // Generamos un tablero vacío
  for (let i = 0; i < 3; i++) {
    tablero.push([]);
    for (let j = 0; j < 3; j++) {
      tablero[i].push("");
    }
  }

  // Llenamos el tablero con X y O
  for (let i = 0; i < 9; i++) {
    const fila = Math.floor(i / 3);
    const columna = i % 3;
    const opcion = opciones[Math.floor(Math.random() * opciones.length)];

    if (opcion === "X" && contadorX === 4) {
      tablero[fila][columna] = "O";
      contadorO++;
    } else if (opcion === "O" && contadorO === 4) {
      tablero[fila][columna] = "X";
      contadorX++;
    } else {
      tablero[fila][columna] = opcion;
      if (opcion === "X") contadorX++;
      else contadorO++;
    }
  }

  return tablero;
}

// Generamos un tablero aleatorio
const tablero = generarTableroAleatorio();
console.log("Tablero:");
imprimirTablero(tablero);

// Verificamos si hay un ganador
if (hayGanador(tablero)) {
  console.log("¡Hay un ganador!");
} else {
  console.log("No hay un ganador.");
}
