var url =
  "file:///D:/Usuarios/DAW201/Documents/RECUPERACION/DWEC/TEMA3/PREDEFINIDO/ejercicio10/valores.html";

var popup = "1";
var widthAndHeight = "400";

var ejeX = (screen.availWidth - widthAndHeight) / 2;
var ejeY = (screen.availHeight - widthAndHeight) / 2;

const ventanaEmergente = window.open(
  url,
  "",
  `
  popup=${popup},
  width=${widthAndHeight},
  height=${widthAndHeight},
  left=${ejeX}
  top=${ejeY} 
  `
);

ventanaEmergente.document.write(`
<h1>Mis tamaños</h1>
<div>
Ancho:${widthAndHeight}
</div>
<div>        
Alto:${widthAndHeight}    
</div>`);
