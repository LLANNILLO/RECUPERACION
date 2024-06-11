class Lavadora extends Electrodomestico {
  constructor(
    precioBase = 100,
    color = "blanco",
    consumoEnergetico = "F",
    peso = 5,
    carga = 5
  ) {
    super(precioBase, color, consumoEnergetico, peso);
    this.carga = carga;
  }

  //funcion para calcular el precio del electrodomestico
  precioFinal() {
    let precio = super.precioFinal();
    if (this.carga > 30) {
      precio += 50;
    }

    return precio;
  }
}
