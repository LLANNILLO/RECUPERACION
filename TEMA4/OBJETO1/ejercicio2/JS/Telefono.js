let telefono = {
  CPU: "",
  RAM: "",
  almacenamiento: "",
  ancho: "",
  alto: "",
  numCamaras: "",
  dueno: "",

  constructor: function (
    CPU,
    RAM,
    almacenamiento,
    ancho,
    alto,
    numCamaras,
    dueno
  ) {
    this.CPU = CPU;
    this.RAM = RAM;
    this.almacenamiento = almacenamiento;
    this.ancho = ancho;
    this.alto = alto;
    this.numCamaras = numCamaras;
    this.dueno = dueno;
  },

  toString: function () {
    let cadena = `
    Telefono Movil de: ${this.dueno}\n
    CPU:${this.CPU} \n
    RAM:${this.RAM} \n
    Almacenamiento:${this.almacenamiento} \n
    Ancho:${this.ancho} \n
    Alto:${this.alto} \n
    Numero de camaras:${this.numCamaras} \n
    `;
    return cadena;
  },
};

telefono.constructor("12", "8", "120", "2000", "8000", "12000", "Juan");
console.log(telefono.toString());
telefono.constructor("12", "8", "120", "2000", "8000", "12000", "Raquel");
console.log(telefono.toString());
telefono.constructor("12", "8", "120", "2000", "8000", "12000", "Luis");
console.log(telefono.toString());
telefono.constructor("12", "8", "120", "2000", "8000", "12000", "Miguel");
console.log(telefono.toString());
