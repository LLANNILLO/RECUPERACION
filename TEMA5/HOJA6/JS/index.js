window.addEventListener("load", () => {
  //Variables para el display de la web
  $productosDiv = document.querySelector(".productos");
  $productosCarrito = document.querySelector(".productos-carrito");
  //crear fragmento de elementos HTML
  $productosFragment = document.createDocumentFragment();

  //Variables para la interaccion de la web
  $vaciarCesta = document.getElementById("vaciarCesta");
  $precioFinal = document.getElementById("precioFinal");

  //funcion para crear los elementos con una clase y/o contenido determinado
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

        anadirProductoDiv.addEventListener("click", () => {
          eventoAgregarProducto(producto.nombre, producto.precio);
        });

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

  //funcion para agregar el evento de agregar producto a la lista
  function eventoAgregarProducto(nombre, valor) {
    let productoCarrito = $productosCarrito.querySelector(
      `[data-name='${nombre}']`
    );

    if (!productoCarrito) {
      productoCarrito = crearElementoConClase("div", "producto-cesta");
      const cantidadProducto = crearElementoConClase(
        "div",
        "",
        `<span class=cantidad>1</span> x ${nombre} - <span class=valor>${valor}</span>€`
      );
      const eliminarProducto = crearElementoConClase(
        "div",
        "eliminar-productos",
        "&times;"
      );

      eliminarProducto.addEventListener("click", (event) => {
        eventoEliminarProducto(event);
      });

      productoCarrito.dataset.name = nombre;

      productoCarrito.appendChild(cantidadProducto);
      productoCarrito.appendChild(eliminarProducto);
      alterarPrecioFinal(valor);
      $productosCarrito.appendChild(productoCarrito);
    } else {
      let cantidadSpan = productoCarrito.querySelector(".cantidad");
      let cantidad = parseFloat(cantidadSpan.textContent);
      alterarPrecioFinal(valor);
      cantidad++;
      cantidadSpan.textContent = cantidad;
    }
  }

  function alterarPrecioFinal(valor) {
    let precioFinal = parseFloat($precioFinal.innerHTML);

    let precio = parseFloat(valor);
    precioFinal += precio;
    $precioFinal.innerHTML = precioFinal.toFixed(2);
  }
  function eventoVaciarCesta() {
    $productosCarrito.innerHTML = "";
    $precioFinal.innerHTML = "0.00€";
  }

  $vaciarCesta.addEventListener("click", () => {
    eventoVaciarCesta();
  });

  function eventoEliminarProducto(event) {
    let parent = event.target.parentNode;

    console.log($productosCarrito.childElementCount);
    if ($productosCarrito.childElementCount < 2) {
      $precioFinal.innerHTML = "0.00";
    }
    $productosCarrito.removeChild(parent);
  }
});
