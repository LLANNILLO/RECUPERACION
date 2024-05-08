window.addEventListener("load", () => {
  var tabla = document.querySelector("table");

  var nuevaFila = tabla.insertRow();
  var nuevaColumna = nuevaFila.insertCell();
  var nuevoTexto = document.createTextNode("He nacido");
  nuevaColumna.appendChild(nuevoTexto);
});
