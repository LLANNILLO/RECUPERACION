class Television extends Electrodomestico {
  constructor(
    precioBase = 100,
    color = "blanco",
    consumoEnergetico = "F",
    peso = 5,
    resolucion = 20,
    sintonizador = false
  ) {
    super(precioBase, color, consumoEnergetico, peso);
    this.resolucion = resolucion;
    this.sintonizador = sintonizador;
  }

  precioFinal(){
      
  }


}
