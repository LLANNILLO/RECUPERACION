var mazda = new Auto("MX-5", "rojo", 189);

//arrancamos el coche para poder alterar la velocidad
mazda.arrancar();
//vemos que se inicia a 0
console.log(mazda.verVelocidad());
//aumentamos 180 Km/h
mazda.acelerar(180);
//aumentamos otros 180 Km/h
mazda.acelerar(180);

//vemos que su velocidad es de 189 Km/h (máxima)
console.log(mazda.verVelocidad());
//frenamos
mazda.frenar(50);
//vemos que esta a 0 Km/h
console.log(mazda.verVelocidad());
//apagamos
mazda.arrancar();
console.log(mazda.verVelocidad());
