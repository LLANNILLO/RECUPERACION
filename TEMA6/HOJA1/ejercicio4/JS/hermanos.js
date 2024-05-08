window.addEventListener("load", () => {
  var medio = document.getElementsByTagName("li")[1];
  console.log(medio);

  var hermanoAnterior = medio.previousElementSibling;
  var hermanoPosterior = medio.nextElementSibling;
  console.log(hermanoAnterior);
  console.log(hermanoPosterior);
});
