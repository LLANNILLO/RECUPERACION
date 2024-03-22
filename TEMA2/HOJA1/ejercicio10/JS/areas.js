function areaTriangulo() {
  let base = prompt("Valor de la base del triangulo");
  let altura = prompt("Valor de la altura del triangulo");
  let resultado = (base * altura) / 2;
  return resultado;
}

function areaRectangulo() {
  let base = prompt("Valor de la base del rectangulo");
  let altura = prompt("Valor de la altura del rectangulo");
  let resultado = base * altura;
  return resultado;
}

function areaCirculo() {
  let radio = prompt("Valor del radio del circulo");

  let operacion = Math.PI * Math.pow(radio, 2);
  let resultado = operacion.toFixed(2);
  return resultado;
}

function menu(eleccion) {
  let area;
  let continuar = true;
  eleccionToLowerCase = eleccion.toLowerCase();
  switch (eleccionToLowerCase) {
    case "triangulo":
      area = areaTriangulo();
      break;
    case "rectangulo":
      area = areaRectangulo();
      break;
    case "circulo":
      area = areaCirculo();
      break;

    case "salir":
      continuar = false;
      break;
    default:
      alert("Opcion no valida");
      break;
  }
  let resultado = new Map([
    ["area", area],
    ["continuar", continuar],
  ]);
  return resultado;
}

var resultado;
do {
  let eleccion = prompt(
    "Hayar las areas de:\nTriangulo\nRectangulo\nCirculo\nSalir"
  );
  resultado = menu(eleccion);
  area = resultado.get("area");
  continuar = resultado.get("continuar");
  if (area !== undefined) {
    alert(`El area resultante es: ${area}`);
  }
} while (continuar);
