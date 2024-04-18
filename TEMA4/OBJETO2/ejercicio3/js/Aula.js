class Aula {
  /**
   *
   * @param {string} identificador
   * @param {number} pupitres
   * @param {array} cursos
   */
  constructor(identificador, pupitres, cursos) {
    this.identificador = identificador;
    this.pupitres = pupitres;
    this.cursos = cursos;
  }

  getIdentificador() {
    return this.identificador;
  }

  getPupitre() {
    return this.pupitres;
  }

  getCursos() {
    return this.cursos.join("\n\t");
  }

  getInfo() {
    let resultado = `
      Aula id: ${this.getIdentificador()}\n
      Numero de pupitres: ${this.getPupitre()}\n
      Cursos:\n\t${this.getCursos()}\n
      `;

    return resultado;
  }

  toString() {
    return this.getInfo();
  }
}
