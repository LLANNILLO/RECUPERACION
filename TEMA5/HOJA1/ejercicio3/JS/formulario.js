window.addEventListener("load", () => {
  //obtener el formulario para gestionar los eventos de submit y de reset
  const formulario = document.forms[0];
  //boton para hacer submit
  const submitAnchor = document.getElementById("submit");
  //boton para hacer resetear
  const resetAnchor = document.getElementById("reset");
  const correoText = document.getElementById("email");

  submitAnchor.addEventListener("click", (event) => {
    event.preventDefault();

    if (correoText.value.includes("@")) {
      formulario.submit();
    } else {
      alert("no se ha introducido un correo valido");
    }
  });

  resetAnchor.addEventListener("click", (event) => {
    event.preventDefault();

    formulario.reset();
  });
});
