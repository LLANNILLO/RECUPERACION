var textoIntroducido = prompt("Introduce tu texto para analizar");

//Proceso para hacer la extraccion de frases
/**
 *
 * @param {string} texto
 */
function extraerFrases(texto) {
  let frases = texto.split(".");

  let resultado = "<h1>Frases introducidas</h1>";

  frases.forEach((frase) => {
    resultado += `<div>${frase}</div>`;
  });

  return resultado;
}

function crearPaginaFrases() {
  var ventanaEmergente = window.open(
    "",
    "_blank",
    "popup=1,width=400,height=500"
  );

  ventanaEmergente.document.write(extraerFrases(textoIntroducido));

  setTimeout(() => {
    ventanaEmergente = ventanaEmergente.close();
    crearPaginaLongitudTexto();
  }, 10000);
}

crearPaginaFrases();

//Proceso para contar el numero total de caracteres que hay en el texto
/**
 *
 * @param {string} texto
 */
function cantidadCaracteres(texto) {
  let resultado = `<h1>Cantidad de caracteres</h1>
  <div>cantidadCaracteres = ${texto.length}</div>`;
  return resultado;
}

function crearPaginaLongitudTexto() {
  var ventanaEmergente = window.open(
    "",
    "_blank",
    `popup=1,width=400,height=400,top=${screenX},left=${screenY}`
  );
  ventanaEmergente.document.write(cantidadCaracteres(textoIntroducido));

  setTimeout(() => {
    ventanaEmergente = ventanaEmergente.close();
    crearPaginaPalabrasFrase();
  }, 5000);
}

//Proceso para mostrar numeradas las palabras de una frase
/**
 *
 * @param {string} texto
 */
function caracteresFrase(texto) {
  let frases = texto.split(".");
  let resultado = "<h1>Palabras de la frase</h1>";
  let continuar = true;
  do {
    let numeroPosicion = parseInt(
      prompt(
        `Numero de la frase[Longitud disponible: 0 - ${frases.length - 2}]`
      )
    );

    if (!isNaN(numeroPosicion)) {
      if (0 < numeroPosicion <= frases.length - 1) {
        let frase = frases[numeroPosicion];

        let palabras = frase.replace(" ", "").split("");
        let contador = 1;
        palabras.forEach((palabra) => {
          resultado += `<div>Palabra ${contador}: ${palabra}</div>`;
          contador++;
        });
        continuar = false;
      } else {
        alert("Excediste la longitud");
      }
    } else {
      alert("Valores no validos");
    }
  } while (continuar);
  return resultado;
}

function crearPaginaPalabrasFrase() {
  let fraseCaracteres = caracteresFrase(textoIntroducido);
  ventanaEmergente = window.open("", "_blank", `popup=1,width=400,height=400`);
  ventanaEmergente.document.write(fraseCaracteres);

  /* setTimeout(() => {
    ventanaEmergente = ventanaEmergente.close();
  }, 5000); */
}
