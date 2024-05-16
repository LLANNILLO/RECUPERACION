window.addEventListener("resize", () => {
  if (window.matchMedia("(max-width:500px)").matches) {
    const menu = document.querySelector("#cabeceraPrincipal div");

    // Verifica si ya se ha agregado el pseudo-elemento
    if (!menu.querySelector(".menuAfter")) {
      // Crea un nuevo elemento span para simular el pseudo-elemento
      const menuAfter = document.createElement("span");
      menuAfter.textContent = "\u2261"; // Contenido del pseudo-elemento
      menuAfter.classList.add("menuAfter"); // Añade una clase al nuevo elemento
      menu.appendChild(menuAfter); // Añade el nuevo elemento al final del menú

      menuAfter.addEventListener("click", visibleMenu);
    }
  } else {
    // Elimina el pseudo-elemento si la media query no se cumple
    const menuAfter = document.querySelector(".menuAfter");
    if (menuAfter) {
      menuAfter.remove();
    }
  }
});

function visibleMenu() {
  const nav = document.querySelector(".menuNavegacion");
  if (!nav.querySelector("#times")) {
    var times = document.createElement("span");
    times.setAttribute("id", "times");
    times.innerHTML = "&times;";
    nav.appendChild(times);
    times.addEventListener("click", () => {
      nav.removeAttribute("style");
    });
  }

  if (!nav.hasAttribute("style")) {
    nav.style.display = "flex"; // Utiliza comillas alrededor de "block"
  }
}
