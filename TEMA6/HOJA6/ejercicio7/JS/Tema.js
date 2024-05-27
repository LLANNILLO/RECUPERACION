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
    let aleatorio = Math.floor(Math.random() * frases.length);
    this.fraseAleatoria = frases[aleatorio];
    this.palabrasAleatorias = palabras;
  }

  transmutarFrase() {
    // Reemplazar todas las palabras dentro de los spans con "..."
    return this.fraseAleatoria.replace(
      /<span>.*?<\/span>/g,
      "<span>...</span>"
    );
  }

  transmutarPalabras() {
    let palabras = [];
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

  compararFrases = (correccion, frase) => {
    if (correccion.length !== frase.length) return false;
    for (let i = 0; i < correccion.length; i++) {
      if (correccion[i] !== frase[i]) {
        return false;
      }
    }
    return true;
  };

  corregirFrase = (fraseResultado) => {
    const correccion = this.extraerTextoEntreSpan(this.fraseAleatoria);
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
    const correccion = this.extraerTextoEntreSpan(this.fraseAleatoria);
    const frase = this.extraerTextoEntreSpan(fraseResultado);
    const fraseDOM = document.querySelector(".frase");

    let palabrasCorrectas = correccion.map((palabraCorrecta, index) => {
      return palabraCorrecta === frase[index]
        ? palabraCorrecta
        : `<span>${palabraCorrecta}</span>`;
    });

    let fraseParaRepetir = this.fraseAleatoria.split(" ");
    let posicion = 0;
    let fraseRepeticion = fraseParaRepetir.map((contenido) => {
      if (contenido.includes("<span>")) {
        return palabrasCorrectas[posicion++];
      } else {
        return contenido;
      }
    });

    let fraseNueva = fraseRepeticion.join(" ");
    this.fraseAleatoria = fraseNueva;

    fraseDOM.innerHTML = this.transmutarFrase();
    var palabras = document.querySelector("[data-palabras]");
    palabras.innerHTML = "<ul>" + this.transmutarPalabras() + "</ul>";

    this.colocarPalabras();
  }

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
