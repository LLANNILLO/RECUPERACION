var codigoPostalCantabria = new Map([
  ["lobado", "39400"],
  ["villasuso", "39451"],
  ["quintana de toranzo", "3969"],
  ["cohiño", "39450"],
  ["rivero", "39409"],
]);

/**
 *
 * @param {Map} mapa
 * @returns
 */
function eliminarCodigoPostalErroneo(mapa) {
  for (let [localidad, codigoPostal] of mapa) {
    if (codigoPostal.length !== 5) {
      // mapa.set(localidad, "");
      mapa.delete(localidad);
    }
  }

  return mapa;
}

console.log(console.log(codigoPostalCantabria));
eliminarCodigoPostalErroneo(codigoPostalCantabria);
console.log(console.log(codigoPostalCantabria));
