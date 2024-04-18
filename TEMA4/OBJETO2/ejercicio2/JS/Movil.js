class Movil extends Telefono {
  constructor(marca, modelo, numero, ram, cpu, PIN, OS, espacio, aplicaciones) {
    super(marca, modelo, numero, ram, cpu);
    this.PIN = PIN;
    this.OS = OS;
    this.espacio = espacio;
    this.aplicaciones = aplicaciones;
  }

  getNumero() {
    let PINDado = prompt("PIN del movil");
    if (PINDado === this.getPIN()) return this.numero;
  }

  getPIN() {
    return this.PIN;
  }

  getOS() {
    return this.OS;
  }

  getEspacio() {
    return this.espacio;
  }
  getApps() {
    return this.aplicaciones;
  }

  getInfoMovil() {
    let resultado = this.getInfo();
    resultado += `
    PIN: ${this.getPIN()}\n
    Sistema operativo: ${this.getOS()}\n
    Espacio: ${this.getEspacio()}\n
    Apps: ${this.getApps()}\n
    `;
    return resultado;
  }
}
