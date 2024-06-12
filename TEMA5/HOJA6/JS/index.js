window.addEventListener("load", () => {
  $productosDiv = document.querySelector(".productos");
  $productosFragment = document.createDocumentFragment();

  //emplear la funcion fetch() para trabajar con API (productos.json)
  fetch("JS/productos.json")
    //si la respuestas es ok realizar el display de los productos
    .then((response) =>
      response.ok ? response.json() : Promise.reject(response)
    )
    .then((responseJSON) => {
      responseJSON.productos.forEach((producto) => {
        const productoDiv = crearElementoConClase("div", "producto");

        const imagen = document.createElement("img");
        imagen.src = producto.imagen;

        const infoProductoDiv = crearElementoConClase("div", "info-producto");

        const nombreProductoDiv = crearElementoConClase(
          "div",
          "",
          producto.nombre
        );

        const precioProductoDiv = crearElementoConClase(
          "div",
          "precio-producto"
        );

        const precioDiv = crearElementoConClase("div", "", "Precio");

        const precioNumDiv = crearElementoConClase("div", "", producto.precio);

        const anadirProductoDiv = crearElementoConClase(
          "div",
          "anadir-carrito",
          "&plus;"
        );

        //Realizar los apendices del precio-producto div
        precioProductoDiv.appendChild(precioDiv);
        precioProductoDiv.appendChild(precioNumDiv);

        //Realizar los apendices del info-producto div
        infoProductoDiv.appendChild(nombreProductoDiv);
        infoProductoDiv.appendChild(precioProductoDiv);
        infoProductoDiv.appendChild(anadirProductoDiv);

        //Realizar los apendices al producto div
        productoDiv.appendChild(imagen);
        productoDiv.appendChild(infoProductoDiv);

        //Realizar el apendice al fragmento de codigo creado con el DOM
        $productosFragment.appendChild(productoDiv);
      });
      $productosDiv.appendChild($productosFragment);
    })
    .catch((error) => {
      let message = error.statusText || "Error Desconocido";
      $productosFragment.innerHTML = `<div>Error ${error.status}: ${message}</div>`;
    });

  function crearElementoConClase(tag, className = "", contenido = "") {
    const elementoCrear = document.createElement(tag);
    if (className) {
      elementoCrear.classList.add(className);
    }
    if (contenido) {
      elementoCrear.innerHTML = contenido;
    }
    return elementoCrear;
  }
});
