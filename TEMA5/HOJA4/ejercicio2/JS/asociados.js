window.addEventListener("load", () => {
  let socios = sessionStorage.getItem("socios");

  if (socios) {
    socios = JSON.parse(socios);
  } else {
    socios = [];
  }

  let textarea = document.querySelector("textarea");

  textarea.textContent = socios
    .map((socio) => {
      return `Código: ${socio.codigo}, Nombre: ${
        socio.nombre
      }, Modalidades: ${socio.modalidades.join(", ")}`;
    })
    .join("\n");

  document.body.appendChild(textarea);

  document.getElementById("volver").addEventListener("click", () => {
    window.location.href = "index.html";
  });
});
