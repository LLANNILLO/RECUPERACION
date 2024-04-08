var arrayFollowers = [
  "Yaiza_96",
  "El_tito_PAPADOPOULOS",
  "Neymar Jr.",
  "Lupe.365",
  "Youpsico",
];

var Followers = new Set(arrayFollowers);

alert("Vas a perder a 2 followers");
Followers.delete("Neymar Jr.");
Followers.delete("Lupe.365");

alert("Vas a agregar el nombre de 7 nuevos seguidores");

for (let i = 0; i < 7; i++) {
  var cierto = true;
  do {
    nuevoFollow = prompt("¿Nombre del nuevo Follower?");
    if (!Followers.has(nuevoFollow)) {
      Followers.add(nuevoFollow);
      cierto = false;
    } else {
      alert("No es valido repetir seguidores");
    }
  } while (cierto);
}

console.log(Followers);
