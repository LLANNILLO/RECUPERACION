var Persona = {
  constructor: function (nombre, apellido, salario, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.salario = salario;
    this.edad = edad;
    return this;
  },

  getNombreCompleto: function () {
    return `Nombre: ${this.nombre} ${this.apellido}`;
  },
  getEdad: function () {
    return `Edad: ${this.edad}`;
  },
  getSalario: function () {
    let resultado;
    if (this.salario > 2000) {
      resultado = this.salario;
    } else if (this.salario >= 1000 && this.salario <= 2000) {
      resultado = this.edad > 45 ? this.salario * 1.03 : this.salario * 1.1;
    } else {
      resultado =
        this.edad === 30
          ? 1100
          : this.edad > 30 && this.edad < 45
          ? this.salario * 1.03
          : this.salario * 1.15;
    }
    return resultado;
  },
};
