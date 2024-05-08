window.addEventListener("load", () => {
  var listaIngredientes = document.getElementById("listaIngredientes");

  do {
    var ingrediente = prompt("Nuevo ingrediente");
    if (ingrediente !== null && ingrediente !== "") {
      let li = document.createElement("li");
      let texto = document.createTextNode(ingrediente);
      li.appendChild(texto);
      listaIngredientes.appendChild(li);
    }
  } while (ingrediente !== null);
});
