window.addEventListener("load", () => {
  const seccionesImagenes = document.querySelector("section>div");
  const eliminarLentamenteBtn = document.getElementById("eliminarLentamente");
  const eliminarTodoBtn = document.getElementById("eliminarTodo");

  //   Eliminar lentamente
  function eliminadoLento() {
    let eliminar = setInterval(() => {
      if (seccionesImagenes.querySelectorAll("img").length > 0) {
        seccionesImagenes.removeChild(seccionesImagenes.firstElementChild);
      } else {
        let texto = document.createTextNode(
          "Se han eliminado todas las imagenes"
        );
        seccionesImagenes.append(texto);
        clearInterval(eliminar);
      }
    }, 200);
  }

  //    Eliminar Todo

  function eliminarTodo() {
    seccionesImagenes.innerHTML = "<p>Se han eliminado todas las imagenes</p>";
  }

  eliminarLentamenteBtn.addEventListener("click", eliminadoLento);
  eliminarTodoBtn.addEventListener("click", eliminarTodo);
});
