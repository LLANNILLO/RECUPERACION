class Banco {
  /**
   *
   * @param {string} nombre
   * @param {int} saldo
   */
  constructor(nombre, saldo) {
    this.numeroCuenta = generarNumeroCuenta();
    this.nombre = nombre;
    this.saldo = saldo;
  }

  /**
   *
   * @param {lolo} saldoIngresado
   */
  ingresar(saldoIngresado) {
    this.saldo += saldoIngresado;
  }

  /**
   *
   * @param {int} saldoRetirado
   */
  retirar(saldoRetirado) {
    this.saldo -= saldoRetirado;
  }

  getSaldo() {
    return this.saldo;
  }
  ver() {
    let resultado = `
    <h2>Cuenta Bancaria ${this.numeroCuenta}</h2>
    <p>Nombre propietario: ${this.nombre}</p>
    <p>Saldo remanente: ${this.saldo}</p>
    <p>Estado cuenta: ${this.estadoCliente()}</p>
    `;
    return resultado;
  }

  estadoCliente() {
    let estado;
    let saldo = this.getSaldo();
    if (saldo === 0) {
      estado = "Nulo";
    } else if (saldo < 0) {
      estado = "Deudor";
    } else {
      estado = "Acreedor";
    }
    return estado;
  }
}

function generarNumeroCuenta() {
  let numero = Math.floor(
    Math.random() * (9999999999 - 1111111111 + 1) + 1111111111
  );
  return numero;
}
