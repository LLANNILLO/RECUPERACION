class Vehiculo {
  /**
   *
   * @param {number} numeroRuedas
   * @param {number} CC
   */
  constructor(numeroRuedas, CC) {
    this.numeroRuedas = numeroRuedas;
    this.CC = CC;
  }

  getRuedas() {
    return this.numeroRuedas;
  }

  getCC() {
    return this.CC;
  }
}

var cicloMotor = new Vehiculo(2, 45);

var moto = "moto";
console.log(cicloMotor.getCC());

console.log(moto.CC);
console.log(moto.getRuedas());
