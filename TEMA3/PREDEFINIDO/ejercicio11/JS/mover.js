var url =
  "file:///D:/Usuarios/DAW201/Documents/RECUPERACION/DWEC/TEMA3/PREDEFINIDO/ejercicio11/desplazar.html";

var popup = "1";
var widthAndHeight = "1000";

const ventanaEmergente = window.open(
  "",
  "",
  `
  popup=${popup},
  width=${widthAndHeight},
  height=${widthAndHeight},
  left=1
  top=0 
  `
);

var left = 0;

intervalo = window.setInterval(() => {
  newEjeX = ventanaEmergente.screenX;
  newLeft = newEjeX + 50;

  if (left > ventanaEmergente.screen.width - widthAndHeight) {
    window.clearInterval(intervalo);
    // console.log("no puedo más");
  } else {
    ventanaEmergente.window.moveTo(newLeft, 0);
    left = newLeft;
    console.log("todavia sigo");
  }
}, 10);
