window.addEventListener("load", () => {
  var withoutContexmenu = document.querySelector(".without-contextmenu");

  withoutContexmenu.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    console.log("llegando");
  });
});
