function operaciones(...valores) {
  let ultimoValor = arguments.length - 1;
  let penultimoValor = arguments.length - 2;
  let resultados = new Map([
    ["suma", suma(valores)],
    ["media aritmetica", media(valores)],
    ["multiplicacion", multiplicacion(arguments[0], arguments[ultimoValor])],
    ["division", division(arguments[1], arguments[penultimoValor])],
  ]);
  return resultados;
}

const suma = (valores) => {
  let suma = 0;

  for (let i = 0; i < valores.length; i++) {
    suma += valores[i];
  }

  return suma;
};

const media = (valores) => {
  let suma = 0;
  for (let i = 0; i < valores.length; i++) {
    suma += valores[i];
  }

  let media = Number.parseFloat(suma / valores.length).toFixed(1);

  return media;
};

const multiplicacion = (primero, ultimo) => {
  let resultado = primero * ultimo;
  return resultado;
};

const division = (segundo, penultimo) => {
  let resultado = Number.parseFloat(segundo / penultimo).toFixed(1);
  return resultado;
};

console.log(operaciones(1, 2, 3, 4));
