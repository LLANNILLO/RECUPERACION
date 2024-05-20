window.addEventListener("load", () => {
  const listaOriginal = document.querySelector("body>section>ul");
  const contenidoLista = Array.from(listaOriginal.getElementsByTagName("li"));

  var contenidoNuevaLista = document.createElement("ul");
  if (confirm("Quieres ordenar la lista")) {
    contenidoNuevaLista = contenidoLista.sort((li, liNext) =>
      li.textContent.localeCompare(liNext.textContent)
    );
  } else {
    contenidoNuevaLista = contenidoLista.sort(() => Math.random() - 0.5);
  }

  var listaNueva = document.createElement("ul");
  contenidoNuevaLista.forEach((li) => {
    // Clonar el elemento li para no alterar el original
    const liClonado = li.cloneNode(true);
    listaNueva.appendChild(liClonado);
  });

  // Añadir la nueva lista al body
  document.getElementById("resultado").appendChild(listaNueva);
});
