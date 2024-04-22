class Fechita {
  /**
   *
   * @param {string} fecha
   */
  constructor(fecha) {
    this.fecha = fecha;
    this.ano = parseInt(fecha.slice(0, 4));
    this.mes = parseInt(fecha.slice(5, 7));
    this.dia = parseInt(fecha.slice(8));
  }

  sumaDias(suma) {
    const diasEnMes = this.obtenerDiasEnMes(this.ano, this.mes);
    if (this.dia + suma > diasEnMes) {
      alert("Has excedido los días que tiene el mes");
    } else {
      this.dia += suma;
    }
  }

  restaMeses(meses) {
    if (this.mes - meses < 1) {
      alert("Has excedido el límite de los meses que puedes restar");
    } else {
      this.mes -= meses;
    }
  }

  obtenerDiasEnMes(ano, mes) {
    return new Date(ano, mes, 0).getDate();
  }

  ver() {
    return `
    ${this.ano}-${this.mes < 10 ? "0" + this.mes : this.mes}-${
      this.dia < 10 ? "0" + this.dia : this.dia
    }
    `;
  }
}
