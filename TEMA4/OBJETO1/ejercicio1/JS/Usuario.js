let usuario = {
  nombre: "",
  contrasena: "",
  constructor: function (nombre, contrasena) {
    this.nombre = nombre;
    this.contrasena = contrasena;
  },

  validar: function (contrasenaDada) {
    let resultado = contrasenaDada === this.contrasena;
    return resultado;
  },
};

var nombre = prompt("Nombre de usuario");
var contrasena = prompt("Establecer contraseña");
usuario.constructor(nombre, contrasena);

do {
  let contrasenaDada = prompt("Introduce de nuevo la contraseña");
  var fallado = usuario.validar(contrasenaDada);
  fallado ? alert("Iniciando sesion") : alert("Contraseña no valida");
} while (!fallado);
