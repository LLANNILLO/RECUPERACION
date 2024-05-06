var url = "https://www.google.com";
var popup = "1";
var widthAndHeight = "500";

var ejeX = Math.floor(Math.random() * screen.availWidth) - 1;
var ejeY = Math.floor(Math.random() * screen.availHeight) - 1;

window.open(
  url,
  "",
  `
popup=${popup},
width=${widthAndHeight},
height=${widthAndHeight},
left=${ejeX}
top=${ejeY} 
`
);
