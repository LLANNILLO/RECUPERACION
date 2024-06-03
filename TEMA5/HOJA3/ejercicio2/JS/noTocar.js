window.addEventListener("load", () => {
  const contenedor = document.querySelector(".contenedor");
  const caritaMala = document.querySelector(".no-tocar");
  const intentos = document.getElementById("intentos");

  caritaMala.addEventListener("mouseover", () => {
    let coordenadas = caritaMala.getBoundingClientRect();

    if (parseInt(intentos.textContent) < 5) {
      cambioCoordenadas(coordenadas);
    } else if (
      parseInt(intentos.textContent) >= 14 &&
      parseInt(intentos.textContent) < 20
    ) {
      caritaMala.textContent = "😨";
      cambioCoordenadas(coordenadas);
    } else if (
      parseInt(intentos.textContent) >= 5 &&
      parseInt(intentos.textContent) < 20
    ) {
      caritaMala.textContent = "😡";
      cambioCoordenadas(coordenadas);
    } else {
      caritaMala.textContent = "☠️";
      setTimeout(() => {
        alert("Lo conseguiste");
        alert("Me has tocado");
        contenedor.removeChild(caritaMala);
      }, 0);
    }

    if (parseInt(intentos.textContent) < 20) {
      intentos.textContent = parseInt(intentos.textContent) + 1;
    }
  });

  function cambioCoordenadas(coordenadas) {
    let nuevaPosicion = obtenerNuevaPosicion(coordenadas);
    caritaMala.style.top = nuevaPosicion.top + "px";
    caritaMala.style.left = nuevaPosicion.left + "px";
  }

  function obtenerNuevaPosicion(coordenadas) {
    let nuevaTop = posicionRandom(contenedor.clientHeight - coordenadas.height);
    let nuevaLeft = posicionRandom(contenedor.clientWidth - coordenadas.width);
    return { top: nuevaTop, left: nuevaLeft };
  }
});

function posicionRandom(maximo) {
  return Math.floor(Math.random() * maximo);
}
