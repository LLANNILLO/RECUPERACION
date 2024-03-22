class Empleado {
  constructor(cargo, diasViaje, estadoCivil) {
    this.cargo = cargo;
    this.diasViaje = diasViaje;
    this.estadoCivil = estadoCivil;
    this.sueldo = this.conIRPF();
  }

  getSueldo() {
    return this.sueldo;
  }

  sueldoBase() {
    let sueldo;
    if (this.cargo === "junior") {
      sueldo = 950;
    } else if (this.cargo === "senior") {
      sueldo = 1200;
    } else {
      sueldo = 1600;
    }
    return sueldo;
  }

  conIRPF() {
    let sueldoViajes = this.diasViaje * 30;
    let sueldo = this.sueldoBase() + sueldoViajes;

    if (this.estadoCivil === "soltero") {
      sueldo *= 0.75;
    } else {
      sueldo *= 0.8;
    }
    return sueldo;
  }
}
