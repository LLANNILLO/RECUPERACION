class Tecnologia extends Aula {
  /**
   *
   * @param {string} identificador
   * @param {number} pupitres
   * @param {array} cursos
   * @param {number} herramientas
   */
  constructor(identificador, pupitres, cursos, herramientas) {
    super(identificador, pupitres, cursos);
    this.herramientas = herramientas;
  }

  getHerramientas() {
    return this.herramientas;
  }

  toString() {
    let resultado = this.getInfo();
    resultado += `Numero de herramientas: ${this.getHerramientas()}`;
    return resultado;
  }
}
