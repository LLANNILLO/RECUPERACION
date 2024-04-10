function cacularMedia() {
  let suma = 0;
  for (let i = 0; i < arguments.length; i++) {
    suma += arguments[i];
  }

  let media = Math.floor(suma / arguments.length);

  return media;
}

console.log(cacularMedia(1, 2, 3, 4));
console.log(cacularMedia(1, 2, 3, 4, 5, 6));
console.log(cacularMedia(1, 2, 3, 4, 5, 6, 7, 8));
console.log(cacularMedia(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
