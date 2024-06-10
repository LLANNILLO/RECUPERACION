let modalidades = [
  "Natacion",
  "Pilates",
  "AquaGym",
  "Resistencia",
  "Zumba",
  "Maquinas",
];

let socios = [];

window.addEventListener("load", () => {
  // crear el codigo del nuevo cliente

  const nombreSocioText = document.getElementById("nombreSocio");
  const apellidosSocioText = document.getElementById("apellidosSocio");
  const codigoSocioText = document.getElementById("codigoSocio");

  // funcion para crear el codigo del cliente
  function crearCodigoCliente() {
    let socioNumero = 1;
    console.log(socios.length);
    if (socios.length > 0) {
      socioNumero = socios.length + 1;
    }

    let nombreLetra = nombreSocioText.value.at(0);
    let apellidosSocioLetras = apellidosSocioText.value
      .split(" ")
      .map((apellido) => {
        return apellido.at(0);
      });

    let codigoSocio = socioNumero + nombreLetra + apellidosSocioLetras.join("");
    return codigoSocio;
  }

  apellidosSocioText.addEventListener("change", () => {
    codigoSocioText.value = crearCodigoCliente();
  });

  // crear las modalidades seleccionadas para el nuevo socio
  const modalidadesAgregadas = document.getElementById("modalidades");
  const agregarModalidadBtn = document.getElementById("agregarModalidad");
  const selectorModalidad = document.getElementById("selectorModalidades");

  agregarModalidadBtn.addEventListener("click", () => {
    let modalidadSeleccionada = selectorModalidad.value;

    if (!modalidadSeleccionada) {
      alert("ya seleccionastes todas las modalidades posibles");
    } else {
      crearModalidadBloque(modalidadSeleccionada);
      eliminarOptionSelect(selectorModalidad, modalidadSeleccionada);
    }
  });

  // funcion para crear el bloque de la modalidad
  function crearModalidadBloque(contenidoModalidad) {
    // crear los elementos contenedores de la modalidad

    let divPadre = document.createElement("div");
    let divContenido = document.createElement("div");
    let times = document.createElement("div");

    // agregar las clases y sus contenidos correspondientes
    divContenido.classList.add("modalidad");
    divContenido.innerHTML = contenidoModalidad;
    times.classList.add("eliminar-modalidad");
    times.innerHTML = "&times";

    times.addEventListener("click", () => {
      agregarSelecciones(contenidoModalidad);
      eliminarModalidad(divPadre);
    });
    // apendizar los elementos
    divContenido.appendChild(times);
    divPadre.appendChild(divContenido);

    modalidadesAgregadas.appendChild(divPadre);
  }

  // funcion para eliminar la modalidad ya seleccionada
  function eliminarOptionSelect(selectorModalidad, modalidadSeleccionada) {
    let options = Array.from(selectorModalidad.querySelectorAll("option"));

    let optionEliminar = options.find(
      (option) => option.value === modalidadSeleccionada
    );

    selectorModalidad.removeChild(optionEliminar);
  }

  // funcion para volver a agregar las selecciones
  function eliminarModalidad(divPadre) {
    modalidadesAgregadas.removeChild(divPadre);
  }
  // funcion para eliminar la modalidad div
  function agregarSelecciones(seleccion) {
    let option = document.createElement("option");
    option.value = seleccion;
    option.text = seleccion;
    selectorModalidad.appendChild(option);
  }

  // crear al nuevo socio

  const asociarseBtn = document.getElementById("asociarse");

  asociarseBtn.addEventListener("click", () => {
    let nombre = nombreSocioText.value + " " + apellidosSocioText.value;

    let codigo = codigoSocioText.value;
    let modalidades = Array.from(
      modalidadesAgregadas.querySelectorAll(".modalidad")
    ).map((modalidad) => {
      return modalidad.firstChild.nodeValue;
    });

    let nuevoSocio = new FichaClub(codigo, nombre, modalidades);

    socios.push(nuevoSocio);

    nombreSocioText.value = "";
    apellidosSocioText.value = "";
    codigoSocioText.value = "";
    modalidadesAgregadas.innerHTML = "";
  });
});
