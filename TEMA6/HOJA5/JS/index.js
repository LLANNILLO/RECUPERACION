window.addEventListener("load", () => {
  var calculadora = new Calculadora();

  const valorActual = document.getElementsByClassName("actual")[0];
  valorActual.textContent = calculadora.valor;
});
