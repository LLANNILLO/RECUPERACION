window.addEventListener("load", () => {
  var parrafos = document.getElementsByTagName("p");
  var cantidadParrafos = parrafos.length;

  console.log(parrafos[cantidadParrafos - 2].firstChild.nodeValue);
});
