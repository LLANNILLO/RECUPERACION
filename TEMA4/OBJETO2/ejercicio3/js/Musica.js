class Musica extends Aula {
  /**
   *
   * @param {string} identificador
   * @param {number} pupitres
   * @param {array} cursos
   * @param {number} instrumentos
   */
  constructor(identificador, pupitres, cursos, instrumentos) {
    super(identificador, pupitres, cursos);
    this.instrumentos = instrumentos;
  }

  getInstrumentos() {
    return this.instrumentos;
  }

  toString() {
    let resultado = this.getInfo();
    resultado += `Numero de instrumentos: ${this.getInstrumentos()}`;
    return resultado;
  }
}
