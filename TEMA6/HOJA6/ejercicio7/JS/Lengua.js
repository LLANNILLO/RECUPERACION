var temaGeografia = new Tema(Temas.Lengua[0], Temas.Lengua[1]);

document.addEventListener("DOMContentLoaded", () => {
  var frase = document.querySelector("[data-frase]");
  var palabras = document.querySelector("[data-palabras]");
  frase.innerHTML = temaGeografia.transmutarFrase();
  palabras.innerHTML = "<ul>" + temaGeografia.transmutarPalabras() + "</ul>";

  var list = document.querySelector("ul");

  list.childNodes.forEach((liElement) => {
    liElement.addEventListener("click", () => {
      var spanElement = document.querySelector("span");
      temaGeografia.rellenarHueco(spanElement, liElement.innerText);
      list.removeChild(liElement);
    });
  });

  const corregirBtn = document.getElementById("corregir");

  corregirBtn.addEventListener("click", () => {
    var frase = document.querySelector(".frase");
    if (!frase.innerHTML.includes("<span>...</span>")) {
      temaGeografia.corregirFrase(frase.innerHTML);
    } else {
      alert("Todavia no has introudcido todos los valores");
    }
  });
});
