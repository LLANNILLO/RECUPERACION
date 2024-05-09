window.addEventListener("load", () => {
  var nodosDiv = document.querySelector("body > div");
  var anadirNodo = document.getElementById("anadirNodo");

  anadirNodo.addEventListener("click", () => {
    let nodosParrafo = document.querySelectorAll("p,span,a");
    let nuevoNodoTexto = document.createElement("p");

    let textoNodo = document.createTextNode(
      `Nuevo nodo nº ${nodosParrafo.length + 1}`
    );
    nuevoNodoTexto.appendChild(textoNodo);
    nodosDiv.appendChild(nuevoNodoTexto);
  });
});
