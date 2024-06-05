window.addEventListener("load", () => {
  const contenedorDibujo = document.querySelector(".contenedor-dibujo");
  const rejillas = document.getElementById("rejillas");
  const inputColor = document.querySelector("input[type=color]");
  const activador = document.querySelector(".activador");
  var pintando = false;
  // Funcion para dimensionar el juego del pinturillo
  function dimensionesDiv(contenedor) {
    do {
      var repetir = true;
      let promptAltura = prompt("Altura del contenedor de dibujo");
      let promptAnchura = prompt("Anchura del contenedor de dibujo");

      if (
        isNaN(promptAltura) ||
        isNaN(promptAnchura) ||
        !promptAltura ||
        !promptAnchura
      ) {
        alert("Valores introducidos no validos");
      } else {
        contenedor.style.height = promptAltura + "px";
        contenedor.style.width = promptAnchura + "px";
        contenedor.style.border = "1px solid";
        repetir = false;
      }
    } while (repetir);
  }
  // Funcion para agregar las casillas con su respectiva dimension calculada
  function numeroDeCasillas(contenedor) {
    do {
      var repetir = true;
      let promptNumeroCasillas = prompt(
        "Numero de filas y columnas que deseas crear"
      );

      if (isNaN(promptNumeroCasillas) || !promptNumeroCasillas) {
        alert("Numero de casillas no validos");
      } else {
        for (
          let count = 0;
          count < promptNumeroCasillas * promptNumeroCasillas;
          count++
        ) {
          let casilla = document.createElement("div");
          casilla.classList.add("casilla");
          contenedor.appendChild(casilla);
        }

        contenedor.setAttribute(
          "style",
          contenedor.getAttribute("style") +
            ` --casillas:${promptNumeroCasillas};`
        );
        repetir = false;
      }
    } while (repetir);
  }

  // Evento para iniciar y detener el pintado
  contenedorDibujo.addEventListener("click", (e) => {
    if (e.target.classList.contains("casilla")) {
      //cambio se valor segun si esta activado o no el pincel
      pintando = !pintando;
      if (pintando) {
        let color = inputColor.value;
        e.target.style.backgroundColor = color;
        activador.textContent = "Activado";
      } else {
        activador.textContent = "Desactivado";
      }
    }
  });

  // Evento para pintar las casillas al mover el ratón
  contenedorDibujo.addEventListener("mousemove", (e) => {
    if (pintando && e.target.classList.contains("casilla")) {
      let color = inputColor.value;
      e.target.style.backgroundColor = color;
    }
  });

  rejillas.addEventListener("click", () => {
    const casillas = document.querySelectorAll(".casilla");

    casillas.forEach((casilla) => {
      if (casilla.classList.contains("sin-bordes")) {
        casilla.classList.remove("sin-bordes");
      } else {
        casilla.classList.add("sin-bordes");
      }
    });
  });

  dimensionesDiv(contenedorDibujo);
  numeroDeCasillas(contenedorDibujo);
});
