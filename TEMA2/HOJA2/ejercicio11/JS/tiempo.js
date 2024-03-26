function tiempoHastaFinDeSemana(dia, hora, minutos) {
  var diaSemana = ["lunes", "martes", "miercoles", "jueves", "viernes"].indexOf(
    dia.toLowerCase()
  );

  console.log(diaSemana);
  var minutosRestantes = (4 - diaSemana) * 24 * 60 - (hora * 60 - minutos);

  minutosRestantes =
    minutosRestantes < 0 ? minutosRestantes * -1 : minutosRestantes;
  return minutosRestantes;
}

var diaSemana = "viernes";
var hora = 10;
var minutos = 30;

var minutosHastaFinDeSemana = tiempoHastaFinDeSemana(diaSemana, hora, minutos);
console.log("Minutos hasta el fin de semana: " + minutosHastaFinDeSemana);
