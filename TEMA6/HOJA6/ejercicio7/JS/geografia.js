var temaGeografia = new Tema(Temas.Geografia[0], Temas.Geografia[1]);
console.log(temaGeografia);

document.addEventListener("DOMContentLoaded", () => {
  var frase = document.querySelector("[data-frase]");
  var palabras = document.querySelector("[data-palabras]");
  frase.innerHTML = temaGeografia.transmutarFrase();
  palabras.innerHTML = "<ul>" + temaGeografia.transmutarPalabras() + "</ul>";

  var list = document.querySelectorAll("li");

  list.forEach((liElement) => {
    liElement.addEventListener("click", () => {
      var spanElement = document.querySelector("span");
      temaGeografia.rellenarHueco(spanElement, liElement.innerText);
    });
  });
});
