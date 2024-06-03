window.addEventListener("load", () => {
  const botones = document.querySelectorAll("input[type=button]");

  botones.forEach((boton) => {
    boton.addEventListener("click", () => {
      alert(boton.value);
    });
  });
});
