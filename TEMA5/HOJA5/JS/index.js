// Controlar las sesiones de los electrodomesticos
let electrodomesticos = getFromSessionStorage("electrodomesticos") || [];

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
    if (selectorElectrodomestico.value === "lavadora") {
      lavadoraDiv.style.display = "block";
      anterior = lavadoraDiv;
    } else if (selectorElectrodomestico.value === "television") {
      televisorDiv.style.display = "block";
      anterior = televisorDiv;
    } else {
      televisorDiv.removeAttribute("style");
      lavadoraDiv.removeAttribute("style");
    }
  });

  // Agregar el evento del botón para los electrodomesticos a crear
  const agregarElectrodomesticoBtn = document.getElementById(
    "agregarElectrodomestico"
  );
  agregarElectrodomesticoBtn.addEventListener("click", agregarElectrodomestico);

  // Función para crear un nuevo electrodomestico
  function agregarElectrodomestico() {
    //inputs
    let precio = document.getElementById("precio").value;
    let color = document.getElementById("color").value;
    let peso = document.getElementById("peso").value;
    let consumo = document.getElementById("consumo").value;

    //si no estan todos introducidos salta aviso
    if (!precio || !color || !peso || !consumo) {
      alert("¿Qué tal si introduces algun valor?");
      return;
    }

    //en cualquier otro caso crea el nuevo tipo de electrodomestico
    let nuevoElectrodomestico;
    if (selectorElectrodomestico.value === "lavadora") {
      let carga = document.getElementById("carga").value;
      nuevoElectrodomestico = new Lavadora(precio, color, consumo, peso, carga);
    } else if (selectorElectrodomestico.value === "television") {
      let resolucion = document.getElementById("resolucion").value;
      let sintetizador = document.getElementById("sintetizador").value;
      nuevoElectrodomestico = new Television(
        precio,
        color,
        consumo,
        peso,
        resolucion,
        sintetizador
      );
    } else {
      nuevoElectrodomestico = new Electrodomestico(
        precio,
        color,
        consumo,
        peso
      );
    }

    //añade el electrodomestico y va al textarea con la informacion
    addToSessionStorage("electrodomesticos", nuevoElectrodomestico);
    irA("electrodomesticos.html");
  }

  function irA(href) {
    window.location.href = href;
  }
});
