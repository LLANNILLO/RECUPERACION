window.addEventListener("load", () => {
  $imagenes = document.querySelectorAll("[data-image]");

  let imagenSeleccionada;
  $contenedorImagenesDiv = document.querySelector(".contenedor-imagenes");
  $detallesDiv = document.querySelector(".detalles");

  //por cada ficha añadir el evento de actualizarInformacion
  $imagenes.forEach((elemento) => {
    elemento.addEventListener("click", () => {
      ActualizarInformacion(elemento);
    });
  });

  //actualiza y muestra los detalles aside
  function ActualizarInformacion(data) {
    $enlaceACargar = data.querySelector("a").href;
    $imagenACargar = data.querySelector("img").src;
    $descripcionACargar = data.querySelector("#descripcion").textContent;
    $tituloDetalleAnchor = document.getElementById("tituloDetalle");
    $imagenDetalleSrc = document.getElementById("imagenDetalle");
    $descripcionDetalleDiv = document.getElementById("descripcionDetalle");
    imagenSeleccionada = data.dataset.image;
    $tituloDetalleAnchor.href = $enlaceACargar;
    $imagenDetalleSrc.src = $imagenACargar;
    $descripcionDetalleDiv.textContent = $descripcionACargar;

    //solo se aplica si contiene la clase que impide que se vea el detalles
    if ($detallesDiv.classList.contains("desaparecen-detalles")) {
      abrirDetalles();
    }
  }

  //funcion para abrir el Detalles
  function abrirDetalles() {
    $contenedorImagenesDiv.classList.remove("aumentar-tamaño");
    $detallesDiv.classList.remove("desaparecen-detalles");
  }

  //evento para la imagen anterior
  $anteriorImagen = document.getElementById("anteriorImagen");

  $anteriorImagen.addEventListener("click", () => {
    anteriorImagen();
  });

  function anteriorImagen() {
    if (imagenSeleccionada > 0) {
      let elementoAnterior = document.querySelector(
        `[data-image='${--imagenSeleccionada}']`
      );

      ActualizarInformacion(elementoAnterior);
    }
  }

  //evento para la imagen siguiente
  $siguienteImagen = document.getElementById("siguienteImagen");

  $siguienteImagen.addEventListener("click", () => {
    siguienteImagen();
  });

  function siguienteImagen() {
    if (imagenSeleccionada < 19) {
      let elementoSiguiente = document.querySelector(
        `[data-image='${++imagenSeleccionada}']`
      );

      ActualizarInformacion(elementoSiguiente);
    }
  }
  //evento para cerrar el detalles
  $cerrarDetalles = document.getElementById("cerrarImagen");
  $cerrarDetalles.addEventListener("click", () => {
    cerrarDetalles();
  });

  function cerrarDetalles() {
    $contenedorImagenesDiv.classList.add("aumentar-tamaño");
    $detallesDiv.classList.add("desaparecen-detalles");
  }
});
