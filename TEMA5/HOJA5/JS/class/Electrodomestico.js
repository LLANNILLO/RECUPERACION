class Electrodomestico {
  consumoDefecto = "F";
  constructor(
    precioBase = 100,
    color = "blanco",
    consumoEnergetico = this.consumoDefecto,
    peso = 5
  ) {
    this.precioBase = precioBase;
    this.color = this.comprobarColor(color);
    this.consumoEnergetico = consumoEnergetico;
    this.peso = peso;
  }

  //   funcion para comprobar que la letra del consumo es la correcta
  /**
   *
   * @param {char} letra
   */
  comprobarConsumoEnergetico(letra) {}

  //funcion para comprobar que el color sea correcto
  /**
   *
   * @param {string} color
   */
  comprobarColor(color) {}

  //funcion para calcular el precio del electrodomestico

  precioFinal() {}
}
