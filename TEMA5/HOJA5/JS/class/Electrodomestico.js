class Electrodomestico {
  colores = ["blanco", "negro", "rojo", "azul", "gris"];
  constructor(
    precioBase = 100,
    color = "blanco",
    consumoEnergetico = this.consumoDefecto,
    peso = 5
  ) {
    this.precioBase = this.comprobarPrecioBase(precioBase);
    this.color = this.comprobarColor(color);
    this.consumoEnergetico = this.comprobarConsumoEnergetico(consumoEnergetico);
    this.peso = peso;
  }

  //   funcion para comprobar el valor del precio del electrodomestico
  /**
   *
   * @param {int} precio
   */
  comprobarPrecioBase(precio) {
    let resultado = precio;
    if (precio < 0) {
      resultado = 100;
    }

    return resultado;
  }

  //funcion para comprobar que el color sea correcto
  /**
   *
   * @param {string} color
   */
  comprobarColor(color) {
    let encontrado = this.colores.find(
      (colorDisponibles) => colorDisponibles === color
    );

    let disponible = color;
    if (!encontrado) {
      disponible = this.colores.at(0);
    }

    return disponible;
  }

  //   funcion para comprobar que la letra del consumo es la correcta
  /**
   *
   * @param {char} letra
   */
  comprobarConsumoEnergetico(letra) {
    let consumoPatron = /^[A-F]{1}$/;
    let resultado = letra;
    if (!consumoPatron.test(letra)) {
      resultado = "F";
    }

    return resultado;
  }

  //funcion para calcular el precio del electrodomestico

  precioFinal() {
    let precioConsumo;

    if (this.consumoEnergetico === "F") {
      precioConsumo = 10;
    } else if (this.consumoEnergetico === "E") {
      precioConsumo = 30;
    } else if (this.consumoEnergetico === "D") {
      precioConsumo = 50;
    } else if (this.consumoEnergetico === "C") {
      precioConsumo = 60;
    } else if (this.consumoEnergetico === "B") {
      precioConsumo = 80;
    } else {
      precioConsumo = 100;
    }

    let precioPeso;

    if (this.peso <= 19) {
      precioPeso = 10;
    } else if (this.peso <= 49) {
      precioPeso = 50;
    } else if (this.peso <= 79) {
      precioPeso = 80;
    } else {
      precioPeso = 100;
    }

    return precioConsumo + precioPeso + this.precioBase;
  }
}
