var frases = [];
do {
  var continuar = false;

  let texto = prompt("Nueva frase");
  let longitudTexto = texto.length;

  if (texto !== "" && texto !== null) {
    let frase = new Cadenita(texto, longitudTexto);
    frases.push(frase);
    continuar = true;
  } else {
    alert("Cerrando creacion de Cadenitas");
  }
} while (continuar);

var palabraABuscar = prompt("Palabra que desees busca entre las frases");
frases.forEach((frase) => {
  document.write(frase.Ristra());
  document.write(`<p>Frase al reves:${frase.Reves()}</p>`);
  document.write(
    `<p>Palabra a buscar en la frase <strong> ${palabraABuscar.toUpperCase()}</strong>: ${
      frase.Buscar(palabraABuscar) ? "si" : "no"
    }</p>`
  );

  document.write(
    `<p>Primeras palabras en mayusculas: ${frase.Mayus().join(" ")}</p>`
  );
});
