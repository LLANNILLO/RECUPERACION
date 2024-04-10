var asistencia = new Map();

function asistenciaClase(nombreEstudiante) {
  var asistenciaClase = Math.random();
  asistencia.set(nombreEstudiante, asistenciaClase);
}

const estudiantes = ["Samuel", "David", "Hugo", "Lucía", "Manuel", "Victor"];

estudiantes.forEach((estudiante) => {
  asistenciaClase(estudiante);
});

asistencia.forEach((asistenciaClase, nombre) => {
  console.log(`${nombre}: ${asistenciaClase < 0.8 ? "Presente" : "Ausente"}`);
});
