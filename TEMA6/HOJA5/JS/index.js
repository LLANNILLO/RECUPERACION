/**
 *
 * @param {string} operacion
 */
function operar(operacion) {
  return eval(operacion);
}

window.addEventListener("load", () => {
  const valorPrevio = document.querySelector(".previo");
  const valorActual = document.querySelector(".actual");
  valorActual.textContent = "0";
  const botonesNumericos = Array.from(document.getElementsByName("numerico"));

  botonesNumericos.map((numerico) => {
    numerico.addEventListener("click", () => {
      if (valorActual.textContent === "0") {
        valorActual.textContent = numerico.value;
      } else {
        let valor = valorActual.textContent;
        valorActual.textContent = valor + numerico.value;
      }
    });
  });

  const botonesCalculo = Array.from(
    document.getElementsByName("operacionesSimples")
  );

  botonesCalculo.map((operador) => {
    operador.addEventListener("click", () => {
      let valorElegido;
      if (!valorPrevio.textContent) {
        valorElegido = valorActual.textContent + operador.value;
        valorActual.textContent = "";
        valorPrevio.textContent = valorElegido;
      } else {
        if (valorPrevio.textContent.includes("=")) {
          valorPrevio.textContent = valorActual.textContent + operador.value;
          valorActual.textContent = "";
        } else {
          if (!valorActual.textContent) {
            let longitud = valorPrevio.textContent.length;
            let operacion = valorPrevio.textContent.charAt(longitud - 1);
            valorPrevio.textContent = valorPrevio.textContent.replace(
              operacion,
              operador.value
            );
          } else {
            let operacion = valorPrevio.textContent + valorActual.textContent;
            let resultado = operar(operacion);
            valorPrevio.textContent = resultado + operador.value;
            valorActual.textContent = "";
          }
        }
      }
    });
  });

  const botonLimpiar = document.getElementById("borrar");

  botonLimpiar.addEventListener("click", () => {
    valorActual.textContent = "";
    valorPrevio.textContent = "";
  });

  const botonResultado = document.getElementById("calcular");

  botonResultado.addEventListener("click", () => {
    let resultado;
    if (valorPrevio.textContent.includes("^")) {
      resultado = operar(
        `${valorPrevio.textContent.slice(
          0,
          valorPrevio.textContent.length - 1
        )}**${valorActual.textContent}`
      );
    } else {
      resultado = operar(
        `${valorPrevio.textContent}${valorActual.textContent}`
      );
    }
    valorPrevio.textContent += valorActual.textContent + "=";
    valorActual.textContent = resultado;
  });

  const calculoEspecial = document.getElementById("especial");

  calculoEspecial.addEventListener("click", () => {
    let resultado = operar(`1/${valorActual.textContent}`);
    valorActual.textContent = resultado;
  });

  const calculoPotenciaDos = document.getElementById("potencia2");

  calculoPotenciaDos.addEventListener("click", () => {
    let resultado = operar(`${valorActual.textContent}**2`);
    valorActual.textContent = resultado;
  });

  const calculoPontecia = document.getElementById("potencia");

  calculoPontecia.addEventListener("click", () => {
    if (!valorPrevio.textContent) {
      valorPrevio.textContent = valorActual.textContent + "^";
      valorActual.textContent = "";
    }
  });

  const punto = document.getElementById("punto");

  punto.addEventListener("click", () => {
    if (!valorActual.textContent.includes(".")) {
      valorActual.textContent += punto.value;
    }
  });
});
