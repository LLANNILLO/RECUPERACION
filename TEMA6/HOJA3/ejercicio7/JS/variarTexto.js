window.addEventListener("load", () => {
  const aumentarLetraBtn = document.getElementById("aumentarLetra");
  const reestablecerLetraBtn = document.getElementById("reestablecerLetra");
  const cambiarFondoBtn = document.getElementById("cambiarFondo");
  const reestablecerFondoBtn = document.getElementById("reestablecerFondo");
  const cambiarFontFamilyBtn = document.getElementById("cambiarFont");

  const select = document.querySelector("header > select");

  function obtenerElementos() {
    var seleccion = select.value.split(" ");
    return seleccion;
  }

  function aumentarLetra() {
    let seleccion = obtenerElementos();
    let fontSize = prompt("Tamaño de las letras") + "px";
    seleccion.forEach((elemento) => {
      let htmlElemento = document.getElementById(elemento);
      htmlElemento.style.fontSize = fontSize;
    });
  }

  function cambiarFondo() {
    let seleccion = obtenerElementos();
    let backgroundColor = prompt("Nuevo color de Fondo");
    seleccion.forEach((elemento) => {
      let htmlElemento = document.getElementById(elemento);
      htmlElemento.style.backgroundColor = backgroundColor;
    });
  }

  function reestablecerLetra() {
    let seleccion = obtenerElementos();
    seleccion.forEach((elemento) => {
      let htmlElemento = document.getElementById(elemento);
      htmlElemento.style.fontSize = "";
    });
  }
  function reestablecerFondo() {
    let seleccion = obtenerElementos();
    seleccion.forEach((elemento) => {
      let htmlElemento = document.getElementById(elemento);
      htmlElemento.style.backgroundColor = "";
    });
  }

  function cambiarFontFamily() {
    let seleccion = obtenerElementos();
    if (seleccion.length === 1) {
      let fontFamily = prompt("nueva fontFamily");
      seleccion.forEach((elemento) => {
        let htmlElemento = document.getElementById(elemento);
        htmlElemento.style.fontFamily = fontFamily;
      });
    } else {
      alert("Seleccione una section para el cambio de familia de letra");
    }
  }

  aumentarLetraBtn.addEventListener("click", aumentarLetra);
  cambiarFondoBtn.addEventListener("click", cambiarFondo);
  reestablecerLetraBtn.addEventListener("click", reestablecerLetra);
  reestablecerFondoBtn.addEventListener("click", reestablecerFondo);
  cambiarFontFamilyBtn.addEventListener("click", cambiarFontFamily);
});
