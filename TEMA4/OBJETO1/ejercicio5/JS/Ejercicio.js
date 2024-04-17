var Director = new Miembro("Alfonso Cuarón", new Date("2020-07-23"), true);
var Profesor = new Profesor("Enrique Iglesias", new Date("6-6-6"), false, 2000);

var Alumno = new Alumno("Stephen Hawking", new Date("2002-02-20"), true, 1200);

let arrayMiembros = [Director, Profesor, Alumno];

arrayMiembros.forEach((miembro) => {
  if (miembro instanceof Miembro) {
    console.log(`
    Nombre: ${miembro.nombre}\n
    Fecha: ${miembro.fecha.toString()},
    Estado: ${miembro.estado}
    Asignaturas: ${miembro.numeroAlumnos}
    `);
  } else if (miembro instanceof Profesor) {
    console.log(`
    Nombre: ${miembro.nombre}\n
    Fecha: ${miembro.fecha.toString()},
    Estado: ${miembro.estado}
    Alumnons: ${miembro.numeroAsignaturas}
    `);
  } else {
    console.log(`
        Nombre: ${miembro.nombre}\n
        Fecha: ${miembro.fecha.toString()},
        Estado: ${miembro.estado}
        Asignaturas: ${miembro.numeroAsignaturas}
        `);
  }
});
