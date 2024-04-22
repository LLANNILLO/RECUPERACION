class Flechita {
  constructor(fecha) {
    this.fecha = new Date(fecha);
    this.anno = this.fecha.getFullYear();
    this.mes = this.fecha.getMonth() + 1; // Se suma 1 porque los meses van de 0 a 11 en JavaScript
    this.dia = this.fecha.getDate();
  }

  // Método para sumar días a la fecha
  sumarDias(dias) {
    this.fecha.setDate(this.fecha.getDate() + dias);
    this.anno = this.fecha.getFullYear();
    this.mes = this.fecha.getMonth() + 1;
    this.dia = this.fecha.getDate();
  }

  // Método para restar meses a la fecha
  restarMeses(meses) {
    this.fecha.setMonth(this.fecha.getMonth() - meses);
    this.anno = this.fecha.getFullYear();
    this.mes = this.fecha.getMonth() + 1;
    this.dia = this.fecha.getDate();
  }

  // Método para visualizar la fecha
  ver() {
    console.log(`Fecha: ${this.anno}-${this.mes}-${this.dia}`);
  }
}
