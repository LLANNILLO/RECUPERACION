var arrayDe100 = [];

var contador = 1;

do {
  let valorNumerico = Math.floor(Math.random() * 10) + 1;
  arrayDe100.push(valorNumerico);
  contador++;
} while (contador <= 100);

function obtenerPares() {
  arrayDe100.forEach((elemento) => {
    elemento % 2 === 0 ? document.write(`<p>${elemento}</p>`) : 0;
  });
}

obtenerPares();
console.log(arrayDe100);
