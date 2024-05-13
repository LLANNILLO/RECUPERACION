window.addEventListener("load", () => {
  const seccionesImagenes = document.querySelector("section>div");
  const eliminarLentamenteBtn = document.getElementById("eliminarLentamente");
  const eliminarTodoBtn = document.getElementById("eliminarTodo");
  const eliminarPorNombreBtn = document.getElementById("eliminarPorNombre");

  const imagenes = seccionesImagenes.querySelectorAll("img");
  const nombreElementoInptText = document.getElementById("nombreElemento");
  const textoReemplazo = "<p>Se han eliminado todas las imagenes</p>";
  //   Eliminar lentamente
  function eliminadoLento() {
    let eliminar = setInterval(() => {
      if (imagenes.length > 0) {
        seccionesImagenes.removeChild(seccionesImagenes.firstElementChild);
      } else {
        seccionesImagenes.innerHTML = textoReemplazo;
        clearInterval(eliminar);
      }
    }, 2000);
  }

  //    Eliminado por nombre
  /**
   *
   * @param {string} nombre
   */
  function eliminadoPorNombre() {
    if (imagenes.length > 0) {
      let encontrado = false;
      imagenes.forEach((imagen) => {
        let src = imagen.src;
        if (src.includes(nombreElementoInptText.value)) {
          seccionesImagenes.removeChild(imagen);
          encontrado = true;
        }
      });

      if (!encontrado) {
        alert("no se encontró el archivo");
      }
      nombreElementoInptText.value = "";
    }
  }

  //    Eliminar Todo

  function eliminarTodo() {
    seccionesImagenes.innerHTML = textoReemplazo;
  }

  eliminarLentamenteBtn.addEventListener("click", eliminadoLento);
  eliminarPorNombreBtn.addEventListener("click", eliminadoPorNombre);
  eliminarTodoBtn.addEventListener("click", eliminarTodo);
});
