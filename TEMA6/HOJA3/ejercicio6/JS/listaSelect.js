window.addEventListener("load", () => {
  const agregarValorBtn = document.getElementById("agregar");
  const crearSelectBtn = document.getElementById("crearSelect");
  const crearListaBtn = document.getElementById("crearLista");

  var arrayValores = [];

  function agregarValor() {
    let valor = prompt("Dame un valor");

    if (valor === "") {
      alert("no has introducido nada");
    } else {
      arrayValores.push(valor);
      alert("valor introducido ");
    }
  }

  /**
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

  /**
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

  /**
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
  agregarValorBtn.addEventListener("click", agregarValor);
  crearSelectBtn.addEventListener("click", () => {
    creacion("select");
  });
  crearListaBtn.addEventListener("click", () => {
    creacion("ul");
  });
});
