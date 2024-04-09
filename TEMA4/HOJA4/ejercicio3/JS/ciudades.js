var mapaCiudades = new Map([
  ["Madrid", "40.416944°, -3.703333°"],
  ["Varsovia", "52.23°, 21.011111°"],
  ["Manchester", "53.466667°, -2.233333°"],
  ["Lisboa", "38.708042°, -9.139016°"],
  ["Ciudad de Mexico", "19.419444°, -99.145556°"],
]);

function mostrarNombres(mapa) {
  let valoresDNI = "";
  for (let [nombre, ubicacion] of mapa) {
    valoresDNI +=
      `<p>Ciudad: <strong>${nombre}</strong></p>` +
      `<p>Ubicacion: ${ubicacion}</p>`;
  }

  document.write(`<div class="contenedor"> ${valoresDNI}</div>`);
}
mostrarNombres(mapaCiudades);
