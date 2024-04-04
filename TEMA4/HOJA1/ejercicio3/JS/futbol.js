var liga = new Map([
  [
    "madrid",
    (datos = new Map([
      ["nombre", "madrid"],
      ["puntos", 75],
      ["PG", 23],
      ["PE", 6],
      ["PP", 1],
      ["GF", 66],
      ["GC", 20],
    ])),
  ],
  [
    "barcelona",
    (datos = new Map([
      ["nombre", "barcelona"],
      ["puntos", 67],
      ["PG", 20],
      ["PE", 7],
      ["PP", 3],
      ["GF", 61],
      ["GC", 34],
    ])),
  ],
  [
    "girona",
    (datos = new Map([
      ["nombre", "girona"],
      ["puntos", 65],
      ["PG", 20],
      ["PE", 5],
      ["PP", 5],
      ["GF", 62],
      ["GC", 36],
    ])),
  ],
  [
    "atletico",
    (datos = new Map([
      ["nombre", "atletico"],
      ["puntos", 58],
      ["PG", 18],
      ["PE", 4],
      ["PP", 8],
      ["GF", 56],
      ["GC", 35],
    ])),
  ],
  [
    "atletic",
    (datos = new Map([
      ["nombre", "atletic"],
      ["puntos", 56],
      ["PG", 16],
      ["PE", 8],
      ["PP", 6],
      ["GF", 50],
      ["GC", 28],
    ])),
  ],
  [
    "real sociedad",
    (datos = new Map([
      ["nombre", "real sociedad"],
      ["puntos", 49],
      ["PG", 13],
      ["PE", 10],
      ["PP", 7],
      ["GF", 43],
      ["GC", 31],
    ])),
  ],
  [
    "betis",
    (datos = new Map([
      ["nombre", "betis"],
      ["puntos", 42],
      ["PG", 10],
      ["PE", 12],
      ["PP", 8],
      ["GF", 36],
      ["GC", 36],
    ])),
  ],
  [
    "valencia",
    (datos = new Map([
      ["nombre", "valencia"],
      ["puntos", 41],
      ["PG", 11],
      ["PE", 8],
      ["PP", 10],
      ["GF", 32],
      ["GC", 32],
    ])),
  ],
  [
    "osasuna",
    (datos = new Map([
      ["nombre", "osasuna"],
      ["puntos", 39],
      ["PG", 11],
      ["PE", 6],
      ["PP", 13],
      ["GF", 36],
      ["GC", 43],
    ])),
  ],
  [
    "villareal",
    (datos = new Map([
      ["nombre", "villareal"],
      ["puntos", 38],
      ["PG", 10],
      ["PE", 8],
      ["PP", 12],
      ["GF", 48],
      ["GC", 53],
    ])),
  ],
]);

var puntos = 0;
var equipoGanador;

liga.forEach((equipoDatos) => {
  let puntosEquipo = equipoDatos.get("puntos");
  if (puntosEquipo > puntos) {
    equipoGanador = equipoDatos;
    puntos = puntosEquipo;
  }
});

console.log(equipoGanador);
