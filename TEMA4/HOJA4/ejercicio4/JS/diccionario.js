var diccionario = new Map([
  ["Español(ES)", ["Coche", "Farola", "Edificio", "Fuente", "Escaleras"]],
  ["Ingles(UK)", ["Car", "lamppost", "Building", "Fountain", "Ladder"]],
  ["Francés", ["Voiture", "Réverbère", "Bâtiment", "Fontaine", "Échelle"]],
  ["Alemán", ["Wagen", "Strassenlicht", "Gebäude", "Springbrunnen", "Leiter"]],
]);

function traducciones() {
  let arrayIdiomas = [...diccionario.keys()];
  let arrayPalabras = [...diccionario.values()];

  let traducciones = "<p>Traducciones:</p>";

  for (let i = 0; i < arrayPalabras[0].length; i++) {
    let palabra = arrayPalabras[0][i];
    traducciones += `<p>Palabra: <strong>${palabra}</strong></p>`;

    for (let j = 1; j < arrayIdiomas.length; j++) {
      let idioma = arrayIdiomas[j];
      let traduccion = diccionario.get(idioma)[i];
      traducciones += `<p>${idioma}: ${traduccion}</p>`;
    }
  }

  document.write(traducciones);
}

traducciones();
