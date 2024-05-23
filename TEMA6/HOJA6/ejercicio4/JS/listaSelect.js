window.addEventListener("load", () => {
  const agregarValorBtn = document.getElementById("agregar");
  const crearSelectBtn = document.getElementById("crearSelect");
  const crearListaBtn = document.getElementById("crearLista");
  const section = document.getElementById("ul");

  // constante para obtener el boton "Eliminar de la lista"
  const eliminarDeListaBtn = document.getElementById("eliminarDeLista");
  // constante para obtener el boton "Eliminar lista";
  const eliminarListaBtn = document.getElementById("eliminarLista");
  // constante para obtener la lista a eliminar
  const number = document.getElementById("numListas");
  /* 
    Creacion de un array en donde se guardan todos los valores introducidos
    en el prompt a traves de la funcion agregarValor()
  */
  var arrayValores = [];

  function agregarValor() {
    let valor = prompt("Dame un valor");

    if (valor === "" || valor === null) {
      alert("no has introducido nada");
    } else {
      arrayValores.push(valor);
      alert("valor introducido ");
    }
  }
  agregarValorBtn.addEventListener("click", agregarValor);

  /**
   * Funcion para crear un HTMLElement de tipo select
   *
   * @param {HTMLElement} section
   */
  function crearSelect(section) {
    let select = document.createElement("select");

    arrayValores.forEach((valor) => {
      let option = document.createElement("option");
      option.setAttribute("value", valor);
      option.textContent = valor;
      select.append(option);
    });

    section.appendChild(select);
  }
  crearSelectBtn.addEventListener("click", () => {
    creacion("select");
  });

  /**
   * Funcion para crear un HTMLElement de tipo ul
   *
   * @param {HTMLElement} section
   */
  function crearLista(section) {
    let list = document.createElement("ul");

    arrayValores.forEach((valor) => {
      let option = document.createElement("li");
      option.textContent = valor;
      list.append(option);
    });

    section.appendChild(list);
  }

  crearListaBtn.addEventListener("click", () => {
    creacion("ul");
    let cantidadListas = document.getElementsByTagName("ul").length;

    number.setAttribute("max", `${cantidadListas}`);
  });

  /**
   * Funcion para crear una de las dos en funcion del tipo pasado por
   * parametro
   *
   * @param {string} tipo
   */
  function creacion(tipo) {
    const section = document.getElementById(tipo);
    if (tipo === "select") {
      crearSelect(section);
    } else {
      crearLista(section);
    }
  }

  /* 
    Funcion para eliminar un li de la lista
    Se comprobara que existe una lista en el DOM y que la posicion del
    li es valida
  */
  function eliminarDeLaLista() {
    // crear un array con cada lista dentro del DOM
    let listas = Array.from(document.querySelectorAll("ul"));

    if (listas.length > 0) {
      // numero de valores en ambas listas, ya que no difieren en contenido
      let elementosLista = listas[0].children;
      // prompt para saber la posicion que el usuario quiere borrar
      let posicion = prompt(
        `Eliminar elementos del 1 al ${elementosLista.length}`
      );

      /*
        Si la posicion no es numerica o es mayor a la longitud de elementos
        dentro de las listas, alertar al usuario
       */
      if (!isNaN(posicion) && posicion <= elementosLista.length) {
        /*
         obtener la seccion padre, por si se queda vacia la lista, 
         poderla eliminar
         */

        listas.forEach((lista) => {
          lista.removeChild(lista.children[posicion - 1]);
          if (lista.childElementCount < 1) {
            section.removeChild(lista);
          }
        });
      } else {
        alert("Posicion no disponible");
      }
    } else {
      alert("No existe ninguna lista en el DOM");
    }
  }
  eliminarDeListaBtn.addEventListener("click", eliminarDeLaLista);

  function eliminarLista() {
    let valorLista = number.value;
    let listaEliminar = section.children;
    if (valorLista > listaEliminar.length) {
      alert("No existe la lista a eliminar");
    } else {
      section.removeChild(listaEliminar[valorLista - 1]);
    }
  }
  eliminarListaBtn.addEventListener("click", eliminarLista);
});
