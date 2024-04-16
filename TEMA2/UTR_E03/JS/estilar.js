window.onload = () => {
  // Obtener referencia a la segunda caja
  const opcionesDiv = document.getElementById("segundoDiv");
  // Obtener referencia al contenedor padre
  const contenedor = document.querySelector(".contenedor");

  const positionSelect = document.getElementById("position");
  const topInput = document.getElementById("top_valor");
  const leftInput = document.getElementById("left_valor");
  const overflowSelect = document.getElementById("overflow");

  // Función para actualizar las clases y estilos del div
  function actualizarClasesDiv() {
    const positionValue = positionSelect.value; //Valor del position
    const topValue = topInput.value + "px"; // Convertir a píxeles
    const leftValue = leftInput.value + "px"; // Convertir a píxeles
    const overflowValue = overflowSelect.value; //Valor del overflow

    // Aplicar clases al div según los valores seleccionados
    opcionesDiv.style.position = positionValue;
    opcionesDiv.style.top = topValue;
    opcionesDiv.style.left = leftValue;
    contenedor.style.overflow = overflowValue;
  }

  // Escuchar eventos de cambio en los selectores e inputs y llamar a la función actualizarClasesDiv
  positionSelect.addEventListener("change", actualizarClasesDiv);
  topInput.addEventListener("input", actualizarClasesDiv);
  leftInput.addEventListener("input", actualizarClasesDiv);
  overflowSelect.addEventListener("change", actualizarClasesDiv);
};
