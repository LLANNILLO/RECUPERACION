window.addEventListener("load", () => {
  const seccionesImagenes = document.querySelector("section>div");
  const eliminarLentamenteBtn = document.getElementById("eliminarLentamente");
  const eliminarTodoBtn = document.getElementById("eliminarTodo");
  const eliminarPorNombreBtn = document.getElementById("eliminarPorNombre");

  const imagenes = seccionesImagenes.querySelectorAll("img");
  const nombreElementoInptText = document.getElementById("nombreElemento");
  const textoReemplazo = "<p>Se han eliminado todas las imagenes</p>";
  //   Eliminar lentamente
  var eliminar = null;

  function eliminadoLento() {
    if (eliminar === null) {
      eliminar = setInterval(() => {
        if (imagenes.length > 0) {
          seccionesImagenes.removeChild(seccionesImagenes.firstElementChild);
        } else {
          seccionesImagenes.innerHTML = textoReemplazo;
        }
      }, 2000);
    } else {
      clearInterval(eliminar);
      eliminar = null;
    }
  }

  //    Eliminado por nombre
  /**
   *
   * @param {string} nombre
   */
  function eliminadoPorNombre() {
    let imagenes = seccionesImagenes.querySelectorAll("img");

    if (imagenes.length > 0) {
      let encontrado = false;

      imagenes.forEach((imagen) => {
        let src = imagen.src;
        if (!encontrado) {
          if (src.includes(nombreElementoInptText.value)) {
            console.log(src);
            seccionesImagenes.removeChild(imagen);
            encontrado = true;
          }
        }
      });

      if (!encontrado) {
        let articulo = document.createElement("article");
        let texto = document.createTextNode(
          "Esa imagen no esta en el catalogo"
        );

        articulo.append(texto);

        seccionesImagenes.append(articulo);
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
