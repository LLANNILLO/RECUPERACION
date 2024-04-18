class Fijo extends Telefono {
  constructor(marca, modelo, numero, ram, cpu, teclas) {
    super(marca, modelo, numero, ram, cpu);
    this.teclas = teclas;
  }

  getTeclas() {
    return this.teclas;
  }
  getInfoFijo() {
    let resultado = this.getInfo();
    resultado += `Numero de teclas: ${this.getTeclas()}\n`;
    return resultado;
  }
}
