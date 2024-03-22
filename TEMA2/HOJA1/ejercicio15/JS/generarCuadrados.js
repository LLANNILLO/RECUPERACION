function agregarCuadrados() {
  for (let i = 0; i < 2000; i++) {
    let valoresPosition = generarPorcentaje();
    let top = valoresPosition[0] + "%";
    let right = valoresPosition[1] + "%";
    let bottom = valoresPosition[2] + "%";
    let left = valoresPosition[3] + "%";
    let colorFondo = color();
    document.write(
      `<div style="
      position:absolute;
      top:${top};
      right:${right};
      bottom:${bottom};
      left:${left};
      background:${colorFondo};
      width:50px;
      height:50px;"></div>`
    );
  }
}

function generarPorcentaje() {
  let valor1 = Math.floor(Math.random() * 100) + 1;
  let valor2 = Math.floor(Math.random() * 100) + 1;
  let valor3 = Math.floor(Math.random() * 100) + 1;
  let valor4 = Math.floor(Math.random() * 100) + 1;

  let resultado = [valor1, valor2, valor3, valor4];
  return resultado;
}

function valorColorAleatorio() {
  return Math.floor(Math.random() * 256); // Rango corregido de 0 a 255
}

function color() {
  let r = valorColorAleatorio();
  let g = valorColorAleatorio();
  let b = valorColorAleatorio();

  return "rgb(" + r + ", " + g + ", " + b + ")";
}

agregarCuadrados();
