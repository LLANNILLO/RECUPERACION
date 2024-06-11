//Controlar las sesiones de los electrodomesticos

let electrodomesticosSession = sessionStorage.getItem("electrodomesticos");

let electrodomestico = electrodomesticosSession
  ? JSON.parse(electrodomesticosSession)
  : [];

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

  // agregar el evento del boton para los electrodomesticos a crear

  const agregarElectrodomesticoBtn = document.getElementById(
    "agregarElectrodomestico"
  );

  agregarElectrodomesticoBtn.addEventListener("click", agregarElectrodomestico);

  // funcion para crear un nuevo electrodomestico
  function agregarElectrodomestico() {
    let precio = document.getElementById("precio").value;
    let color = document.getElementById("color").value;
    let peso = document.getElementById("peso").value;
    let consumo = document.getElementById("consumo").value;

    console.log(precio);
    if (!precio && !color && !peso && !consumo) {
      alert("¿Qué tal si introduces algun valor?");
    } else {
      //seleccion del tipo de electrodomestico
      if (selectorElectrodomestico.value === "lavadora") {
        //si se ha seleccionado crear una lavadora
        let carga = document.getElementById("carga").value;
        let lavadora = new Lavadora(precio, color, consumo, peso, carga);
        actualizarSession(lavadora);
      } else if (selectorElectrodomestico.value === "televisor") {
        //si se ha seleccionado crear un televisor
        let resolucion = document.getElementById("resolucion").value;
        let sintetizador = document.getElementById("sintetizador").value;
        let television = new Television(
          precio,
          color,
          consumo,
          peso,
          resolucion,
          sintetizador
        );
        actualizarSession(television);
      } else {
        //si no se ha seleccionado nada
        let electrodomestico = new Electrodomestico(
          precio,
          color,
          consumo,
          peso
        );

        actualizarSession(electrodomestico);
      }
      irA("electrodomesticos.html");
    }
  }

  // funcion para actualizar los electrodomesticos creados
  function actualizarSession(nuevoElectrodomestico) {
    electrodomestico.push(nuevoElectrodomestico);

    electrodomesticoActualizado = JSON.stringify(electrodomestico);

    sessionStorage.setItem("electrodomesticos", electrodomesticoActualizado);
  }

  function irA(href) {
    window.location.href = href;
  }
});
