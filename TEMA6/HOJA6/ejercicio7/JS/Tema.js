// Definición de un objeto para los elementos <span>
let span = {
  spanElementStart: "<span>",
  spanElementEnd: "</span>",
};

// Definición de un objeto para los elementos <li>
let list = {
  listElementStart: "<li>",
  listElementEnd: "</li>",
};

// Definición de la clase Tema
class Tema {
  // Constructor de la clase que recibe frases y palabras
  constructor(frases, palabras) {
    this.generarFrase(frases, palabras);
  }

  // Método para generar una frase aleatoria y almacenar las palabras aleatorias
  generarFrase(frases, palabras) {
    let aleatorio = Math.floor(Math.random() * frases.length);
    this.fraseAleatoria = frases[aleatorio];
    this.palabrasAleatorias = palabras;
  }

  // Método para transmutar la frase, reemplazando el contenido dentro de los <span> con "..."
  transmutarFrase() {
    return this.fraseAleatoria.replace(
      /<span>.*?<\/span>/g,
      "<span>...</span>"
    );
  }

  // Método para generar una lista de palabras con etiquetas <li>
  transmutarPalabras() {
    let palabras = [];
    this.palabrasAleatorias.forEach((palabra) => {
      palabras.push(list.listElementStart + palabra + list.listElementEnd);
    });
    return palabras.join(" ");
  }

  // Método para rellenar el hueco de un <span> con una palabra seleccionada de la lista
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

  // Método para extraer el texto dentro de los <span>
  extraerTextoEntreSpan = (str) => {
    const regex = /<span[^>]*>(.*?)<\/span>/g;
    const matches = str.match(regex);
    return matches
      ? matches.map((val) => val.replace(/<\/?span[^>]*>/g, ""))
      : [];
  };

  // Método para comparar dos arrays de frases
  compararFrases = (correccion, frase) => {
    if (correccion.length !== frase.length) return false;
    for (let i = 0; i < correccion.length; i++) {
      if (correccion[i] !== frase[i]) {
        return false;
      }
    }
    return true;
  };

  // Método para corregir la frase comparando la frase original con la resultado
  corregirFrase = (fraseResultado) => {
    // Extraer el texto dentro de los <span> de la frase original y la frase resultado
    const correccion = this.extraerTextoEntreSpan(this.fraseAleatoria);
    const frase = this.extraerTextoEntreSpan(fraseResultado);

    // Comprobar si la frase resultado aún contiene un <span> sin completar
    if (!fraseResultado.includes("<span>...</span>")) {
      const botonRepetir = document.getElementById("repetir");

      // Comparar las frases extraídas
      if (!this.compararFrases(correccion, frase)) {
        alert("Te has confundido");
        botonRepetir.style.visibility = "visible";

        // Añadir un evento al botón de repetir para intentar de nuevo
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
    // extraer las respuestas dentro de la frase correcta
    const correccion = this.extraerTextoEntreSpan(this.fraseAleatoria);
    // extraer las respuestas de la frase compuesta
    const frase = this.extraerTextoEntreSpan(fraseResultado);
    //obtener el elemento del DOM
    const fraseDOM = document.querySelector(".frase");

    // crear un array a traves de la funcion map
    let palabrasCorrectas = correccion.map((palabraCorrecta, index) => {
      /*
      si las palabras coinciden se mantiene la respuesta, 
      en cualquier otro caso envolvemos la respuesta en un span para volver a los ...
      */
      return palabraCorrecta === frase[index]
        ? palabraCorrecta
        : `<span>${palabraCorrecta}</span>`;
    });

    // Usar una expresión regular para dividir la frase en palabras y elementos <span>
    let regex = /<span>.*?<\/span>|[^<]+/g;
    let fraseParaRepetir = this.fraseAleatoria.match(regex);
    let posicion = 0;
    //componemos la nueva frase con las respuestas correctas y las erroneas
    let fraseRepeticion = fraseParaRepetir.map((contenido) => {
      if (contenido.startsWith("<span>") && contenido.endsWith("</span>")) {
        return palabrasCorrectas[posicion++];
      } else {
        return contenido;
      }
    });

    let fraseNueva = fraseRepeticion.join(" ");
    //actualizamos la frase aleatoria
    this.fraseAleatoria = fraseNueva;
    //invocamos a la funcion de transmutarFrase
    fraseDOM.innerHTML = this.transmutarFrase();

    // colocamos las palabras
    var palabras = document.querySelector("[data-palabras]");
    palabras.innerHTML = "<ul>" + this.transmutarPalabras() + "</ul>";

    //invocamos a la funcion para colocar las palabras con sus eventos correspondientes
    this.colocarPalabras();
  }
  // Método para colocar palabras en la lista y permitir que se seleccionen
  colocarPalabras() {
    var list = document.querySelector("ul");

    list.childNodes.forEach((liElement) => {
      liElement.addEventListener("click", () => {
        var spanElement = document.querySelector("span");
        this.rellenarHueco(spanElement, liElement.innerText);
        list.removeChild(liElement);
      });
    });
  }
}
