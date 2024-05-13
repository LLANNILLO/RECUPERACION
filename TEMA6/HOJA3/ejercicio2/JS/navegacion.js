window.addEventListener("load", () => {
  const enlaces = document.querySelectorAll("div>a");
  const alterarEnlacesBtn = document.getElementById("alterarEnlaces");

  function cambiarClases() {
    enlaces.forEach((enlace) => {
      if (enlace.hasAttribute("class")) {
        enlace.classList.remove("enlace");
        enlace.classList.add("nuevoEnlace");
      } else {
        enlace.classList.add("enlace");
      }
    });
  }
  alterarEnlacesBtn.addEventListener("click", cambiarClases);
});
