window.onload = () => {
  const cierre = document.querySelector(".cierre");

  cierre.addEventListener("click", () => {
    const message = cierre.parentElement;
    message.remove();
  });
};
