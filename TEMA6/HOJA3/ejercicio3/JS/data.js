window.addEventListener("load", () => {
  const caja = document.querySelector("div");
  const agregarDataBtn = document.getElementById("agregarData");
  const variarDivBtn = document.getElementById("variarDiv");

  function agregadoValoresData() {
    let width = parseInt(repetir("Agregar width"));
    let height = parseInt(repetir("Agregar height"));
    let backgroundColor = repetir("Agregar background-color");

    caja.dataset.width = width;
    caja.dataset.height = height;
    caja.dataset.background = backgroundColor;
  }

  function variacionDiv() {
    if (caja.dataset.width === "") {
      alert("no ha agregado ningun valor data");
    } else {
      caja.style.width = caja.dataset.width + "px";
      caja.style.height = caja.dataset.height + "px";
      caja.style.backgroundColor = caja.dataset.background;
    }
  }
  agregarDataBtn.addEventListener("click", agregadoValoresData);
  variarDivBtn.addEventListener("click", variacionDiv);
});

/**
 *
 * @param {string} mensaje
 * @returns
 */
function repetir(mensaje) {
  do {
    var valor = prompt(mensaje);

    if (mensaje.includes("background-color")) {
      var error = valor === "";
    } else {
      var error = valor === "" || isNaN(valor);
    }
    if (error) {
      alert("Se ha confundido al insertar el valor pedido");
    }
  } while (error);
  return valor;
}
