class Tienda {
  // constructor de la tienda
  constructor(cantidadJaulas, animales) {
    this.animales = animales;
    this.cantidadJaulas = cantidadJaulas;

    // mapa con todas las jaulas que se van a crear en la tienda
    this.jaulas = new Map();
    // array con los animales vendidos, iniciado vaciado
    this.animalesVendidos = new Map([
      ["Ciervae", []],
      ["Bos taurus", []],
      ["Cocodylidae", []],
      ["Panthera Leo", []],
      ["Phoenicopterus", []],
    ]);

    // emplear la funcion de generacion de Jaulas
    this.generarJaulas();
  }

  // Funcion para generar las jaulas
  generarJaulas() {
    // por cada animal, al principio se crearan sus jaulas respectivas
    this.animales.forEach((animal) => {
      // si no se excede la cantidad de jaulas por la cantidad de animales, se introducira el animal
      if (this.jaulas.size < this.cantidadJaulas) {
        this.jaulas.set(animal.getNombre(), new Jaula("ocupada", animal));
      }
    });

    // Ahora se crean el resto de jaulas
    for (let i = this.jaulas.size; i < this.cantidadJaulas; i++) {
      this.jaulas.set(`jaula${i + 1}`, new Jaula("vacia"));
    }
  }

  // Obtener las jaulas creadas
  getJaulas() {
    return this.jaulas;
  }

  venderAnimal(nombreAnimal) {
    let cierto = false;
    const jaulas = [...this.jaulas.values()];

    const jaula = jaulas.find((jaula) => {
      return (
        jaula.getEstado() === "ocupada" &&
        jaula.getAnimal().getNombre() === nombreAnimal
      );
    });

    if (jaula) {
      let animal = jaula.getAnimal();

      this.agregarAnimalVendidoAEspecie(animal);
      jaula.setEstado("vacia");
      jaula.setAnimal(undefined);
      cierto = true;
    }

    return cierto;
  }

  // Funcion para agregar un animal al array de ventas
  agregarAnimalVendidoAEspecie(animal) {
    let especie = animal.getEspecie();

    this.animalesVendidos.get(especie).push(animal);
  }

  mostrarAnimalesVendidos() {
    return this.animalesVendidos;
  }
}
