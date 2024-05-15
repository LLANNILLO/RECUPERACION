window.addEventListener("load", () => {
  //Generador de numeros aleatorios
  function numeroAleatorio() {
    return Math.floor(Math.random() * 100) + 1;
  }

  var body = document.firstElementChild.firstElementChild.nextElementSibling;
  var numeroDeFilas = parseInt(prompt("Cuantas filas vamos a tener"));
  var numeroDeColumnas = parseInt(
    prompt("Cuantas columnas por filas vamos a tener")
  );

  var tabla = document.createElement("table");

  for (let filas = 0; filas < numeroDeFilas; filas++) {
    let tr = document.createElement("tr");
    for (let col = 0; col < numeroDeColumnas; col++) {
      let td = document.createElement("td");
      td.textContent = numeroAleatorio();
      tr.appendChild(td);
    }
    tabla.appendChild(tr);
  }

  body.appendChild(tabla);
});
