window.addEventListener("load", () => {
  const caja = document.querySelector("body>div");
  const cambioClaseBtn = document.getElementById("cambiarClase");
  console.log(cambioClaseBtn);

  function cambiarClase() {
    if (caja.classList.contains("caja1")) {
      caja.classList.remove("caja1");
      caja.classList.add("caja2");
    } else {
      caja.classList.remove("caja2");
      caja.classList.add("caja1");
    }
  }
  cambioClaseBtn.addEventListener("click", cambiarClase);
});
