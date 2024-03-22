let numero;
do {
  numero = prompt("Ingrese un numero mayor de cero");
  numero = parseFloat(numero);
} while (isNaN(numero) || numero <= 0);
