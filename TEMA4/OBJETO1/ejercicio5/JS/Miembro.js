class Miembro {
  /**
   *
   * @param {string} nombre
   * @param {Date} alta
   * @param {boolean} estado
   */
  constructor(nombre, alta, estado) {
    this.nombre = nombre;
    this.alta = alta;
    this.estado = estado;
  }

  cobrar() {
    console.log(`El miembro ${this.nombre} ha cobrado`);
  }
}




