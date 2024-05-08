window.addEventListener("load", () => {
  var a = document.querySelectorAll("a");
  var parrafos = document.querySelectorAll("p");
  var span = document.querySelectorAll("span");

  console.log(`Numero de <span> => ${span.length}`);
  console.log(`Numero de <p> => ${parrafos.length}`);
  console.log(`Numero de <a> => ${a.length}`);
});
