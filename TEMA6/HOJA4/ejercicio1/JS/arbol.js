window.addEventListener("load", () => {
  mostrarElementos(document);

  function mostrarElementos(elementoHTML) {
    elementoHTML.childNodes.forEach((hijo) => {
      alert(hijo.nodeName);
      if (hijo.hasChildNodes()) {
        mostrarElementos(hijo);
      }
    });
  }
});
