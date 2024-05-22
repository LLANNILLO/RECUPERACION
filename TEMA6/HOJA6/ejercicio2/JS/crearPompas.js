function tamañoAleatorio() {
  return Math.floor(Math.random() * 100) + 1;
}

function colorAleatorio() {
  let red = Math.floor(Math.random() * 255) - 1;
  let green = Math.floor(Math.random() * 255) - 1;
  let blue = Math.floor(Math.random() * 255) - 1;
  return [red, green, blue];
}
function posicion() {
  return Math.floor(Math.random() * 100) - 1;
}

window.addEventListener("load", () => {
  const fiestaPompasBtn = document.getElementById("fiestaPompas");

  const contenedorBurbujas = document.querySelector(".contenedor-burbujas");

  function crearPompa() {
    let redonda = document.createElement("span");
    let tamaño = tamañoAleatorio();
    let colores = colorAleatorio();
    redonda.style.width = tamaño + "px";
    redonda.style.height = tamaño + "px";
    redonda.style.backgroundColor = `rgb(${colores[0]},${colores[1]},${colores[2]})`;
    redonda.style.top = `${posicion()}%`;
    redonda.style.left = `${posicion()}%`;

    let momentoCreacion = new Date();
    redonda.setAttribute("data-time", `${momentoCreacion}`);
    contenedorBurbujas.appendChild(redonda);
  }
  var creacionPompas;
  fiestaPompasBtn.addEventListener("click", () => {
    creacionPompas = setInterval(() => {
      crearPompa();
    }, 5000);
  });
});

document.addEventListener("change", () => {
  let redondas = document.querySelectorAll("span");
  document.addEventListener("click", () => {
    let continuar = confirm("¿Quieres continuar con la creacion de pompas?");

    if (!continuar) {
      clearInterval(creacionPompas);
    }
  });

  redondas.forEach((span) => {
    span.addEventListener("click", () => {
      alert(span.dataset.time.toLocaleString());
      contenedorBurbujas.removeChild(span);
    });
  });
});
