// Creación de instancias de animales con la clase Mascota
const animal1 = new Mascota(
  "Shakespeare", // Nombre del animal
  "Ciervae", // Especie del animal
  "mamifero", // Tipo del animal
  "Es un ciervo muy amable", // Descripción del animal
  "herbivoro", // Dieta del animal
  5, // Edad del animal
  "imagenes/ciervo.jpg" // Ruta de la imagen del animal
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
const animal6 = new Mascota(
  "Cuernudo",
  "Ciervae",
  "mamifero",
  "Este tio tiene mas cuernos que el novio de la Tussy",
  "herbivoro",
  5,
  "imagenes/ciervo.jpg"
);

// Creación de una instancia de la clase Tienda con capacidad para 15 jaulas y los animales previamente creados
const tienda = new Tienda(15, [
  animal1,
  animal2,
  animal3,
  animal4,
  animal5,
  animal6,
]);

// Evento que se ejecuta cuando la página se ha cargado completamente
window.addEventListener("load", () => {
  // Función para crear un elemento HTML con una clase específica
  function crearElementoConClase(tag, className) {
    const elemento = document.createElement(tag);
    if (className) {
      elemento.classList.add(className);
    }
    return elemento;
  }

  // Función para crear un contenedor de imagen
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

  // Función para crear un botón con un evento opcional
  function crearBoton(className, type, value, event) {
    const boton = crearElementoConClase("input", className);
    boton.type = type;
    boton.value = value;
    if (event) {
      boton.addEventListener("click", event);
    }
    return boton;
  }

  // Función para crear el contenedor de botones para cada animal
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

  // Función principal para crear el elemento que representa a un animal
  function crearElementoAnimal(vacia, imagen, nombre = null, especie = null) {
    const contenedorPrincipal = document.createElement("div");
    contenedorPrincipal.setAttribute("data-name", nombre);
    const animalContenedor = crearElementoConClase("div", "animal-contenedor");
    const animalDiv = crearElementoConClase("div", "animal");

    const figura = crearContenedorImagen(imagen);
    const nombreAnimal = crearTextoDiv("texto-animal", nombre);

    animalDiv.appendChild(figura);
    animalDiv.appendChild(nombreAnimal);

    if (!vacia) {
      const especieAnimal = crearTextoDiv(
        "texto-animal",
        `Especie: ${especie}`
      );
      const botonesAnimal = crearContenedorBotones(nombre);
      animalDiv.appendChild(especieAnimal);
      animalDiv.appendChild(botonesAnimal);
    }

    animalContenedor.appendChild(animalDiv);
    contenedorPrincipal.appendChild(animalContenedor);

    return contenedorPrincipal;
  }

  // Selección del contenedor principal donde se mostrarán los animales
  const estiloCajaContenido = document.querySelector(".estilo-caja-contenido");

  // Función para crear elementos de animales en el contenedor principal
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

  // Selección del elemento para mostrar el mensaje de compra
  const comprado = document.querySelector(".comprado");
  const ventasAnimales = Array.from(
    document.querySelectorAll(".cantidad-venta-animal")
  );
  console.log(tienda.mostrarAnimalesVendidos());

  // Función para actualizar la información de animales vendidos
  function animalesVendidosInfo() {
    let posicion = 1;
    for (let cantidad of tienda.mostrarAnimalesVendidos().values()) {
      ventasAnimales[posicion].innerHTML = cantidad.length;
      posicion++;
    }
  }

  animalesVendidosInfo();

  // Función para vender un animal y actualizar la interfaz
  function venderAnimal(nombre) {
    if (tienda.venderAnimal(nombre)) {
      actualizarInfoAnimal(nombre);
      comprado.classList.add("visible-comprado-mensaje");

      let mensajeComprado = setTimeout(() => {
        if (!comprado.classList.contains("visible-comprado-mensaje")) {
          clearTimeout(mensajeComprado);
        } else {
          comprado.classList.remove("visible-comprado-mensaje");
        }
      }, 2000);

      animalesVendidosInfo();
    }
  }

  // Función para actualizar la información del animal vendido
  function actualizarInfoAnimal(nombre) {
    const animalDiv = document.querySelector(`[data-name=${nombre}]`);
    const parentNode = animalDiv.parentElement;

    let nodo = crearElementoAnimal(true, "imagenes/jaula.jpg", "Vacia");
    parentNode.insertBefore(nodo, animalDiv);
    parentNode.removeChild(animalDiv);
  }

  crearElementosAnimal(tienda.getJaulas());

  // Evento para mostrar el diálogo de ventas
  const mostrarVentas = document.getElementById("mostrarVentas");
  const dialogDiv = document.querySelector(".ventas-animales");
  const cierre = document.querySelector(".cierre-ventas-animales");

  mostrarVentas.addEventListener("click", () => {
    dialogDiv.style.display = "flex";
  });

  cierre.addEventListener("click", () => {
    dialogDiv.removeAttribute("style");
  });

  // Evento para cambiar las clases del contenedor según el scroll
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

  // Evento para agregar y quitar clases al hacer foco en el input de búsqueda
  const input = document.querySelector(".buscador input");
  const label = document.querySelector(".buscador label");

  input.addEventListener("focus", () => {
    label.classList.add("activado");
  });
  input.addEventListener("blur", () => {
    label.classList.remove("activado");
  });
});
