/**
 *
 * @param  {...string} textos
 */
function anagrama(...textos) {
  let resultado = true;
  if (textos.length < 2) {
    alert("No has pasado los valores suficientes");
    resultado = false;
  } else {
    const primerTextoOrdenado = textos[0]
      .toLowerCase()
      .split("")
      .sort()
      .join("");

    for (let i = 1; i < textos.length; i++) {
      let textoOrdenado = textos[i].toLowerCase().split("").sort().join("");
      if (textoOrdenado !== primerTextoOrdenado) {
        // Si algún texto no es un anagrama, devolvemos false
        resultado = false;
      }
    }
  }
  return resultado;
}

console.log(anagrama("estanco", "acentos")); //return true
console.log(anagrama("piso", "piso")); //return true
console.log(anagrama("PAPA", "papa")); //return true
console.log(anagrama("PAPA", "mama")); //return false
