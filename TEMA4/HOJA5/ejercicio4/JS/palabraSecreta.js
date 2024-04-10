var palabraSecreta = "secreto";

function adivina(...palabras) {
  let resultado = palabraSecreta;

  for (let i = 0; i < palabraSecreta.length; i++) {
    if (!palabras.includes(palabraSecreta[i])) {
      resultado = resultado.replace(palabraSecreta[i], "-");
    }
  }

  return resultado;
}

console.log(adivina("a", "e", "i", "o", "u", "d", "n"));
