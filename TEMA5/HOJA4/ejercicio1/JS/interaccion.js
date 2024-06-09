const animal1 = new Mascota(
  "Shakespeare",
  "Ciervae",
  "mamifero",
  "Es un ciervo muy amable",
  "herbivoro",
  5,
  "imagenes/ciervo.jpg"
);
const animal2 = new Mascota(
  "Toro",
  "Bos taurus",
  "mamifero",
  "Da leche, ¿que más quieres?",
  "herbivoro",
  3,
  "imagenes/vaca.jpg"
);
const animal3 = new Mascota(
  "Coco",
  "Cocodylidae",
  "reptil",
  "Cuidado con que no te muerda",
  "carnivoro",
  12,
  "imagenes/cocodrilo.jpg"
);
const animal4 = new Mascota(
  "Leo",
  "Panthera Leo",
  "mamifero",
  "Este leo no es muy piscis",
  "carnivoro",
  8,
  "imagenes/leon.jpg"
);
const animal5 = new Mascota(
  "Flamingo",
  "Phoenicopterus",
  "mamifero",
  "Coño, un pajaro rosa 🤣🤣🤣",
  "herbivoro",
  5,
  "imagenes/flamenco.jpg"
);

const tienda = new Tienda(15, [animal1, animal2, animal3, animal4, animal5]);

window.addEventListener("load", () => {
  // Función para crear un elemento con una clase
  function crearElementoConClase(tag, className) {
    const elemento = document.createElement(tag);
    if (className) {
      elemento.classList.add(className);
    }
    return elemento;
  }

  // Función para crear un contenedor con imagen
  function crearContenedorImagen(src) {
    const figura = document.createElement("figure");
    const imagen = crearElementoConClase("img", "imagen");
    imagen.src = src;
    figura.appendChild(imagen);
    return figura;
  }

  // Función para crear un div con texto
  function crearTextoDiv(className, text) {
    const div = crearElementoConClase("div", className);
    div.textContent = text;
    return div;
  }

  // Función para crear un botón
  function crearBoton(className, type, value, event) {
    const boton = crearElementoConClase("input", className);
    boton.type = type;
    boton.value = value;
    if (event) {
      boton.addEventListener("click", event);
    }
    return boton;
  }

  // Función para crear el contenedor de botones
  function crearContenedorBotones(animalNombre) {
    const botonesAnimal = crearElementoConClase("div", "botones-animal");

    const botonComprarDiv = document.createElement("div");
    const botonComprar = crearBoton("aceptar", "button", "Comprar", () =>
      venderAnimal(animalNombre)
    );
    botonComprarDiv.appendChild(botonComprar);

    const botonMasInfoDiv = crearElementoConClase("div", "cancelar");
    const iconoMasInfo = crearElementoConClase("span", "fa-solid");
    iconoMasInfo.classList.add("fa-ellipsis");
    const botonMasInfo = crearBoton(null, "button", "Más info");
    botonMasInfoDiv.appendChild(iconoMasInfo);
    botonMasInfoDiv.appendChild(botonMasInfo);

    botonesAnimal.appendChild(botonComprarDiv);
    botonesAnimal.appendChild(botonMasInfoDiv);

    return botonesAnimal;
  }

  // Función principal para crear el elemento del animal
  function crearElementoAnimal(vacia, imagen, nombre = null, especie = null) {
    if (vacia) {
      const contenedorPrincipal = document.createElement("div");
      contenedorPrincipal.setAttribute("data-name", nombre);
      const animalContenedor = crearElementoConClase(
        "div",
        "animal-contenedor"
      );
      const animalDiv = crearElementoConClase("div", "animal");

      const figura = crearContenedorImagen(imagen);
      const nombreAnimal = crearTextoDiv("texto-animal", nombre);

      animalDiv.appendChild(figura);
      animalDiv.appendChild(nombreAnimal);

      animalContenedor.appendChild(animalDiv);
      contenedorPrincipal.appendChild(animalContenedor);

      return contenedorPrincipal;
    } else {
      const contenedorPrincipal = document.createElement("div");
      contenedorPrincipal.setAttribute("data-name", nombre);
      const animalContenedor = crearElementoConClase(
        "div",
        "animal-contenedor"
      );
      const animalDiv = crearElementoConClase("div", "animal");

      const figura = crearContenedorImagen(imagen);
      const nombreAnimal = crearTextoDiv("texto-animal", nombre);
      const especieAnimal = crearTextoDiv(
        "texto-animal",
        `Especie: ${especie}`
      );
      const botonesAnimal = crearContenedorBotones(nombre);

      animalDiv.appendChild(figura);
      animalDiv.appendChild(nombreAnimal);
      animalDiv.appendChild(especieAnimal);
      animalDiv.appendChild(botonesAnimal);

      animalContenedor.appendChild(animalDiv);
      contenedorPrincipal.appendChild(animalContenedor);

      return contenedorPrincipal;
    }
  }

  const estiloCajaContenido = document.querySelector(".estilo-caja-contenido");

  function crearElementosAnimal(jaulas) {
    jaulas.forEach((jaula) => {
      if (jaula.getEstado() === "ocupada") {
        let animal = jaula.getAnimal();
        let elementoHTML = crearElementoAnimal(
          false,
          animal.getImagen(),
          animal.getNombre(),
          animal.getEspecie()
        );

        estiloCajaContenido.appendChild(elementoHTML);
      } else {
        let elementoHTML = crearElementoAnimal(
          true,
          "imagenes/jaula.jpg",
          "Vacia"
        );
        estiloCajaContenido.appendChild(elementoHTML);
      }
    });
  }

  const comprado = document.querySelector(".comprado");
  function venderAnimal(nombre) {
    if (tienda.venderAnimal(nombre)) {
      actualizarInfo(nombre);
      comprado.classList.add("visible-comprado-mensaje");

      let mensajeComprado = setTimeout(() => {
        if (!comprado.classList.contains("visible-comprado-mensaje")) {
          clearTimeout(mensajeComprado);
        } else {
          comprado.classList.remove("visible-comprado-mensaje");
        }
      }, 5000);
    }
  }

  function actualizarInfo(nombre) {
    const animalDiv = document.querySelector(`[data-name=${nombre}]`);
    const parentNode = animalDiv.parentElement;

    let nodo = crearElementoAnimal(true, "imagenes/jaula.jpg", "Vacia");
    parentNode.insertBefore(nodo, animalDiv);
    parentNode.removeChild(animalDiv);
  }

  crearElementosAnimal(tienda.getJaulas());

  //   Eventos para los botones de comprar y mostrar Mas info

  const mostrarVentas = document.getElementById("mostrarVentas");

  mostrarVentas.addEventListener("click", () => {
    console.log(tienda.mostrarAnimalesVendidos());
  });

  // Evento para cambiar al hacer scrollbar
  const contenido = document.querySelector(".contenido");

  contenido.addEventListener("scroll", () => {
    const scrollTop = contenido.scrollTop;
    const scrollHeight = contenido.scrollHeight;
    const clientHeight = contenido.clientHeight;

    if (scrollTop === 0) {
      contenido.classList.remove("middle", "bottom");
    } else if (scrollTop + clientHeight >= scrollHeight) {
      // Scrollbar al final
      contenido.classList.add("bottom");
      contenido.classList.remove("middle");
    } else {
      // Scrollbar en el medio
      contenido.classList.add("middle");
      contenido.classList.remove("bottom");
    }
  });

  // Evento al hacer clic en la barra de busqueda
  const input = document.querySelector(".buscador input");
  const label = document.querySelector(".buscador label");

  input.addEventListener("focus", () => {
    label.classList.add("activado");
  });
  input.addEventListener("blur", () => {
    label.classList.remove("activado");
  });
});
