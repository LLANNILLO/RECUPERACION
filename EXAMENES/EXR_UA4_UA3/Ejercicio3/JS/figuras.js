do {
  var tipoDeCalculo = parseInt(
    prompt("Elige tipo de calculo:\n1: Area\n2: Volumen")
  );
  var calculo;
  var repetir = true;

  if (!isNaN(tipoDeCalculo)) {
    switch (tipoDeCalculo) {
      case 1:
        calculo = 1;
        repetir = false;
        break;
      case 2:
        calculo = 2;
        repetir = false;
        break;

      default:
        alert("Error, valor no valido");
        break;
    }
  } else {
    alert("Por favor, introduce 1 o 2 segun el calculo que desees realizar");
  }
} while (repetir);

do {
  var tipoDeCalculo = parseInt(
    prompt(
      "Elige una figura de calculo:\n1: Cilindro\n2: Esfera\n3: Cono\n4: Cubo"
    )
  );
  var figura;

  var repetir = true;

  if (!isNaN(tipoDeCalculo)) {
    switch (tipoDeCalculo) {
      case 1:
        figura = crearCilindro();
        repetir = false;
        break;
      case 2:
        figura = crearEsfera();
        repetir = false;
        break;
      case 3:
        figura = crearCono();
        repetir = false;
        break;
      case 4:
        figura = crearCubo();
        repetir = false;
        break;

      default:
        alert("Error, valor no valido");
        break;
    }
  } else {
    alert("Por favor, introduce los valores validos (1-4)");
  }
} while (repetir);

function crearCilindro() {
  let continuar = true;
  do {
    let altura = parseInt(prompt("Altura Cilindro:"));
    let radio = parseInt(prompt("Radio Cilindro:"));
    var figura = new Cilindro(altura, radio);

    if (!isNaN(altura) && !isNaN(radio)) {
      continuar = false;
    } else {
      alert("valores no validos, vuelve a introducirlos");
    }
  } while (continuar);
  return figura;
}

function crearEsfera() {
  let continuar = true;
  do {
    let radio = parseInt(prompt("Radio Esfera:"));
    var figura = new Esfera(radio);

    if (!isNaN(radio)) {
      continuar = false;
    } else {
      alert("valores no validos, vuelve a introducirlos");
    }
  } while (continuar);
  return figura;
}

function crearCono() {
  let continuar = true;
  do {
    let altura = parseInt(prompt("Altura Cono:"));
    let radio = parseInt(prompt("Radio Cono:"));
    var figura = new Cono(altura, radio);

    if (!isNaN(altura) && !isNaN(radio)) {
      continuar = false;
    } else {
      alert("valores no validos, vuelve a introducirlos");
    }
  } while (continuar);
  return figura;
}

function crearCubo() {
  let continuar = true;
  do {
    let lado = parseInt(prompt("Longitud lado Cubo:"));
    if (!isNaN(lado)) {
      continuar = false;
      var figura = new Cubo(lado);
    } else {
      alert("valores no validos, vuelve a introducirlos");
    }
  } while (continuar);
  return figura;
}

var resultado = calculo === 1 ? figura.getArea() : figura.getVolumen();

console.log(resultado.toFixed(2));
