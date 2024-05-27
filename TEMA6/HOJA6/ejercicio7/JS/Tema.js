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
    let aleatorio = Math.floor(Math.random() * (3 - 1 + 1));
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
  compararFrases = (correccion, frase) => {
    // Extraer texto de fraseAleatoria
    let correcta = true;

    for (let i = 0; i < correccion.length; i++) {
      if (correccion[i] !== frase[i]) {
        console.log(
          `Diferencia encontrada en la posición ${i}: correccion="${correccion[i]}", frase="${frase[i]}"`
        );
        correcta = false;
      }
    }

    if (!correcta) {
    }
    return correcta;
  };

  // Función principal para corregir la frase y agregar un botón
  corregirFrase = (fraseResultado) => {
    // Llamar a la función para comparar las frases
    const correccion = this.extraerTextoEntreSpan(this.fraseAleatoria);
    // Extraer texto de fraseResultado
    const frase = this.extraerTextoEntreSpan(fraseResultado);

    if (!this.compararFrases(correccion, frase)) {
      alert("Te has confundido");
      const botonRepetir = document.getElementById("repetir");
      botonRepetir.style.visibility = "visible";
      botonRepetir.addEventListener("click", () => {
        this.repetir(correccion, frase);
      });
    } else {
      alert("La frase es correcta");
      const seccionBotones = document.querySelector("main section:last-child");
      seccionBotones.style.visibility = "hidden";
      var fraseCorregida = document.querySelector("[data-frase]");
      fraseCorregida.innerText = this.fraseAleatoria.replace(
        /<\/?span[^>]*>/g,
        ""
      );
    }
  };

  repetir(correccion, frase) {
    let palabrasCorrectas = [];
    for (let i = 0; i < correccion.length; i++) {
      if (correccion[i] === frase[i]) {
        // Mantener la opción en la nueva frase si coincide
        palabrasCorrectas.push(`${correccion[i]}`);
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
    this.fraseAleatoria = fraseRepeticion.join(" ");

    // Mostrar la frase actualizada en la consola
    var frase = document.querySelector("[data-frase]");
    frase.innerHTML = this.transmutarFrase();
  }
}
