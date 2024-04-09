var dniMap = new Map([
  ["87750100V", "David Llanillo Antolin"],
  ["01730973Q", "Jorge Agüado Seguro"],
  ["81140189F", "Matías Ruiz del Monte"],
  ["86461243B", "Lucas Antoniano Cartes"],
  ["43194861X", "Yaiza Lanuda Tresvejo"],
  ["97022818D", "Gregorio Lanuda Tresvejo"],
  ["40374114Y", "Sara Carpintera Alonso"],
  ["08770513S", "Pablo Cayon Saro"],
  ["89727780L", "Mati Polaco Panadero"],
  ["49930398C", "Ashley Smith Peterson"],
]);

function mostrarNombres(mapa) {
  let valoresDNI = "";
  for (let [dni, nombre] of mapa) {
    valoresDNI +=
      `<p>La persona <strong>${nombre}</strong> tiene el siguiente dni</p>` +
      `<p>${dni}</p>`;
  }

  document.write(`<div class="contenedor"> ${valoresDNI}</div>`);
}
mostrarNombres(dniMap);

dniMap.set("81140189F", "Ricardo Lavin Torre");

mostrarNombres(dniMap);
