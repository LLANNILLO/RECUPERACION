class Universidad {
  constructor(estudiantes) {
    this.estudiantes = estudiantes;
  }

  getCursosUnicos() {
    let cursos = new Set();
    this.estudiantes.forEach((estudiante) => {
      estudiante.getCursos().forEach((curso) => {
        cursos.add(curso);
      });
    });
    return cursos;
  }

  getEstudiantesPorCurso(curso) {
    let estudiantes = [];
    this.estudiantes.forEach((estudiante) => {
      if (estudiante.getCursos().includes(curso)) {
        estudiantes.push(estudiante.getNombre());
      }
    });
    return estudiantes;
  }

  getEstudiantesPorConjuntoDeCursos(conjuntoCursos) {
    let estudiantes = [];
    this.estudiantes.forEach((estudiante) => {
      const cursosEstudiante = estudiante.getCursos();
      // Verificar si el estudiante tiene todos los cursos del conjunto dado
      let tieneTodosLosCursos = true;
      conjuntoCursos.forEach((curso) => {
        if (!cursosEstudiante.includes(curso)) {
          tieneTodosLosCursos = false;
        }
      });
      // Si el estudiante tiene todos los cursos del conjunto, lo agregamos al resultado
      if (tieneTodosLosCursos) {
        estudiantes.push(estudiante);
      }
    });
    return estudiantes;
  }
}
