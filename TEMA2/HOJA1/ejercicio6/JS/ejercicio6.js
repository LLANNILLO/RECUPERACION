var antesSuma = 1;
var despuesSuma = 1;
var antesResta = 1;
var despuesResta = 1;
var i = 1;
while (i < 3) {
  console.log(`Iteracion ${i}`);
  console.log(`Varaiable antes suma: ${++antesSuma}`);
  console.log(`Varaiable despues suma: ${despuesSuma++}`);
  console.log(`Varaiable antes resta: ${--antesResta}`);
  console.log(`Varaiable despues resta: ${despuesResta--}`);
  i++;
}
