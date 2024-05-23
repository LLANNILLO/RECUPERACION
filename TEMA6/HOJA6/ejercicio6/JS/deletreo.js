const palabras = [
  "Hogar",
  "casa",
  "miseria",
  "Justicia",
  "libertinaje",
  "Chupitiguay",
  "Felipe",
  "Hugo",
  "David",
];

window.addEventListener("load", () => {
  const section = document.querySelector("section");
  const deletreoAleatorioBtn = document.getElementById("deletreoAleatorio");

  function deletreo() {
    if (section.hasChildNodes) {
      section.innerHTML = "";
    }
    let posicion = Math.floor(Math.random() * palabras.length) - 1;

    let palabra = palabras[posicion];

    let letras = palabra.split("");
    letras.forEach((letra) => {
      let div = document.createElement("div");
      let texto = document.createTextNode(letra);
      div.appendChild(texto);
      section.appendChild(div);
    });
  }
  deletreoAleatorioBtn.addEventListener("click", deletreo);
});
