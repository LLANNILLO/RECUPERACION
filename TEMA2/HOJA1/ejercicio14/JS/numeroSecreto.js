var NumeroSecreto = {
  constructor: function () {
    this.numero = this.generarNumeroSecreto();
    this.intentos = 0;
  },

  getNumero: function () {
    return this.numero;
  },

  getIntentos: function () {
    return this.intentos;
  },

  generarNumeroSecreto: function () {
    return Math.floor(Math.random() * 100) + 1;
  },

  acierto: function (intento) {
    this.intentos++;
    return this.numero === intento;
  },

  mayorMenor: function (intento) {
    if (this.numero === intento) {
      return "¡Adivinaste el número!";
    } else if (this.numero > intento) {
      return "El número es mayor.";
    } else {
      return "El número es menor.";
    }
  },
};
