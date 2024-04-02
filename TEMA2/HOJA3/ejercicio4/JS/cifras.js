function sumaCifras(numero) {
  let cifras = numeroCifras(numero);
  let resultado;
  if (cifras.length > 3) {
    resultado = "No puedes dar un numero mayor a 3 cifras";
  } else {
    suma = 0;
    cifras.forEach((numero) => {
      suma += numero;
    });
    resultado = `La suma de las cifras es ${suma}`;
  }
  return resultado;
}

function numeroCifras(numero) {
  let cifras = [];

  do {
    let cifra = numero % 10;
    numero /= 10;
    console.log(numero);
    var continuar = numero !== 0;
    cifras.push(cifra);
  } while (continuar);

  return cifras;
}

var numero = 111;

var sumaCifrasNumero = sumaCifras(numero);
console.log(sumaCifrasNumero);
