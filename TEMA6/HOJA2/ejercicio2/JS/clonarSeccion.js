window.addEventListener("load", () => {
  const section = document.querySelector("body div>section");
  console.log(section);
  const divSecciones = document.querySelector("body div");

  do {
    var clonar = confirm(
      "Se va a realizar una clonacion, ¿Quieres hacer otra?"
    );
    var clon = section.cloneNode(true);
    divSecciones.append(clon);
  } while (clonar);
});
