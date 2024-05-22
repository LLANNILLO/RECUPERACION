function cambioFondo(colorFondo) {
  document.body.style.backgroundColor = colorFondo;
}

window.addEventListener("load", () => {
  const posibilidadesFondo = document.querySelectorAll(".contenedor div");

  posibilidadesFondo.forEach((elemento) => {
    elemento.addEventListener("click", () => {
      cambioFondo(elemento.dataset.color);
    });
  });

  const resetBtn = document.getElementById("reset");

  resetBtn.addEventListener("click", () => {
    document.body.removeAttribute("style");
  });
});
