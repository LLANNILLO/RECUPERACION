class Bandera {
  constructor(alto, ancho, escudo = false) {
    this.alto = alto;
    this.ancho = ancho;
    this.escudo = escudo;
    this.precioEnvio = 3.25;
  }

  getPrecio() {
    let precio;
    precio = this.getPrecioArea() + this.precioEnvio;

    this.escudo ? (precio += 2.5) : precio;

    return `El precio total de la bandera es de ${precio}€`;
  }

  getPrecioArea() {
    let area = this.alto * this.ancho;
    let precioArea = area * 0.01;
    return precioArea;
  }
}
