function segundoGrado(a, b, c) {
  let raiz = Math.sqrt(Math.pow(b, 2) - 4 * a * c);
  let resultado;
  if (raiz < 0) {
    resultado = "Esto da como resultado un numero complejo";
  } else {
    let denominador = 2 * a;
    let bInicio = b * -1;
    let resultadoPositivo = (bInicio + raiz) / denominador;
    let resultadoNegativo = (bInicio - raiz) / denominador;

    resultado = [resultadoPositivo, resultadoNegativo];
  }

  return resultado;
}

var ecuacion = segundoGrado(1, 4, -21);

console.log(ecuacion);
