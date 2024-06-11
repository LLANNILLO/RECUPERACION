let electrodomestico = new Television(0, "Negro", "A", 200, 50, true);

window.addEventListener("load", () => {
  const selectorElectrodomestico = document.getElementById(
    "electrodomesticoAgregar"
  );

  const lavadoraDiv = document.querySelector(".lavadora");
  const televisorDiv = document.querySelector(".televisor");

  let anterior;
  selectorElectrodomestico.addEventListener("change", () => {
    if (anterior) {
      anterior.removeAttribute("style");
    }
    if ((selectorElectrodomestico.value = "lavadora")) {
      lavadoraDiv.style.display = "block";
      anterior = lavadoraDiv;
    } else {
      televisorDiv.style.display = "block";
      anterior = televisorDiv;
    }
  });
});
