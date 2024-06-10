// https://stackoverflow.com/questions/1039986/how-to-implement-a-drag-and-drop-div-from-scratch-with-javascript

window.addEventListener("load", () => {
  const drop = document.querySelector(".drop");
  const drag = document.querySelector(".drag");
  const draggable = document.querySelector(".draggable-box");

  function allowDrop(ev) {
    ev.preventDefault();
  }

  function dragElement(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  function dropElement(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(draggable);
  }

  drop.addEventListener("drop", (event) => {
    dropElement(event);
  });

  drop.addEventListener("dragover", (event) => {
    allowDrop(event);
  });

  drag.addEventListener("drop", (event) => {
    dropElement(event);
  });

  drag.addEventListener("dragover", (event) => {
    allowDrop(event);
  });

  draggable.addEventListener("dragstart", (event) => {
    dragElement(event);
  });
});
