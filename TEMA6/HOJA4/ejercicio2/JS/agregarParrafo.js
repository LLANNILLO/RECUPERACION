window.addEventListener("load", () => {
  //obtener el input del boton para añadir un evento
  const insertarParrafoBtn = document.getElementById("insertarParrafo");

  //obtener el input de la posicion
  var posicion = document.getElementById("posiciones");

  function agregarParrafo() {
    //Lista con las diferentes posiciones
    var ol = document.getElementById("listaParrafos");
    //colocar un limite a la posicion
    posicion.setAttribute("max", ol.childElementCount);
    let valorPosicion = posicion.value;

    let texto = prompt("Contenido parrafo");
    if (texto !== "") {
      //Crear el parrafo del li
      let parrafo = document.createElement("p");
      //Crear el li
      let li = document.createElement("li");
      //modificar el texto del parrafo
      parrafo.innerHTML = `<strong>${texto}</strong>`;
      //Apendizar el parrafo al li y despues al ol antes de su elemento posterior
      li.appendChild(parrafo);
      let posterior = ol.children[valorPosicion - 1];
      ol.insertBefore(li, posterior);
    } else {
      alert("No has introducido ningun parrafo");
    }
  }

  insertarParrafoBtn.addEventListener("click", agregarParrafo);
});
