function contarSegundos(dias, horas, minutos) {
  const validacion = comprobacion(dias, horas, minutos);
  let segundosTotales = 0;
  if (validacion) {
    let segundosDias = dias * 24 * 60 * 60;
    let segundosHoras = horas * 60 * 60;
    let segundosMinutos = minutos * 60;
    segundosTotales = segundosDias + segundosHoras + segundosMinutos;
  }

  return segundosTotales;
}

function comprobacion(dias, horas, minutos) {
  // Comprobación de valores numéricos
  if (isNaN(dias) || isNaN(horas) || isNaN(minutos)) {
    alert("Los días, horas y minutos deben ser valores numéricos");
    return false;
  }

  // Comprobación de valores no negativos
  if (dias < 0 || horas < 0 || minutos < 0) {
    alert("Los días, horas y minutos no pueden ser negativos");
    return false;
  }

  // Todos los criterios cumplidos, devuelve verdadero
  return true;
}

var dias = prompt("¿Cuántos dias tenemos?");
var horas = prompt("¿Cuántas horas tenemos?");
var minutos = prompt("¿Cuántos minutos tenemos?");

alert(
  `El numero de segundos obtenidos son: ${contarSegundos(dias, horas, minutos)}`
);
