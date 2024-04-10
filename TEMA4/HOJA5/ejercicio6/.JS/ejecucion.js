(function () {
  let fechaEjecucion = new Date();

  let fechaFormateada = fechaEjecucion.toLocaleDateString("es-ES", {
    timeZone: "UTC",
  });
  console.log(fechaFormateada);
})();
