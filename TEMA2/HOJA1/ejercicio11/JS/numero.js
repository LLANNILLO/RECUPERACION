var continuar = true;
do {
  let valorUsuario = prompt("Introduce un valor");
  if (isNaN(valorUsuario)) {
    continuar = false;
  } else {
    continuar;
    alert("¡Vamos! me diste un número");
  }
} while (continuar);

alert("¡Oh no! ya no es un numero");
