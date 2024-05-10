<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<?php

    require_once __DIR__ . "/../../vendor/autoload.php";

    use App\Classes\BDClasses\PDOProducto;
    use App\Classes\Produ;
    use App\Classes\Producto;

    $produ = new Produ(new PDOProducto());

    function mostrarProductos(){

        global $produ;

        $productos =$produ->listar();

        foreach($productos as $producto){
            echo "<div>{$producto->getNombre()}<div>";
            echo "<div>{$producto->getDescripcion()}<div>";
            echo "<div>{$producto->getPrecio()}<div>";
            echo "<div>{$producto->getImagen()}<div>";
            echo "<div>{$producto->getFamilia()}<div>";
        }

    }
    mostrarProductos();
?>  
    
</body>
</html>