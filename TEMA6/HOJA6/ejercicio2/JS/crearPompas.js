function tamañoAleatorio() {
  return Math.floor(Math.random() * 100) + 1;
}

function colorAleatorio() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return [red, green, blue];
}

function posicion(tamaño, contenedorTamaño) {
  return Math.floor(Math.random() * (contenedorTamaño - tamaño));
}

window.addEventListener("load", () => {
  const fiestaPompasBtn = document.getElementById("fiestaPompas");
  const contenedorBurbujas = document.querySelector(".contenedor-burbujas");
  const contenedorTamaño = 600; // Asumiendo que el tamaño del contenedor es 600px x 600px
  let creacionPompas;

  function crearPompa() {
    let redonda = document.createElement("span");
    let tamaño = tamañoAleatorio();
    let colores = colorAleatorio();
    redonda.style.width = tamaño + "px";
    redonda.style.height = tamaño + "px";
    redonda.style.backgroundColor = `rgb(${colores[0]},${colores[1]},${colores[2]})`;
    redonda.style.top = `${posicion(tamaño, contenedorTamaño)}px`;
    redonda.style.left = `${posicion(tamaño, contenedorTamaño)}px`;

    let momentoCreacion = new Date();
    redonda.setAttribute("data-time", `${momentoCreacion}`);
    contenedorBurbujas.appendChild(redonda);

    redonda.addEventListener("click", (event) => {
      alert(new Date(redonda.getAttribute("data-time")).toLocaleString());
      contenedorBurbujas.removeChild(redonda);
      event.stopPropagation(); // Para evitar que el clic en la pompa dispare el evento del documento
    });
  }

  fiestaPompasBtn.addEventListener("click", (event) => {
    event.stopPropagation(); // Para evitar que el clic en el botón dispare el evento del documento
    if (!creacionPompas) {
      creacionPompas = setInterval(crearPompa, 500);
    }
  });

  document.addEventListener("click", () => {
    if (creacionPompas) {
      let continuar = confirm("¿Quieres continuar con la creacion de pompas?");
      if (!continuar) {
        clearInterval(creacionPompas);
        creacionPompas = null; // Resetear la variable para indicar que se ha detenido el intervalo
      }
    }
  });
});
