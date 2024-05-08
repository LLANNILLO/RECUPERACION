class Esfera {
  constructor(radio) {
    this.radio = radio;
  }

  getArea() {
    let area = 4 * Math.PI * Math.pow(this.radio, 2);

    return area;
  }

  getVolumen() {
    let volumen = (Math.PI * Math.pow(this.radio, 3) * 4) / 3;
    return volumen;
  }
}
