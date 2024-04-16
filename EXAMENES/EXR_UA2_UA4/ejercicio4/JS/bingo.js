//Funcion para generar cartones de juego
function generarCartones() {
  //variables para ambos cartones
  let carton1 = [];
  let carton2 = [];

  //contador para controlar la generacion de cartones
  let contador = 0;
  //variable para controlar los valores repetidos
  let valoresPrimerCarton = undefined;
  do {
    //si la longitud del primer carton sigue siendo 0 sera el primero en rellenarse
    if (carton1.length === 0) {
      //recogemos los valores empleados en la generacion del primer carton
      valoresPrimerCarton = crearCarton(carton1);
    } else {
      /*
        volvemos a ejecutar la funcion crearCarton(array:), pero esta vez empleamos
        el array con los valores repetidos para no volverlos a usar
        */
      crearCarton(carton2, valoresPrimerCarton);
    }
    contador++;
  } while (contador < 2);

  //devolvemos los dos cartones generados
  return [carton1, carton2];
}

/**
 * Funcion para generar los valores aleatorios de los cartones
 *
 * @param {array} carton
 */

function crearCarton(carton, valoresObtenidos = null) {
  //si no se pasa ningun array de valores ya usados, se inicializa el array vacio
  if (valoresObtenidos === null) {
    valoresObtenidos = [];
  }
  //recorremos cada una de las filas que debe tener el carton
  for (let f = 0; f < 4; f++) {
    //craemos un array para insertar los valores de la fila
    let valores = [];
    //recorremos cada una de las columnas que debe tener cada fila
    for (let col = 0; valores.length < 5; col++) {
      let nuevoValor = Math.floor(Math.random() * 90) + 1;
      /*
      si el valor generado no existe 
      lo introducimos al array:valores y al array:valoresObtenidos
      */
      if (!valoresObtenidos.includes(nuevoValor)) {
        valores.push(nuevoValor);
        valoresObtenidos.push(nuevoValor);
      }
    }
    /*
    Cuando se haya rellenado cada valor de la fila se añade al carton seleccionado 
    en la funcion
    */
    carton.push(valores);
  }
  //Devolvemos los valores ya usados para no repetirlos en el 2º carton
  return valoresObtenidos;
}

//Funcion para realizar el juego del bingo
function bingo(carton1, carton2) {
  //contamos el numero de valores que concuerden con los valores de cada array
  let contadorCarton1 = 0;
  let contadorCarton2 = 0;

  let continuar = true;
  //creamos un array con los valores generados a la hora de jugar el bingo
  let valoresBingo = [];
  do {
    //generamos y añadimos un nuevo valor al array:valoresBingo
    let nuevoValor = Math.floor(Math.random() * 90) + 1;
    valoresBingo.push(nuevoValor);

    //Por cada numero del carton comprobamos si es igual al valor generado
    for (let f = 0; f < carton1.length; f++) {
      for (let col = 0; col < carton1[f].length; col++) {
        let ciertoCarton1 = carton1[f][col] === nuevoValor;
        let ciertoCarton2 = carton2[f][col] === nuevoValor;

        //En caso de ser asi sumamos uno al contador del carton favorecido
        ciertoCarton1 ? contadorCarton1++ : 0;
        ciertoCarton2 ? contadorCarton2++ : 0;
      }
    }

    /*
    Como cada carton solo tiene 20 numeros, el primer contador en llegar a 20
    ganará la partida
    */
    if (contadorCarton1 === 20 && contadorCarton2 < 20) {
      alert("El ganador es el carton 1");
      //Emplear la funcion para documentar todo en el documento
      documentarBingoGanador(carton1, valoresBingo);
      continuar = false;
    }
    if (contadorCarton1 < 20 && contadorCarton2 === 20) {
      alert("El ganador es el carton 2");
      documentarBingoGanador(carton2, valoresBingo);
      continuar = false;
    }
  } while (continuar);
}

/*
Funcion para generar la documentacion de los valores del carton ganador y 
los valores creados en durante el bingo
*/
function documentarBingoGanador(carton, valoresBingo) {
  document.write("<h3>Valores del carton</h3>");
  carton.forEach((fila) => {
    document.write(`<p>${fila.join("|")}</p>`);
  });
  document.write("<h3>Valores obtenidos bingo</h3>");
  valoresBingo.forEach((valor) => {
    document.write(`<span>${valor} </span>`);
  });
}

var cartones = generarCartones();

carton1 = cartones[0];
carton2 = cartones[1];

bingo(carton1, carton2);

/**
 *
 * @param {array} carton
 * @param {array} valoresBingo
 */
