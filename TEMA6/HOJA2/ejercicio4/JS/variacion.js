window.addEventListener("load", () => {
  const cambiarTextoBtn = document.getElementById("cambiarTexto");
  const crearListaBtn = document.getElementById("crearLista");
  const borrarTodoBtn = document.getElementById("borrarTodo");

  const seccionContenido = document.querySelector("div>div");

  //Cambio de texto por "Soy muy guapo"

  function cambioTexto() {
    //seleccion del parrafo dentro de su div
    let parrafo = seccionContenido.querySelector("div>p");
    //si el parrafo no fuese nulo se cambia el texto
    if (parrafo !== null) {
      //si todavia no se ha cambiado el parrafo, permitir su cambio
      if (parrafo.textContent !== "Soy muy guapo") {
        parrafo.textContent = "Soy muy guapo";
      } else {
        alert("Ya cambiaste el texto");
      }
    }
    //si el parrafo es nulo, lanzar...
    else {
      alert("No existe parrafo para cambiar");
    }
  }

  //Agregacion de una lista desordenada

  function agregarLista() {
    let ul = document.createElement("ul");

    //si existe la seccion de div para el parrafo se podra crear la lista
    if (seccionContenido.querySelector("div")) {
      //creacion de los tres elementos de la lista desordenada
      for (let cant = 0; cant < 3; cant++) {
        let li = document.createElement("li");
        li.textContent = "Nuevo elemento";
        //apendizaje a la lista
        ul.appendChild(li);
      }
      //agregacion de la lista en el div del parrafo
      seccionContenido.firstElementChild.appendChild(ul);
    } else {
      //si no existiese lugar para agregar la lista, lanzar...
      alert("No existe lugar donde agregar la lista");
    }
  }

  //Eliminar el parrafo y la lista
  function borrado() {
    //eliminado del apartado del parrafo y de lista
    if (seccionContenido.querySelector("div") !== null) {
      seccionContenido.removeChild(seccionContenido.querySelector("div"));
    } else {
      alert("Ya se borró la seccion del parrafo y de la lista");
    }
  }

  //eventos de los botones
  cambiarTextoBtn.addEventListener("click", cambioTexto);
  crearListaBtn.addEventListener("click", agregarLista);
  borrarTodoBtn.addEventListener("click", borrado);
});
