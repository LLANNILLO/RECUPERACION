class Plaza {
  /**
   *
   * @param {string} plaza
   * @param {boolean} libre
   * @param {Date} horaLlegada
   * @param {string} vehiculo
   */
  constructor(plaza, libre, horaLlegada, vehiculo) {
    this.plaza = plaza;
    this.libre = libre;
    this.horaLlegada = horaLlegada;
    this.vehiculo = vehiculo;
  }

  getPlaza() {
    return this.plaza;
  }
  getLibre() {
    return this.libre;
  }
  setPlaza(codigo) {
    this.plaza = codigo;
  }

  Aparcar(codigo) {
    if (libre) {
      this.libre = false;
      this.setPlaza(codigo);
      this.horaLlegada = new Date();
    } else {
      alert("Esta plaza ya esta ocupada");
    }
  }

  Retirar() {
    if (!this.libre) {
      this.libre = true;
      this.plaza = "plaza";
      this.vehiculo = "";
      this.horaLlegada = "";
    } else {
      alert("Esta plaza ya esta desocupada");
    }
  }

  Calcular() {
    costo;
    switch (this.vehiculo) {
      case "moto":
        costo = 0.3;
        break;
      case "vehiculo":
        costo = 0.5;
        break;
      case "furgoneta":
        costo = 0.8;
        break;
      default:
        break;
    }

    let tiempoSegundos = this.horaLlegada.getTime() / 1000;

    return tiempoSegundos * costo;
  }

  Reservar(fechaLLegada) {
    this.libre = false;
    this.horaLlegada = new Date(fechaLLegada);
  }

  Visualizar() {
    let resultado = `<h2>Plaza de coche</h2>
    
        <p>${this.plaza}</p>
        <p>Fecha Llegada/Ocupacion: ${this.horaLlegada.toDateString()}</p>
        <p>Libre:${this.libre}</p>
        <p>Vehiculo: ${this.vehiculo}</p>
    
    `;

    return resultado;
  }
}

var parking = new Map([
  ["planta-1", ["---", "---", "---", "---", "---", "---", "---", "---"]],
  ["planta-2", ["---", "---", "---", "---", "---", "---", "---", "---"]],
  ["planta-3", ["---", "---", "---", "---", "---", "---", "---", "---"]],
  ["planta-4", ["---", "---", "---", "---", "---", "---", "---", "---"]],
  ["planta-5", ["---", "---", "---", "---", "---", "---", "---", "---"]],
]);

/**
 *
 * @param {string} matricula
 * @param {Date} horaLlegada
 * @param {int} vehiculo
 */
function ocuparPlaza(matricula, horaLlegada, vehiculo) {
  let first = 1;
  parking.forEach((plazas, planta) => {
    if (first !== 0) {
      let tipoVehiculo = vehiculoSeleccion(vehiculo);
      let primera = plazas.indexOf("---");

      let plaza = `${planta}:${matricula}`;

      if (plazas[primera] instanceof Plaza) {
        if (plazas[primera].Aparcar(plaza))
          plazas[primera] = new Plaza(plaza, false, horaLlegada, tipoVehiculo);
      } else {
        plazas[primera] = new Plaza(plaza, false, horaLlegada, tipoVehiculo);
      }
      first--;
      return plazas;
    }
  });
}

//He creado una funcion para que solo le tengas que pasar un valor numerico entre 1-3
//1:moto
//2:turismo
//3:furgoneta
function vehiculoSeleccion(vehiculo) {
  let tipoVehiculo;
  switch (vehiculo) {
    case 1:
      tipoVehiculo = "moto";
      break;
    case 2:
      tipoVehiculo = "turismo";
      break;
    case 3:
      tipoVehiculo = "furgoneta";
      break;
  }

  return tipoVehiculo;
}

ocuparPlaza("9877ABB", new Date(), 1);

function desocuparPlaza(matricula) {
  parking.forEach((plazas, planta) => {
    plazas.forEach((plaza) => {
      if (plaza instanceof Plaza) {
        if (plaza.getPlaza() === `${planta}:${matricula}`) {
          plaza.Retirar();
        }
      }
    });
  });
}

/* Desocupa la plaza con la matricula dada*/ //desocuparPlaza("9877ABB");

console.log(parking);
