function letraDNI(numero) {
  let letras = "TRWAGMYFPDXBNJZSQVHLCKE";
  let numeroPrompt = parseFloat(numero);
  if (isNaN(numeroPrompt) || numeroPrompt < 0 || numeroPrompt > 99999999) {
    return `Digitos no validos`;
  }

  let resto = numeroPrompt % 23;

  let letraCorrecta = letras.charAt(resto);
  return letraCorrecta;
}

var numeroDNI = prompt("Escribe los digitos del DNI");

var letra = letraDNI(numeroDNI);

alert(`La letra de tu dni es ${letra}`);
