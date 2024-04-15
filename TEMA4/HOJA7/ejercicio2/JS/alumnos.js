function pedirNombres() {
  var alumnos = [];

  let continuar = true;

  do {
    let nombreAlumno = prompt("Nombre del alumno");

    if (nombreAlumno === "fin") {
      alert("agregados todos los alumnos");
      continuar = false;
    } else if (nombreAlumno === "" || nombreAlumno === null) {
      alert("El nombre no es valido");
    } else {
      alumnos.includes(nombreAlumno)
        ? alert("El nombre del alumno ya existe")
        : alumnos.push(nombreAlumno);
    }
  } while (continuar);
  return alumnos;
}

/**
 *
 * @param {array} alumnos
 */
function ordenarAlumnos(alumnos) {
  let arrayPosiciones = [];

  let gruposAlumnos = new Map();

  let grupo = [];
  do {
    let posicion = Math.floor(Math.random() * alumnos.length - 1) + 1;
    if (!arrayPosiciones.includes(posicion)) {
      arrayPosiciones.push(posicion);
      grupo.push(alumnos[posicion]);
      console.log(arrayPosiciones);
      if (grupo.length === 3) {
        gruposAlumnos.set(`Grupo ${gruposAlumnos.size + 1}`, grupo);
        grupo = grupo.splice();
      }
    }
  } while (arrayPosiciones.length < alumnos.length);

  gruposAlumnos.set(`Grupo ${gruposAlumnos.size + 1}`, grupo);
  
  return gruposAlumnos;
}
var alumnos = pedirNombres();

var mapaAlumnos = ordenarAlumnos(alumnos);

console.log(mapaAlumnos);
