class Cono {
  constructor(altura, radio) {
    this.altura = altura;
    this.radio = radio;
    this.g = Math.sqrt(Math.pow(this.altura) + Math.pow(this.radio));
  }

  getArea() {
    let area = Math.PI * this.radio + Math.PI * this.radio * this.g;

    return area;
  }

  getVolumen() {
    let volumen = (Math.PI * Math.pow(this.radio, 2) * this.altura) / 3;

    return volumen;
  }
}
