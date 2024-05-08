window.addEventListener("load", () => {
  var lista = document.querySelector("body>ol");
  var primerHijo = lista.firstElementChild;
  var ultimoHijo = lista.lastElementChild;
  console.log(primerHijo);
  console.log(ultimoHijo);

  setTimeout(() => {
    lista.removeChild(primerHijo);
    lista.removeChild(ultimoHijo);
  }, 2000);
});
