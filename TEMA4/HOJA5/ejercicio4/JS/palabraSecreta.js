var palabraSecreta = "sargento";

function adivina(...palabras) {
  let resultado = palabraSecreta;

  for (let i = 0; i < resultado.length; i++) {
    if (!palabras.includes(resultado[i])) {
      resultado = resultado.replace(palabraSecreta[i], "-");
    }
  }

  return resultado;
}

console.log(adivina("a", "e", "i", "o", "u", "d", "n"));
