window.addEventListener("load", () => {
  const seccionesImagenes = document.querySelector("section>div");
  const eliminarLentamenteBtn = document.getElementById("eliminarLentamente");
  const eliminarTodoBtn = document.getElementById("eliminarTodo");

  const textoReemplazo = "<p>Se han eliminado todas las imagenes</p>";
  //   Eliminar lentamente
  function eliminadoLento() {
    let eliminar = setInterval(() => {
      if (seccionesImagenes.querySelectorAll("img").length > 0) {
        seccionesImagenes.removeChild(seccionesImagenes.firstElementChild);
      } else {
        seccionesImagenes.innerHTML = textoReemplazo;
        clearInterval(eliminar);
      }
    }, 200);
  }

  //    Eliminar Todo

  function eliminarTodo() {
    seccionesImagenes.innerHTML = textoReemplazo;
  }

  eliminarLentamenteBtn.addEventListener("click", eliminadoLento);
  eliminarTodoBtn.addEventListener("click", eliminarTodo);
});
