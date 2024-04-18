var director = new Miembro("Alfonso Cuarón", new Date("2020-07-23"), true);
var profesor = new Profesor("Enrique Iglesias", new Date("6-6-6"), false, 20);
var alumno = new Alumno("Stephen Hawking", new Date("2002-02-20"), true, 12);

let arrayMiembros = [director, profesor, alumno];

arrayMiembros.forEach((miembro) => {
  if (miembro instanceof Miembro) {
    console.log(`
    Nombre: ${miembro.nombre}\n
    Fecha: ${miembro.alta.toString()},
    Estado: ${miembro.estado}
    Asignaturas: ${miembro.numeroAlumnos}
    `);
    miembro.cobrar();
  } else if (miembro instanceof Profesor) {
    console.log(`
    Nombre: ${miembro.nombre}\n
    Fecha: ${miembro.alta.toString()},
    Estado: ${miembro.estado}
    Alumnons: ${miembro.numeroAsignaturas}
    `);
    miembro.cobrar();
  } else {
    console.log(`
        Nombre: ${miembro.nombre}\n
        Fecha: ${miembro.alta.toString()},
        Estado: ${miembro.estado}
        Asignaturas: ${miembro.numeroAsignaturas}
        `);
    miembro.cobrar();
  }
});
