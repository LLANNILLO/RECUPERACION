window.onload = () => {
  const flexDirection = document.getElementById("flexDirection");
  const flexWrap = document.getElementById("flexWrap");
  const justifyContent = document.getElementById("justifyContent");
  const alignItems = document.getElementById("alignItems");
  const alignContent = document.getElementById("alignContent");
  const tamanoCajas = document.getElementById("tamanoCajas");

  const containerFlex = document.getElementById("flex_container");
  const cajasFlex = document.querySelectorAll("#flex_container div");

  //funcion modificadora de los estilos del flex
  function actualizarFlex(caja) {
    //Valor del flex direction
    const directionValue = flexDirection.value;

    //valor del flex wrap
    const wrapValue = flexWrap.value;

    //valor del justify content
    const justifyValue = justifyContent.value;

    //valor del align items
    const alignItemsValue = alignItems.value;

    //valor del align content
    const alignContentValue = alignContent.value;

    //modificacion del diseño de las cajas
    caja.style.flexDirection = directionValue;
    caja.style.flexWrap = wrapValue;
    caja.style.justifyContent = justifyValue;
    caja.style.alignItems = alignItemsValue;
    caja.style.alignContent = alignContentValue;
  }
  tamanoCajas.addEventListener("input", () => {
    cajasFlex.forEach((caja) => {
      caja.style.width = tamanoCajas.value + "%";
    });
  });

  flexDirection.addEventListener("change", () => {
    actualizarFlex(containerFlex);
    console.log("reach");
  });

  flexWrap.addEventListener("change", () => {
    actualizarFlex(containerFlex);
  });

  justifyContent.addEventListener("change", () => {
    actualizarFlex(containerFlex);
  });

  alignItems.addEventListener("change", () => {
    actualizarFlex(containerFlex);
  });

  alignContent.addEventListener("change", () => {
    actualizarFlex(containerFlex);
  });
};
