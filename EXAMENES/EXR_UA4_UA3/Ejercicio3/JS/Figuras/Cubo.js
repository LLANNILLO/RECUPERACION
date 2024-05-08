class Cubo {
  constructor(lado) {
    this.lado = lado;
  }

  getAreaLado() {
    let areaLado = Math.pow(this.lado, 2);
    return areaLado;
  }
  getArea() {
    let area = 6 * Math.pow(this.getAreaLado(), 2);
    return area;
  }

  getVolumen() {
    let volumen = Math.pow(this.getAreaLado(), 3);
    return volumen;
  }
}
