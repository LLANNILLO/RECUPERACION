/**
 *
 * @param  {...string} textos
 */
function anagrama(...textos) {
  const primerTextoOrdenado = textos[0].toLowerCase().split("").sort().join("");
  let resultado = true;

  for (let i = 1; i < textos.length; i++) {
    let textoOrdenado = textos[i].toLowerCase().split("").sort().join("");
    if (textoOrdenado !== primerTextoOrdenado) {
      // Si algún texto no es un anagrama, devolvemos false
      resultado = false;
    }
  }

  // Si todos los textos son anagramas, devolvemos true
  return resultado;
}

console.log(anagrama("caca", "acac"));
