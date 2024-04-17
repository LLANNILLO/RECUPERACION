class Alumno extends Miembro {
  constructor(nombre, alta, estado, numeroAsignaturas) {
    super(nombre, alta, estado);
    this.numeroAsignaturas = numeroAsignaturas;
  }
  cobrar() {
    console.log(`Los alumnos no tienen sueldo`);
  }
}
