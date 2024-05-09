window.addEventListener("load", () => {
  var nodosDiv = document.querySelector("body > div");
  var anadirNodo = document.getElementById("anadirNodo");

  anadirNodo.addEventListener("click", () => {
    var nodosParrafo = document.querySelectorAll("p,span,a");
    var nuevoNodoTexto = document.createElement("p");

    var textoNodo = document.createTextNode(
      `Nuevo nodo nº ${nodosParrafo.length + 1}`
    );
    nuevoNodoTexto.appendChild(textoNodo);
    nodosDiv.appendChild(nuevoNodoTexto);
  });
});
