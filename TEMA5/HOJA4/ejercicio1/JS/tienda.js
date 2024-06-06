class Tienda {
  constructor(animales, cantidadJaulas) {
    this.animales = animales;
    this.cantidadJaulas = cantidadJaulas;
    this.jaulas = new Map();
  }

  generarJaulas() {
    this.animales.forEach((animal) => {
      this.jaulas.set(animal.getNombre(), new Jaula("ocupada", animal));
    });

    for (let i = this.jaulas.size() - 1; i < this.cantidadJaulas; i++) {
      this.jaulas.set(`jaula${i}`, new Jaula("vacia"));
    }
  }

  venderAnimal() {

    

  }
}
