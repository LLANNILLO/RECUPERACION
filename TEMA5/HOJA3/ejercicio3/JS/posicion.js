window.addEventListener("load", () => {
  const coordenadas = document.getElementById("coordenadasRaton");

  document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
  });
  document.addEventListener("mousemove", (event) => {
    coordenadasActuales(event);
  });

  document.addEventListener("mouseup", (event) => {
    document.getElementById("evento").textContent = event.target.value;
  });

  function coordenadasActuales(event) {
    let x = event.clientX;
    let y = event.clientY;
    document.getElementById("X").textContent = x;
    document.getElementById("Y").textContent = y;

    coordenadas.style.visibility = "visible";
    coordenadas.style.left = x + 5 + "px";
    coordenadas.style.top = y + 10 + "px";
  }
});
