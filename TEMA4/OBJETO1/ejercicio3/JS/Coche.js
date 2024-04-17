class Coche {
  constructor(marca, modelo, fecha) {
    this.marca = marca;
    this.modelo = modelo;
    this.fecha = fecha;
  }
}

var coche1 = new Coche("Audi", "A4", "2007-07-17");
var coche2 = new Coche("Peugeot", "205", "1995-10-20");
var coche3 = new Coche("Volkswagen", "Golf", "2010-05-04");
var coche4 = new Coche("Opel", "Astra", "2010-12-07");

var arrayCoches = [coche1, coche2, coche3, coche4];
/**
 *
 * @param {array} arrayCoches
 */
function tablaCoches(arrayCoches) {
  document.write("<h1>Tabla de coches</h1>");
  document.write("<table>");
  document.write("<tr><th>Marca</th><th>Modelo</th><th>Fecha</th></tr>");

  arrayCoches.forEach((coche) => {
    document.write(
      `<tr><td>${coche.marca}</td><td>${coche.modelo}</td><td>${coche.fecha}</td></tr>`
    );
  });
  document.write("</table>");
}

tablaCoches(arrayCoches);
