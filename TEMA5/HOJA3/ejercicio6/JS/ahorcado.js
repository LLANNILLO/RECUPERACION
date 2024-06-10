var categorias = new Map([
  [
    "Animales",
    [
      "perro",
      "rinoceronte",
      "raton",
      "elefante",
      "gallo",
      "vaca",
      "asno",
      "burro",
    ],
  ],
  [
    "Comidas",
    [
      "Hamburguesa",
      "pizza",
      "patatas fritas",
      "huevo",
      "kebab",
      "tarta de queso",
      "pulpo gallego",
      "empanada gallega",
    ],
  ],
  [
    "Filosofos",
    [
      "Socrates",
      "Platon",
      "Aristoteles",
      "Immanuel Kant",
      "Friedrich Nietzsche",
      "Martin Heidegger",
      "Tomas de Aquino",
      "Rene Descartes",
    ],
  ],
  [
    "Paises",
    [
      "Botswana",
      "Seychelles",
      "Nauru",
      "Vanuata",
      "Kiribati",
      "Argentina",
      "Tuvalu",
      "Tayikistan",
    ],
  ],
  [
    "Objetos",
    [
      "Coche",
      "Lunala",
      "Dysania",
      "Vagitus",
      "Tenesmo rectal",
      "Cuesco",
      "Lemniscate",
      "Casorio",
    ],
  ],
]);

function palabraAleatoria(limite) {
  return Math.floor(Math.random() * limite) + 1;
}

window.addEventListener("load", () => {
  // selector de los temas
  const temasElegir = document.getElementById("temas-elegir");
  // vidas totales
  var vidas = 10;
  // palabra a descubrir
  var palabraDescubrir;
  var jugando = false;
  // claves de las categorias
  var valoresSelect = Array.from(categorias.keys());

  const vidasRestantes = document.querySelector(".vidas");
  vidasRestantes.textContent = vidas;

  // agregar las posibles categorias de palabras
  valoresSelect.forEach((clave) => {
    let option = document.createElement("option");
    option.value = clave;
    option.text = clave;
    temasElegir.appendChild(option);
  });

  // funcion para generar la palabra a resolver
  function generarPalabra(tema) {
    const palabraEncontrar = document.querySelector(".palabra-encontrar>div");

    // si ya tiene una palabra eliminarla para los proximos juegos
    if (palabraEncontrar.childElementCount > 0) {
      palabraEncontrar.innerHTML = "";
    }

    // generar una palabra a descubrir de forma aleatoria sobre el tema seleccionado
    let palabras = categorias.get(tema);
    let posicion = palabraAleatoria(palabras.length) - 1;
    let palabra = palabras[posicion];
    palabraDescubrir = palabra;

    // div de las letras que tiene la palabra
    let letras = palabra.split("");
    letras.forEach(() => {
      let letraContenedor = document.createElement("div");
      let letra = document.createElement("div");
      let soporte = document.createElement("div");

      letraContenedor.classList.add("letra-contenedor");
      letra.classList.add("letra");
      soporte.classList.add("soporte");

      letraContenedor.appendChild(letra);
      letraContenedor.appendChild(soporte);
      palabraEncontrar.appendChild(letraContenedor);
    });

    // ahora estamos jugando
    jugando = true;
  }

  temasElegir.addEventListener("change", () => {
    if (jugando) {
      alert("tienes que acabar el juego antes de poder cambiar de palabra");
    } else {
      generarPalabra(temasElegir.value);
    }
  });

  // si se pulsa una tecla que no sea Alt,Ctrl,windows,etc... intentan colocarla en la letra
  document.addEventListener("keydown", (event) => {
    if (jugando) {
      // Verificar si la tecla presionada es una letra o un número
      if (/^[a-zA-Z0-9]$/.test(event.key)) {
        colocarPalabra(event.key.toLowerCase());
        vidasRestantes.textContent = vidas;
      }
    }
  });

  // funcion para colocar la palabra
  function colocarPalabra(tecla) {
    if (vidas > 0) {
      const letraContenedor = Array.from(
        document.querySelectorAll(".letra-contenedor")
      );
      let coincidencia = false;
      let letras = palabraDescubrir.split("");

      let posiciones = [];
      for (let i = 0; i < letras.length; i++) {
        if (letras[i] === tecla) {
          posiciones.push(i);
          coincidencia = true;
        }
      }

      if (coincidencia) {
        posiciones.forEach((posicion) => {
          let letraDiv = letraContenedor[posicion].querySelector(".letra");
          letraDiv.textContent = tecla;
        });
      } else {
        vidas--;
        const primeraVida = document.getElementById("vidas").firstElementChild;
        vidasRestantesMostrar(primeraVida);
      }
    } else {
      alert("has perdido");
    }
  }

  // funcion para modificar las vidas que le restan al jugador
  function vidasRestantesMostrar(elementoVida) {
    if (elementoVida.classList.contains("restada")) {
      vidasRestantesMostrar(elementoVida.nextElementSibling);
    } else {
      elementoVida.classList.add("restada");
    }
  }
});
