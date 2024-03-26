class Entrada {
  constructor(personas, diaSemana, tarjeta = false) {
    this.precioBase = 8;
    this.personas = personas;
    this.diaSemana = diaSemana.toLowerCase();
    this.tarjeta = tarjeta;
  }

  getPrecio() {
    let precioTotal;

    switch (this.diaSemana) {
      case "miercoles":
        this.precioBase = 5;
        precioTotal = this.personas * this.precioBase;
        break;
      case "jueves":
        if (this.personas % 2 === 0) {
          // Precio para parejas
          this.precioBase = 11 / 2;
        }
        precioTotal =
          Math.floor(this.personas / 2) * 11 +
          (this.personas % 2) * this.precioBase;
        break;
      default:
        precioTotal = this.personas * this.precioBase;
    }

    if (this.tarjeta) {
      precioTotal *= 0.9;
    }

    return `El precio de las entradas es de: ${precioTotal}€`;
  }
}
