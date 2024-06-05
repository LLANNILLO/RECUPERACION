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
  const temasElegir = document.getElementById("temas-elegir");
  temasElegir;

  var vidas = 10;
  var palabraDescubrir;
  var jugando = false;
  var valoresSelect = Array.from(categorias.keys());

  valoresSelect.forEach((clave) => {
    let option = document.createElement("option");
    option.value = clave;
    option.text = clave;

    temasElegir.appendChild(option);
  });

  function generarPalabra(tema) {
    const palabraEncontrar = document.querySelector(".palabra-encontrar>div");

    if (palabraEncontrar.childElementCount > 0) {
      palabraEncontrar.innerHTML = "";
    }
    let palabras = categorias.get(tema);

    let posicion = palabraAleatoria(palabras.length) - 1;

    let palabra = palabras[posicion];

    palabraDescubrir = palabra;

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

    jugando = true;
  }

  temasElegir.addEventListener("change", () => {
    if (jugando) {
      alert("tienes que acabar el juego antes de poder cambiar de palabra");
    } else {
      generarPalabra(temasElegir.value);
      console.log(palabraDescubrir);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (jugando) {
      colocarPalabra(event.key);
    }
  });

  function colocarPalabra(tecla) {
    const letraContenedor = Array.from(
      document.querySelectorAll(".letra-contenedor")
    );

    let letras = palabraDescubrir.split("");

    let posiciones = [];

    for (let i = 0; i < letras.length; i++) {
      if (letras[i] === tecla) {
        posiciones.push(i);
      }
    }
    posiciones.forEach((posicion) => {
      let letraDiv = letraContenedor[posicion].querySelector(".letra");
      letraDiv.textContent = tecla;
    });
  }
});
