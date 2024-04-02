function trimestreFecha(mes) {
  let resultado;

  switch (mes) {
    case "enero":
    case "febrero":
    case "marzo":
      resultado = "Estamos en el trimestre 1";
      break;
    case "abril":
    case "mayo":
    case "junio":
      resultado = "Estamos en el trimestre 2";
      break;
    case "julio":
    case "agosto":
    case "septiembre":
      resultado = "Estamos en el trimestre 3";
      break;
    case "octubre":
    case "noviembre":
    case "diciembre":
      resultado = "Estamos en el trimestre 4";
      break;
  }
  return resultado;
}

function comprobarFecha(dia, mes, ano) {
  let meses =
    "enero febrero marzo abril mayo junio julio agosto septiembre octubre noviembre diciembre";

  let resultado = meses.includes(mes);

  if (dia < 0 || dia > 366) {
    resultado = false;
  }

  if (ano < 0) {
    resultado = false;
  }

  return resultado;
}

var dia = parseInt(prompt("¿Numero del dia?"));
var mes = prompt("¿Mes del año?");
var ano = parseInt(prompt("¿Año?"));

if (comprobarFecha(dia, mes, ano)) {
  let mesMinusculas = mes.toLowerCase();
  console.log(trimestreFecha(mesMinusculas));
} else {
  console.log("Fecha no valida");
}
