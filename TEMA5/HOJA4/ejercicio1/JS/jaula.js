class Jaula {
  constructor(estado, animal = undefined) {
    this.estado = estado;
    this.animal = animal;
  }

  setEstado(estado) {
    this.estado = estado;
  }

  getEstado() {
    return this.estado;
  }

  setAnimal(animal) {
    this.animal = animal;
  }

  getAnimal() {
    return this.animal;
  }
}
