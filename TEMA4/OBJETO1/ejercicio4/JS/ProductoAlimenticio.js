class ProductoAlimenticio {
  /**
   *
   * @param {string} codigo
   * @param {string} nombre
   * @param {number} precio
   */
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }

  imprimeDatos() {
    let datos = `
    Producto: ${this.nombre}, Cod: ${this.codigo},\n
    Precio: ${this.precio} €
    `;

    return datos;
  }
}

var platanos = new ProductoAlimenticio(
  "024365878",
  "Platanos de Wakanda",
  219.99
);

var alozFlito = new ProductoAlimenticio(
  "04467238",
  "Aloz Chino Tle Delisias",
  450000000
);

var caballoFresco = new ProductoAlimenticio("02223558", "Caballo vivo", 40000);

var arrayAlimentos = [platanos, alozFlito, caballoFresco];

arrayAlimentos.forEach((alimento) => {
  console["log"](alimento.imprimeDatos());
});
