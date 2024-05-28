window.addEventListener("load", () => {
  const formulario = Array.from(document.getElementsByTagName("input"));
  const requeridoDiv = document.getElementById("requerido");

  formulario.forEach((elemento) => {
    if (elemento.hasAttribute("required")) {
      elemento.addEventListener("focus", () => {
        let parrafo = document.createElement("p");
        let mensajeFoco = document.createTextNode("Focuseado");
        parrafo.appendChild(mensajeFoco);
        requeridoDiv.appendChild(parrafo);
      });
      elemento.addEventListener("blur", () => {
        requeridoDiv.innerHTML = "";
      });
    }
  });
});
