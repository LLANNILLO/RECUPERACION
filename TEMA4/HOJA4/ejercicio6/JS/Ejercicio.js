const estudiante1 = new Estudiante("Juan", [
  "Matemáticas",
  "Física",
  "Química",
  "Biología",
]);
const estudiante2 = new Estudiante("María", ["Matemáticas", "Biología"]);
const estudiante3 = new Estudiante("Pedro", ["Física", "Química"]);
const estudiante4 = new Estudiante("Laura", ["Matemáticas", "Química"]);

const estudiantes = [estudiante1, estudiante2, estudiante3, estudiante4];

const universidad = new Universidad(estudiantes);

// Obtener cursos únicos
const cursosUnicos = universidad.getCursosUnicos();
console.log("Cursos Únicos:");
console.log(cursosUnicos);

// Encontrar estudiantes por curso
const estudiantesMatematicas =
  universidad.getEstudiantesPorCurso("Matemáticas");
console.log("Estudiantes de Matemáticas:");
console.log(estudiantesMatematicas);

// Encontrar estudiantes por conjunto de cursos
const conjuntoCursos = new Set(["Matemáticas", "Química"]);
const estudiantesCompleto =
  universidad.getEstudiantesPorConjuntoDeCursos(conjuntoCursos);
console.log("Estudiantes que eligieron Matemáticas y Química:");
console.log(estudiantesCompleto);
