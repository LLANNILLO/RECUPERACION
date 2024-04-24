class Fecha {
  /**
   *
   * @param {string} fecha1
   * @param {string} fecha2
   */
  constructor() {
    do {
      var repetir = true;
      let fecha1 = prompt("Escribe una fecha en formato aaaa-MM-dd hh:mm:ss");
      let fecha2 = prompt("Escribe otra fecha en formato aaaa-MM-dd hh:mm:ss");

      if (
        fecha1 === "" ||
        fecha2 === null ||
        fecha2 === "" ||
        fecha2 === null
      ) {
        alert("No se han introducido fechas");
      } else {
        if (this.testFecha(fecha1) && this.testFecha(fecha2)) {
          this.fecha1 = new Date(fecha1);
          this.fecha2 = new Date(fecha2);
          repetir = false;
        } else {
          alert("las fechas no son validas");
        }
      }
    } while (repetir);
  }

  getTiempo() {
    return [this.fecha1.getTime(), this.fecha2.getTime()];
  }
  /**
   *
   * @param {int} miliFecha1
   * @param {int} miliFecha2
   * @returns
   */
  fechaMayor(miliFecha1, miliFecha2) {
    return miliFecha1 > miliFecha2;
  }

  difFechas() {
    let miliFecha1 = this.getTiempo()[0];
    let miliFecha2 = this.getTiempo()[1];

    let tiempoEntreFechas;
    if (this.fechaMayor(miliFecha1, miliFecha2)) {
      tiempoEntreFechas = miliFecha1 - miliFecha2;
    } else {
      tiempoEntreFechas = miliFecha2 - miliFecha1;
    }

    let diasEntreFechas = tiempoEntreFechas / 1000 / 60 / 60 / 24;
    return diasEntreFechas;
  }

  maxFechas() {
    let miliFecha1 = this.getTiempo()[0];
    let miliFecha2 = this.getTiempo()[1];

    let fechaProxima;
    if (this.fechaMayor(miliFecha1, miliFecha2)) {
      fechaProxima = this.fecha1;
    } else {
      fechaProxima = this.fecha2;
    }

    return fechaProxima;
  }

  /**
   *
   * @param {string} fecha
   */
  testFecha(fecha) {
    let resultado = false;
    let fechaSubString = fecha.slice(0, 10);
    let horasSubString = fecha.slice(11, fecha.length);

    let valoresFecha = fechaSubString.split("-");
    let valoresHoras = horasSubString.split(":");

    let anyo = valoresFecha[0];
    let mes = valoresFecha[1];
    let dia = valoresFecha[2];
    let horas = valoresHoras[0];
    let minutos = valoresHoras[1];
    let segundos = valoresHoras[2];

    if (
      anyo.length === 4 &&
      mes.length === 2 &&
      dia.length === 2 &&
      horas.length === 2 &&
      minutos.length === 2 &&
      segundos.length === 2
    ) {
      if (
        +anyo > 999 &&
        +mes <= 31 &&
        dia <= 31 &&
        +horas <= 24 &&
        minutos <= 60 &&
        segundos <= 60
      ) {
        resultado = true;
      }
    }

    return resultado;
  }

  ayerFecha() {
    const milisegundosDia = 24 * 60 * 60 * 1000;
    let miliFecha1 = this.getTiempo()[0] - milisegundosDia;
    let miliFecha2 = this.getTiempo()[1] - milisegundosDia;

    this.fecha1.setTime(miliFecha1);

    this.fecha2.setTime(miliFecha2);
  }

  mañanaFecha() {
    const milisegundosDia = 24 * 60 * 60 * 1000;
    let miliFecha1 = this.getTiempo()[0] + milisegundosDia;
    let miliFecha2 = this.getTiempo()[1] + milisegundosDia;

    this.fecha1.setTime(miliFecha1);
    this.fecha2.setTime(miliFecha2);
  }
}

var fecha1 = "2024-04-24 03:24:12";
var fecha2 = "197-01-01";
var fechas = new Fecha(fecha1, fecha2);

console.log(`La diferencia entre las fechas es: ${fechas.difFechas()}`);
console.log(`La fecha mayor es ${fechas.maxFechas()}`);
fechas.ayerFecha();
console.log(fechas);
fechas.mañanaFecha();
console.log(fechas);
