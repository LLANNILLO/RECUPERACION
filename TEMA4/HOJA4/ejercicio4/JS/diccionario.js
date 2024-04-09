var diccionario = new Map([
  ["Español(ES)", ["Coche", "Farola", "Edificio", "Fuente", "Escaleras"]],
  ["Ingles(UK)", ["Car", "lamppost", "Building", "Fountain", "Ladder"]],
  ["Francés", ["Voiture", "Réverbère", "Bâtiment", "Fontaine", "Échelle"]],
  ["Alemán", ["Wagen", "Strassenlicht", "Gebäude", "Springbrunnen", "Leiter"]],
]);

function traducciones() {
  let arrayIdiomas = [...diccionario.keys()];
  let arrayPalabras = [...diccionario.values()];

  console.log(arrayIdiomas);
  console.log(arrayPalabras);

  let traducciones = "<p>Traducciones:</p>";

  for (let i = 0; i < arrayPalabras.length; i++) {
    traducciones += `<p>Palabra: ${arrayPalabras[0][i]}</p>`;
  }

  document.write(traducciones);
}

traducciones();
