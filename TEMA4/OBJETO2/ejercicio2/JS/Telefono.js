class Telefono {
  constructor(marca, modelo, numero, ram, cpu) {
    this.marca = marca;
    this.modelo = modelo;
    this.numero = numero;
    this.ram = ram;
    this.cpu = cpu;
  }

  getMarca() {
    return this.marca;
  }

  getModelo() {
    return this.modelo;
  }
  getNumero() {
    return this.numero;
  }
  getRAM() {
    return this.ram;
  }
  getCPU() {
    return this.cpu;
  }

  getInfo() {
    let resultado = `
    Movil ${this.getMarca()}:${this.getModelo()}\n
    Numero: ${this.getNumero()}\n
    RAM: ${this.getRAM()}\n
    CPU: ${this.getCPU()}\n
    `;
    return resultado;
  }
}
