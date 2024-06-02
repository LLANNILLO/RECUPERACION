window.addEventListener("load", () => {
  const frase = document.querySelector(".frase");
  const eraser = document.querySelector(".eraser");
  const letras = document.querySelectorAll(".letras div");

  letras.forEach((letra) => {
    letra.addEventListener("click", () => {
      let span = document.createElement("span");
      if (letra.textContent === "espacio") {
        span.setAttribute("class", "space");
        span.innerHTML = "&nbsp;"; // Espacio no separable
      } else {
        span.textContent = letra.textContent;
      }
      frase.appendChild(span);
    });
  });

  eraser.addEventListener("click", () => {
    frase.innerHTML = "";
  });
});
