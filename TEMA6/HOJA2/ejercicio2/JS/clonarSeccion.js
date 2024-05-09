window.addEventListener("load", () => {
  const section = document.querySelector("body div>section");
  const divSecciones = document.querySelector("body div");

  const clonacionBtn = document.getElementById("clonacion");

  function clonar() {
    var clonar = confirm("¿Seguro que quieres realizar una clonación?");
    if (clonar) {
      let clon = section.cloneNode(true);
      divSecciones.append(clon);
    }
  }

  clonacionBtn.addEventListener("click", clonar);
});
