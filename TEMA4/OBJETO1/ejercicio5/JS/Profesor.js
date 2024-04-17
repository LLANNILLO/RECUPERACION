class Profesor extends Miembro {
  constructor(nombre, alta, estado, numeroAlumnos) {
    super(nombre, alta, estado);
    this.numeroAlumnos = numeroAlumnos;
  }
  cobrar() {
    console.log(`El profesor ${this.nombre} ha cobrado`);
  }
}
