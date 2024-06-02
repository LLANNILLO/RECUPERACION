window.addEventListener("load", () => {
  const cajita = document.querySelector(".cajita");
  const moverse = 10;

  document.addEventListener("keydown", (event) => {
    const contenedor = document
      .querySelector(".contenedor")
      .getBoundingClientRect();
    const cajaPosicion = cajita.getBoundingClientRect();
    let y = cajaPosicion.y;
    let x = cajaPosicion.x;

    if (event.key === "w" || event.key === "ArrowUp") {
      if (cajaPosicion.top - moverse > contenedor.top) {
        cajita.style.top = `${y - moverse}px`;
      }
    } else if (event.key === "s" || event.key === "ArrowDown") {
      if (cajaPosicion.bottom + moverse < contenedor.bottom) {
        cajita.style.top = `${y + moverse}px`;
      }
    } else if (event.key === "a" || event.key === "ArrowLeft") {
      if (cajaPosicion.left - moverse > contenedor.left) {
        cajita.style.left = `${x - moverse}px`;
      }
    } else if (event.key === "d" || event.key === "ArrowRight") {
      if (cajaPosicion.right + moverse < contenedor.right) {
        cajita.style.left = `${x + moverse}px`;
      }
    }
  });
});
