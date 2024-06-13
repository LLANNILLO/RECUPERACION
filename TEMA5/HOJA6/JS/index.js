window.addEventListener("load", () => {
  //Variables para el display de la web
  $productosDiv = document.querySelector(".productos");
  $productosCarrito = document.querySelector(".productos-carrito");
  //crear fragmento de elementos HTML
  $productosFragment = document.createDocumentFragment();

  //Variables para la interaccion de la web
  $vaciarCesta = document.getElementById("vaciarCesta");
  $precioFinal = document.getElementById("precioFinal");

  //emplear la funcion fetch() para trabajar con API (productos.json)
  fetch("JS/productos.json")
    //si la respuestas es ok realizar el display de los productos
    .then((response) =>
      response.ok ? response.json() : Promise.reject(response)
    )
    .then((responseJSON) => {
      //creacion de productos
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

  $vaciarCesta.addEventListener("click", () => {
    eventoVaciarCesta();
  });

  /*
      ------------------------------------------------------------
      Funciones desarrolladas para el funcionamiento del ejercicio
      ------------------------------------------------------------
  */

  //funcion para vaciar la cesta de la tienda
  function eventoVaciarCesta() {
    $productosCarrito.innerHTML = "";
    $precioFinal.innerHTML = "0.00€";
  }

  //funcion para agregar producto a la lista
  function eventoAgregarProducto(nombre, valor) {
    let productoCarrito = $productosCarrito.querySelector(
      `[data-name='${nombre}']`
    );

    //si no existe el producto lo creamos desde cero con dos valores data y con su contenido
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
      //añadir el evento de eliminar producto del carrito en el click del &times;
      eliminarProducto.addEventListener("click", (event) => {
        alterarPrecioFinal(event.target.parentNode.dataset.value, true);
        eventoEliminarProducto(event);
      });

      productoCarrito.dataset.name = nombre;
      productoCarrito.dataset.value = valor;

      productoCarrito.appendChild(cantidadProducto);
      productoCarrito.appendChild(eliminarProducto);
      //alteramos el precio para que lo incremente con el valor del producto
      alterarPrecioFinal(productoCarrito.dataset.value);
      $productosCarrito.appendChild(productoCarrito);
    } else {
      //modificamos el valor de los productos seleccionados
      let productoCarritoValor = parseFloat(productoCarrito.dataset.value);
      productoCarritoValor += parseFloat(valor);
      productoCarrito.dataset.value = productoCarritoValor;

      //agregar +1 a la cantidad del producto creado en el carrito
      let cantidadSpan = productoCarrito.querySelector(".cantidad");
      let cantidad = parseFloat(cantidadSpan.textContent);
      cantidad++;
      cantidadSpan.textContent = cantidad;

      alterarPrecioFinal(valor);
    }
  }

  /*
    funcion para alterar el precio final de la cesta tanto 
    en la agregacion de productos como en el borrado de productos
  */
  function alterarPrecioFinal(valor, borrado = false) {
    //si no es una alteracion de borrado se suma el precio del producto
    if (!borrado) {
      let precioFinal = parseFloat($precioFinal.innerHTML);
      let precio = parseFloat(valor);
      precioFinal += precio;
      $precioFinal.innerHTML = precioFinal.toFixed(2);
    }
    //En cualquier otro caso se resta el precio del producto
    else {
      let precioFinal = parseFloat($precioFinal.innerHTML);
      let precio = parseFloat(valor);
      precioFinal -= precio;
      $precioFinal.innerHTML = precioFinal.toFixed(2);
    }

    //si el precio es cero mostrar el siguiente contenido
    if (parseInt($precioFinal.innerHTML) === 0) {
      $precioFinal.innerHTML = "0.00";
    }
  }

  //funcion con para borrar el producto de la cesta
  function eventoEliminarProducto(event) {
    //obtenemos el elemento padre de la cesta que sera lo que borremos
    let parent = event.target.parentNode;

    $productosCarrito.removeChild(parent);
  }

  //funcion para crear los elementos con una clase y/o contenido determinado
  function crearElementoConClase(tag, className = "", contenido = "") {
    //creamos el elemento con su etiqueta correspondiente
    const elementoCrear = document.createElement(tag);
    //si tiene nombre de clase se la agrega
    if (className) {
      elementoCrear.classList.add(className);
    }
    //si tiene contenido se lo agrega
    if (contenido) {
      elementoCrear.innerHTML = contenido;
    }
    //retornamos el HTMLelement creado
    return elementoCrear;
  }
});
