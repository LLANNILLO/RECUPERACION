<?php

require_once __DIR__ . "/../../vendor/autoload.php";

use App\Classes\BDClasses\PDOProducto;
use App\Classes\BDClasses\Funciones;
use App\Classes\Produ;
use App\Classes\Producto;
use App\Classes\Imagen;

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $produ = new Produ(new PDOProducto());
    $rellenado = true;

    foreach ($_POST as $valor) {
        if (validarRequerido($valor)) $rellenado = false;
    }

    if ($rellenado) {
        $nombre = $_POST['nombre'];
        $descripcion = $_POST['descripcion'];
        $precio = $_POST['precio'];
        $imagen = $_FILES['imagen'];
        $familia = $_POST['familia'];


        if (validarSubidaFichero($imagen)) {
            //error=3
            if (validarFormatoImagen($imagen["tmp_name"])) {

                if (validarNumerico($precio)) {

                    $nombre_imagen = $imagen['name'];
                    $url_imagen = './../img/' . $nombre_imagen;
                    //objeto de Imagen
                    $imagen_objeto = new Imagen($nombre_imagen, $url_imagen);
                    //objeto de Familia
                    $familia_objeto = Funciones::getFamilia($familia);
                    //objeto Producto
                    $producto = new Producto($nombre, $descripcion, $precio, $imagen_objeto, $familia_objeto);
                    
                    //move_uploaded_file();
                    $resultado_creacion = $produ->crear($producto);

                    if ($resultado_creacion) {
                        redireccionar('./formulario.php?succes=1');
                        //error=5
                    } else {
                        redireccionar('./formulario.php?error=5');
                    }
                    //error=4
                } else {
                    redireccionar('./formulario.php?error=4');
                }
                //error=3
            } else {
                redireccionar('./formulario.php?error=3');
            }
            //error=2
        } else {
            redireccionar('./formulario.php?error=2');
        }
        //error=1
    } else {
        redireccionar('./formulario.php?error=1');
    }
}
