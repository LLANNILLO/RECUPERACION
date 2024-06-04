// https://stackoverflow.com/questions/1039986/how-to-implement-a-drag-and-drop-div-from-scratch-with-javascript

window.addEventListener("load", () => {
    const drag = document.querySelector(".drag");
    const drop = document.querySelector(".drop");
    
    const draggable = document.querySelector(".caja-arrastre");

    function allowDrop(ev) {
        ev.preventDefault();
    }

    function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    }

    function drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
    }

    drop.addEventListener("drop",(event)=>{
        drop(event);
    })

    drop.addEventListener("dragover",(event)=>{
        allowDrop(event);
    })

    draggable.addEventListener("dragstart",(event)=>{
        drag(event);
    })

    

})