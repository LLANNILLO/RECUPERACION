var nombre = prompt("Nombre de la persona");
var apellidos = prompt("Apellidos de la persona");
var edad = parseInt(prompt("Edad de la persona"));
var salario = parseFloat(prompt("Salario de la persona"));

// Crear una instancia de Persona
var persona = Persona.constructor(nombre, apellidos, edad, salario);

console.log(persona);

console.log(persona.getNombreCompleto());

console.log(persona.getEdad());

console.log(persona.getSalario());
