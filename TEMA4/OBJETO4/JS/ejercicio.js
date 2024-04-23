var arrayCuentas = [];
alert("Ingrese las cuentas bancarias que desee");
do {
  let nombrePropietario = prompt("Nombre del propietario:");
  let saldoCuenta = parseInt(prompt("Saldo de la cuenta:"));

  var continuar = true;
  if (!isNaN(saldoCuenta)) {
    let nuevaCuenta = new Banco(nombrePropietario, saldoCuenta);
    arrayCuentas.push(nuevaCuenta);
    continuar = confirm("Desea seguir ingresando cuentas bancarias");
  } else {
    alert("Saldo de cuenta no valido");
  }
} while (continuar);

console.log(arrayCuentas);
do {
  var cantidadIngreso = parseInt(
    prompt("Cantidad que deseas ingresar a cada Cuenta")
  );
  if (isNaN(cantidadIngreso)) {
    alert("cantidad a ingresar no valida");
  }
} while (isNaN(cantidadIngreso));
do {
  var cantidadRetiro = parseInt(
    prompt("Cantidad que deseas retirar a cada Cuenta")
  );
  if (isNaN(cantidadRetiro)) {
    alert("cantidad a retirar no valida");
  }
} while (isNaN(cantidadRetiro));

//cremos las variables para guardar los saldos de los clientes acreedores/deudores
var saldoAcreedores = 0;
var saldoDeudores = 0;

document.write("<h1>Cuentas Bancarias</h1>");
arrayCuentas.forEach((cuenta) => {
  cuenta.ingresar(cantidadIngreso);
  cuenta.retirar(cantidadRetiro);

  //obtenemos  el saldo del cliente
  let saldoCliente = cuenta.getSaldo();
  //obtenemos el estado de la cuenta del cliente
  let estadoCuenta = cuenta.estadoCliente();
  //si el saldo es de Deudor, le penalizamos el saldo con un 5%
  if (estadoCuenta === "Deudor") {
    let penalizacion = ((saldoCliente * 5) / 100) * -1;
    cuenta.retirar(penalizacion);
    //obtenemos el saldo actual del cliente con todos sus recortes
    let saldoActual = cuenta.getSaldo();
    saldoDeudores += saldoActual;
  }
  //si el saldo es de Acreedor, le devolvemos los intereses del 10%
  if (estadoCuenta === "Acreedor") {
    if (saldoCliente >= 30000) {
      let interes = (saldoCliente * 10) / 10;
      cuenta.ingresar(interes);
    }
    //obtenemos el saldo actual del cliente con todos sus pluses
    let saldoActual = cuenta.getSaldo();
    saldoAcreedores += saldoActual;
  }
  document.write(cuenta.ver());
});
let resultadoSaldosEstado = `
  <h3>Totales de los saldos Acreedor/Deudor</h3
  <p>Saldo acreedores: ${saldoAcreedores}</p>
  <p>Saldo Deudores: ${saldoDeudores}</p>
   `;

document.write(resultadoSaldosEstado);
console.log(arrayCuentas);
