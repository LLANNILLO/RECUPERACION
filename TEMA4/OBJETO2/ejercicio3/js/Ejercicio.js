var aulaGenerica = new Aula("AU_G250", 250, [
  "Economia año 1",
  "Economia año 2",
  "Matematicas",
]);
var aulaMusica = new Musica(
  "AU_MUS50",
  50,
  ["Conservatorio", "Opera", "Estudio de Clasicismo"],
  2500
);
var aulaTecnologia = new Tecnologia(
  "AU_TEC70",
  70,
  ["Mecanizado", "Automocion", "Chapa y pintura"],
  "1460"
);

console.log(aulaGenerica.toString());

console.log(aulaMusica.toString());
console.log(aulaTecnologia.toString());
