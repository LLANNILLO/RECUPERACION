var temaGeografia = new Tema(Temas.Geografia[0], Temas.Geografia[1]);

document.addEventListener("DOMContentLoaded", () => {
  var frase = document.querySelector("[data-frase]");
  var palabras = document.querySelector("[data-palabras]");
  frase.innerHTML = temaGeografia.transmutarFrase();
  palabras.innerHTML = "<ul>" + temaGeografia.transmutarPalabras() + "</ul>";

  temaGeografia.colocarPalabras();
  const corregirBtn = document.getElementById("corregir");

  corregirBtn.addEventListener("click", () => {
    var frase = document.querySelector(".frase");
    temaGeografia.corregirFrase(frase.innerHTML);
  });
});
