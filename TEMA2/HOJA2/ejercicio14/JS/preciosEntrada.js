var grupo1 = new Entrada(6, "jueves");
var grupo2 = new Entrada(5, "miercoles");
var grupo3 = new Entrada(5, "miercoles", true);

var resultadoEntradas = `<PRE>Los resultados son los siguientes:

    Grupo 1: ${grupo1.getPrecio()}
    Grupo 2: ${grupo2.getPrecio()}
    Grupo 3: ${grupo3.getPrecio()}
    </PRE>`;

document.write(resultadoEntradas);
