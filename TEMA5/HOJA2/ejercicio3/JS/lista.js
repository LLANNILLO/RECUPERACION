window.addEventListener("load", () => {
  const ul =
    document.querySelector(".seccion-lista").firstElementChild
      .nextElementSibling;

  //   botones para las funcionalidades de la web
  const eraseBtns = document.querySelectorAll("input[name=erase]");
  const addValueBtn = document.getElementById("addValue");
  const orderValuesBtn = document.getElementById("orderValues");

  //   generar una funcion para agregar el evento de borrado con el click
  const addEraseEvent = (eraseBtn) => {
    eraseBtn.addEventListener("click", () => {
      let fatherOfEraser = eraseBtn.parentNode;
      let eraserContent = eraseBtn.nextElementSibling.textContent;
      if (
        confirm(`seguro que quieres eliminar el contenido: "${eraserContent}"`)
      ) {
        ul.removeChild(fatherOfEraser);
      }
    });
  };

  eraseBtns.forEach((eraseBtn) => {
    addEraseEvent(eraseBtn);
  });

  addValueBtn.addEventListener("click", () => {
    // nuevo elemento li
    let newLI = document.createElement("li");
    // contenido dentro del span
    let contentNewLI = prompt("Nuevo contenido en la lista");
    // nuevo elemento span
    let contentOfLI = document.createElement("span");
    contentOfLI.textContent = contentNewLI;
    // crear el input para borrar
    let eraserOfLI = document.createElement("input");
    eraserOfLI.type = "button";
    eraserOfLI.name = "erase";
    eraserOfLI.value = "*";

    // apendizar todos los elementos creados a la lista
    newLI.appendChild(eraserOfLI);
    newLI.appendChild(contentOfLI);

    ul.appendChild(newLI);
    // agregar el evento de borrado
    addEraseEvent(eraserOfLI);
  });

  orderValuesBtn.addEventListener("click", () => {
    const li = Array.from(ul.querySelectorAll("li"));

    li.sort((a, b) => {
      const textA = a.querySelector("span").textContent.trim().toLowerCase();
      const textB = b.querySelector("span").textContent.trim().toLowerCase();
      return textA.localeCompare(textB, "es");
    });

    ul.innerHTML = "";
    li.forEach((item) => ul.appendChild(item));
  });
});
