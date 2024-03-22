function color() {
  let r = valorColorAleatorio();
  let g = valorColorAleatorio();
  let b = valorColorAleatorio();

  return "rgb(" + r + ", " + g + ", " + b + ")";
}

var body = document.body;

body.style.backgroundColor = color();

function valorColorAleatorio() {
  return Math.floor(Math.random() * 256); // Rango corregido de 0 a 255
}


