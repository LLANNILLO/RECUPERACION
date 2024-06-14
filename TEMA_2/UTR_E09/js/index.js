window.addEventListener("load", () => {
  $imagenes = document.querySelectorAll("[data-image]");
  console.log($imagenes);
  $anteriorImagen = document.getElementById("anteriorImagen");
  $siguienteImagen = document.getElementById("siguienteImagen");
  $cerrarImagen = document.getElementById("cerrarImagen");

  function ActualizarInformacion(data) {
    $imagenACargar = data.querySelector("img");
    $EnlaceACargar = data.querySelector("a");
    $DescripcionACargar = data.querySelector("span").parentNode.textContent;
    $tituloDetalleAnchor = document.getElementById("tituloDetalle");
    $tituloDetalleAnchor = document.getElementById("imagen-detalles");
    $tituloDetalleAnchor = document.getElementById("descripcionDetalle");
  }

  $cerrarImagen.addEventListener("click", () => {
    $contenedorImagenesDiv = document.querySelector(".contenedor-imagenes");
    $detallesDiv = document.querySelector(".detalles");
    $contenedorImagenesDiv.classList.add("aumentar-tamaño");
    $detallesDiv.classList.add("desaparecen-detalles");
  });
});
