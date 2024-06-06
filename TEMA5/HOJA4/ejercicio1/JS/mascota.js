class Mascota {
  constructor(
    nombre,
    especie,
    tipoAnimal,
    descripcion,
    alimentacion,
    edad,
    imagen
  ) {
    this.nombre = nombre;
    this.tipoAnimal = tipoAnimal;
    this.especie = especie;
    this.descripcion = descripcion;
    this.alimentacion = alimentacion;
    this.edad = edad;
    this.imagen = imagen;
  }

  getNombre() {
    return this.nombre;
  }
  getTipoAnimal() {
    return this.tipoAnimal;
  }
  getEspecie() {
    return this.especie;
  }
  getDescripcion() {
    return this.descripcion;
  }
  getAlimentacion() {
    return this.alimentacion;
  }
  getEdad() {
    return this.edad;
  }
  getImagen() {
    return this.imagen;
  }
}
