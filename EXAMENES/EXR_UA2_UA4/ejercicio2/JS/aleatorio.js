//Funcion atuogenerativa del valor de adivinacion
function generarNumeroAleatorio() {
  let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

  return numeroAleatorio;
}

//Funcion para intentar adivinar el valor
function adivinarNumero() {
  //Constante para marcar una alerta inicial en cada juego
  var alertaIni = alert("Adivina el numero en el que estoy pensando");
  //Generacion del numero aleatorio
  let numAleatorio = generarNumeroAleatorio();
  //Contador de intentos
  let intentos = 0;

  //Inciar un flujo hasta que el jugador cancele el juego en cualquier momento
  do {
    //variable para continuar con el bucle
    var continuar = true;

    //prompt para recoger la respuesta del usuario
    let numeroUsuario = prompt("¿Cuál es el numero en el que he pensado?");

    //si el usuario cancela el juego en el prompt se cierra el bucle
    if (numeroUsuario === null) {
      continuar = false;
    } else {
      //En cualquier otro caso
      numeroUsuario = parseInt(numeroUsuario);

      //Si el valor dado no es un numero saca una alerta indicando el error
      if (isNaN(numeroUsuario)) {
        alert("Te has confundido, eso no es un numero");
        //suma un intento al marcador del usuario
        intentos++;
      } else {
        //Si el numero del usuario es igual al numero aleatorio
        if (numAleatorio === numeroUsuario) {
          intentos++;
          /*
          devolvemos el alert con los intentos 
          y preguntamos al usuario si quiere continuar
          */
          alert(`Acertastes en el ${intentos} intento`);
          continuar = confirm("¿Quieres volver a jugar?");
          //si desea continuar jugando generamos un nuevo juego
          if (continuar) {
            /*
              Continuar es igual a falso para  no volver a abrir el bucle ya cerrado
              tras finalizar el juego, puesto que vamos a emplear recursividad para generar
              nuevos juegos
              */
            continuar = false;
            adivinarNumero();
          }
        } else {
          /*
          En el caso de que el numero sea mayor o menor se lo indicamos al usuario
          y volvemos a preguntarle por un nuevo numero
          */
          intentos++;
          let mensaje =
            numAleatorio > numeroUsuario
              ? "El numero es mayor"
              : "El numero es menor";

          alert(mensaje);
        }
      }
    }
  } while (continuar);
}

function jugar() {
  adivinarNumero();
  //este mensaje aparece cuando se cierre el juego
  alert("Juego cancelado");
}

jugar();
