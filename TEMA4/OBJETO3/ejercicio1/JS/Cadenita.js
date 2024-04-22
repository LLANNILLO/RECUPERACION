class Cadenita {
  /**
   *
   * @param {string} texto
   * @param {int} longitud
   */
  constructor(texto, longitud) {
    this.texto = texto;
    this.longitud = longitud;
  }

  getPalabras() {
    return this.texto.split(" ");
  }

  Ristra() {
    let resultado = "<h1>Palabras introducidas</h1>";

    let palabras = this.getPalabras();

    let contador = 1;

    palabras.forEach((palabra) => {
      resultado += `<p>Palabra ${contador}: ${palabra}`;
      contador++;
    });

    return resultado;
  }

  Reves() {
    let palabras = this.getPalabras();
    return palabras.reverse().join(" ");
  }

  /**
   *
   * @param {string} palabraBuscar
   *
   */
  Buscar(palabraBuscar) {
    let palabras = this.getPalabras();
    let encontrar = palabras.find((palabra) => {
      palabra = palabra.toLowerCase();
      palabraBuscar = palabraBuscar.toLowerCase();
      return palabra === palabraBuscar;
    });

    return encontrar !== undefined; // Retorna true si se encontró la palabra, false si no.
  }

  Mayus() {
    let palabras = this.getPalabras();
    palabras.forEach((palabra) => {
      let primeraLetra = palabra.charAt(0);
      let posicion = palabras.indexOf(palabra);
      palabra = palabra.replace(primeraLetra, primeraLetra.toUpperCase() + "-");

      palabras.splice(posicion, 1, palabra);
    });

    return palabras;
  }
}
