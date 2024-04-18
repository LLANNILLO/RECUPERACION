var alcatel = new Telefono(
  "Alcatel",
  "Alcatel 1X",
  "+34 665432216",
  "2MB",
  "0.5mB"
);
var porCable = new Fijo(
  "Panasonic",
  "Por cable",
  "555555555",
  "0.00000001 pb",
  "---",
  "200000 mil"
);
var android = new Movil(
  "samsung",
  "Galaxy s10",
  "614322591",
  "200000GB",
  "12030213TB",
  "1221",
  "android",
  "2000000TB",
  "2000"
);

console.log(alcatel.getInfo());
console.log(porCable.getInfoFijo());
console.log(android.getInfoMovil());
