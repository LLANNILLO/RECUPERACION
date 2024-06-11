function reconstruirElectrodomesticos(data) {
  return data.map((item) => {
    if (item.carga) {
      return new Lavadora(
        parseInt(item.precioBase),
        item.color,
        item.consumoEnergetico,
        item.peso,
        item.carga
      );
    } else if (item.resolucion) {
      return new Television(
        parseInt(item.precioBase),
        item.color,
        item.consumoEnergetico,
        item.peso,
        item.pulgadas,
        item.sintonizadorTDT
      );
    } else {
      return new Electrodomestico(
        parseInt(item.precioBase),
        item.color,
        item.consumoEnergetico,
        item.peso
      );
    }
  });
}

let electrodomesticosData =
  JSON.parse(sessionStorage.getItem("electrodomesticos")) || [];
let electrodomesticos = reconstruirElectrodomesticos(electrodomesticosData);

window.addEventListener("load", () => {
  let textarea = document.querySelector("textarea");

  function preciosElectrodomesticos(electrodomesticos) {
    let precioElectrodomesticos = 0;
    let precioTelevisores = 0;
    let precioLavadoras = 0;

    electrodomesticos.forEach((electrodomestico) => {
      precioElectrodomesticos += electrodomestico.precioFinal();
      if (electrodomestico instanceof Lavadora) {
        precioLavadoras += electrodomestico.precioFinal();
      } else if (electrodomestico instanceof Television) {
        precioTelevisores += electrodomestico.precioFinal();
      }
    });

    return `
        Precio total de Electrodomesticos: ${precioElectrodomesticos}\n\t
        Precio total de Televisores: ${precioTelevisores}\n\t
        Precio total de Lavadoras: ${precioLavadoras}
    `;
  }

  textarea.textContent = preciosElectrodomesticos(electrodomesticos);

  const volverBtn = document.getElementById("volver");

  volverBtn.addEventListener("click", () => {
    window.location.href = "index.html";
  });
});
