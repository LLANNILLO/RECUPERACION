class Cilindro {
  constructor(altura, radio) {
    this.altura = altura;
    this.radio = radio;
  }

  getArea() {
    let area = 2 * Math.PI * this.radio * (this.altura * this.radio);

    return area;
  }

  getVolumen() {
    let volumen = Math.PI * Math.pow(this.radio, 2) * this.altura;
    return volumen;
  }
}
