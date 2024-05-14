window.addEventListener("load", () => {
  const pulsarBtn = document.getElementById("obtenerTitle");
  const cambiarTitleBtn = document.getElementById("cambiarTitle");
  const firstDiv = document.querySelector("div");
  var titulo = document.querySelector("title");

  function obtenerTitlePagina() {
    let div = document.createElement("div");
    div.setAttribute("id", "titleValue");
    let texto = `El title tiene el valor de:<strong> ${titulo.text}</strong>`;
    div.innerHTML = texto;

    firstDiv.append(div);
  }

  function cambiarTitlePagina() {
    let nuevoTitulo = prompt("Nuevo Titulo");
    titulo.textContent = nuevoTitulo;
    
    if (nuevoTitulo !== null) {
      let title = document.getElementById("titleValue");
      if (title) {
        firstDiv.removeChild(title);
      }
    }
  }

  pulsarBtn.addEventListener("click", obtenerTitlePagina);
  cambiarTitleBtn.addEventListener("click", cambiarTitlePagina);
});
