window.addEventListener("load", () => {
  var parrafo = document.getElementById("parrafo");

  setTimeout(() => {
    parrafo.classList.remove("holiwi");
    parrafo.textContent = "no-holiwi";
    parrafo.classList.add("no-holiwi");
  }, 5000);
});
