// Crear una instancia de NumeroSecreto
var juego = Object.create(NumeroSecreto);
juego.constructor();

var reintentar = true;
do {
  let numero = parseFloat(prompt("¿En que numero he pensado?"));

  if (isNaN(numero)) {
    reintentar = false;
  } else {
    let acierto = juego.acierto(numero);

    let resultado = acierto ? "Correcto" : juego.mayorMenor(numero);

    alert(resultado);

    if (resultado === "Correcto") {
      reintentar = confirm(
        `Intentos totales ${juego.getIntentos()}\n ¿Quieres volver a probar?`
      );
      juego = Object.create(NumeroSecreto);
      juego.constructor();
    }
  }
} while (reintentar);
