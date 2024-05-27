let span = {
  spanElementStart: "<span>",
  spanElementEnd: "</span>",
};

let list = {
  listElementStart: "<li>",
  listElementEnd: "</li>",
};

class Tema {
  constructor(frases, palabras) {
    this.generarFrase(frases, palabras);
  }

  generarFrase(frases, palabras) {
    let aleatorio = Math.floor(Math.random() * (frases.length - 1 + 1));
    this.fraseAleatoria = frases[aleatorio];
    this.palabrasAleatorias = palabras;
  }

  transmutarFrase() {
    let palabrasFrase = Array();
    this.fraseAleatoria.split(" ").forEach((palabra) => {
      if (palabra.includes(span.spanElementStart)) {
        palabrasFrase.push(span.spanElementStart + "..." + span.spanElementEnd);
      } else {
        palabrasFrase.push(palabra);
      }
    });
    return palabrasFrase.join(" ");
  }

  transmutarPalabras() {
    let palabras = Array();
    this.palabrasAleatorias.forEach((palabra) => {
      palabras.push(list.listElementStart + palabra + list.listElementEnd);
    });
    return palabras.join(" ");
  }

  rellenarHueco(spanElement, liElementSelected) {
    if (spanElement) {
      if (spanElement.hasAttribute("id")) {
        this.rellenarHueco(spanElement.nextElementSibling, liElementSelected);
      } else {
        spanElement.setAttribute("id", "opcionEscogida");
        spanElement.innerText = liElementSelected;
      }
    } else {
      alert("Ya has introducido todas las opciones");
    }
  }

  extraerTextoEntreSpan = (str) => {
    const regex = /<span[^>]*>(.*?)<\/span>/g;
    const matches = str.match(regex);
    return matches
      ? matches.map((val) => val.replace(/<\/?span[^>]*>/g, ""))
      : [];
  };

  // Función para comparar las frases
  /**
   *
   * @param {Array} correccion
   * @param {Array} frase
   * @returns
   */
  compararFrases = (correccion, frase) => {
    let correcta = true;
    console.log(correccion);
    console.log(frase);
    correccion.forEach((palabraCorrecta) => {
      if (correcta) {
        correcta = frase.includes(palabraCorrecta);
      }
    });

    return correcta;
  };

  // Función principal para corregir la frase y agregar un botón
  corregirFrase = (fraseResultado) => {
    // Llamar a la función para comparar las frases
    const correccion = this.extraerTextoEntreSpan(this.fraseAleatoria);
    // Extraer texto de fraseResultado
    const frase = this.extraerTextoEntreSpan(fraseResultado);

    if (!fraseResultado.includes("<span>...</span>")) {
      const botonRepetir = document.getElementById("repetir");
      if (!this.compararFrases(correccion, frase)) {
        alert("Te has confundido");
        botonRepetir.style.visibility = "visible";
        botonRepetir.addEventListener("click", () => {
          this.repetir(fraseResultado);
        });
      } else {
        alert("La frase es correcta");
        const seccionBotones = document.querySelector(
          "main section:last-child"
        );

        var fraseCorregida = document.querySelector("[data-frase]");
        fraseCorregida.innerText = this.fraseAleatoria.replace(
          /<\/?span[^>]*>/g,
          ""
        );
        botonRepetir.style.visibility = "hidden";
        seccionBotones.style.visibility = "hidden";
      }
    } else {
      alert("Todavia no has introducido todos los valores");
    }
  };

  repetir(fraseResultado) {
    // Llamar a la función para comparar las frases
    const correccion = this.extraerTextoEntreSpan(this.fraseAleatoria);
    // Extraer texto de fraseResultado
    const frase = this.extraerTextoEntreSpan(fraseResultado);
    const fraseDOM = document.querySelector(".frase");
    if (!fraseDOM.innerHTML.includes("<span>...</span>")) {
      let palabrasCorrectas = [];
      for (let i = 0; i < correccion.length; i++) {
        if (correccion[i] === frase[i]) {
          // Mantener la opción en la nueva frase si coincide
          palabrasCorrectas.push(`${correccion[i]}`);
        } else {
          palabrasCorrectas.push("<span>...</span>");
        }
      }

      let fraseParaRepetir = this.fraseAleatoria.split(" ");

      let posicion = 0;
      let fraseRepeticion = fraseParaRepetir.map((contenido) => {
        if (contenido.includes("<span>")) {
          if (palabrasCorrectas[posicion]) {
            const palabraSinSpan = palabrasCorrectas[posicion];
            posicion++;
            return palabraSinSpan;
          } else {
            return contenido;
          }
        } else {
          return contenido; // Mantener la palabra si no contiene span
        }
      });

      // Actualizar la frase original con las modificaciones
      let fraseNueva = fraseRepeticion.join(" ");

      this.fraseAleatoria = fraseNueva;
      // Mostrar la frase actualizada en la consola
      fraseDOM.innerHTML = this.transmutarFrase();
      var palabras = document.querySelector("[data-palabras]");
      palabras.innerHTML = "<ul>" + this.transmutarPalabras() + "</ul>";

      this.colocarPalabras();
    } else {
      alert("Todavia no has introducido todos los valores");
    }
  }

  colocarPalabras() {
    var list = document.querySelector("ul");

    list.childNodes.forEach((liElement) => {
      liElement.addEventListener("click", () => {
        var spanElement = document.querySelector("span");
        temaGeografia.rellenarHueco(spanElement, liElement.innerText);
        list.removeChild(liElement);
      });
    });
  }
}
