window.addEventListener("load", () => {
  const draggable = document.querySelector(".draggable-box");
  const drag = document.querySelector(".drag");
  const drop = document.querySelector(".drop");

  var moveBox = false;
  draggable.addEventListener("click", () => {
    draggable.classList.add("grabbing");
    moveBox = true;
  });

  draggable.addEventListener("dblclick", (event) => {
    moveBox = false;

    let coordenadasDrag = drag.getBoundingClientRect();
    let coordenadasDrop = drop.getBoundingClientRect();

    if (drag.contains(draggable)) {
      if (
        event.clientX > coordenadasDrop.left &&
        event.clientX < coordenadasDrop.right &&
        event.clientY > coordenadasDrop.top &&
        event.clientY < coordenadasDrop.bottom
      ) {
        drag.removeChild(draggable);
        drop.appendChild(draggable);
      } else {
        alert("no me puedes dejar ahí la caja 😠");
      }
    } else {
      if (
        event.clientX > coordenadasDrag.left &&
        event.clientX < coordenadasDrag.right &&
        event.clientY > coordenadasDrag.top &&
        event.clientY < coordenadasDrag.bottom
      ) {
        drop.removeChild(draggable);
        drag.appendChild(draggable);
      } else {
        alert("no me puedes dejar ahí la caja 😠");
      }
    }

    draggable.removeAttribute("style");
    draggable.classList.remove("grabbing");
  });

  document.addEventListener("mousemove", (event) => {
    if (moveBox) {
      coordenadasCaja(event);
    }
  });

  function coordenadasCaja(event) {
    let x = event.clientX;
    let y = event.clientY;

    draggable.style.left = x - 25 + "px";
    draggable.style.top = y - 25 + "px";
  }
});
