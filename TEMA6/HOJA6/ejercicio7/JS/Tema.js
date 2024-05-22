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
    let frase = spanElement.parentNode;
    spanElement.setAttribute("id", "opcionActual");
    spanElement.innerText = liElementSelected;
  }
}
