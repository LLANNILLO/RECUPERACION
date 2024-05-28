window.addEventListener("load", () => {
  const imagenImgs = document.getElementById("imagen");

  document.addEventListener("keyup", (event) => {
    if (event.key === "0") {
      imagenImgs.setAttribute("src", "./imagenes/0.png");
    } else if (event.key === "1") {
      imagenImgs.setAttribute("src", "./imagenes/1.png");
    } else if (event.key === "2") {
      imagenImgs.setAttribute("src", "./imagenes/2.png");
    } else if (event.key === "3") {
      imagenImgs.setAttribute("src", "./imagenes/3.png");
    } else if (event.key === "4") {
      imagenImgs.setAttribute("src", "./imagenes/4.png");
    } else if (event.key === "5") {
      imagenImgs.setAttribute("src", "./imagenes/5.png");
    } else if (event.key === "6") {
      imagenImgs.setAttribute("src", "./imagenes/6.png");
    } else if (event.key === "7") {
      imagenImgs.setAttribute("src", "./imagenes/7.png");
    } else if (event.key === "8") {
      imagenImgs.setAttribute("src", "./imagenes/8.png");
    } else if (event.key === "9") {
      imagenImgs.setAttribute("src", "./imagenes/9.png");
    }
  });
});
