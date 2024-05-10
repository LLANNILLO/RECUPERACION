<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario</title>

</head>
<body>
    
<?php

require_once __DIR__ . "/../../vendor/autoload.php";

use App\Classes\BDClasses\Funciones;



    //La gestion de los errores
    /*
        error=1: Por favor, rellene todos los datos
        error=2: No se puede procesar el archivo
        error=3: El archivo no tiene una extension valida
        error=4: Por favor,introduce un precio válido
        error=5: No se ha podido guardar el producto en la base de datos
    
    */

    if(isset($_GET['error'])){
        $error = $_GET['error'];
        if($error === 1){
            echo '<p>Por favor, rellene todos los datos</p>';
        }elseif($error === 2){
            echo '<p>No se puede procesar el archivo</p>';
        }elseif($error === 3){
            echo '<p>El archivo no tiene una extension valida</p>';
        }elseif($error === 4){
            echo '<p>Por favor,introduce un precio válido</p>';
        }elseif($error === 5){
            echo '<p>No se ha podido guardar el producto en la base de datos</p>';
        }
            

    }

    if(isset($_GET['succes'])){
        echo '<p>Exito al insertar el nuevo objeto';
    }

    function clasesProductos(){

        $familias = Funciones::getFamilias();

        foreach ($familias as $familia) {
            echo "<option value={$familia->getCodigo()}>{$familia->getNombreFamilia()}</option>";
        }

    }


?>

    <header>
        <h1>Formulario para agregar producto</h1>
    </header>
    <form action="./procesa.php" method="post" enctype="multipart/form-data">

        <label for="nombre">Nombre</label>
        <input type="text" id="nombre" name="nombre">
        <label for="descripcion">Descripcion</label>
        <input type="text" id="descripcion" name="descripcion">
        <label for="precio">Precio</label>
        <input type="text" id="precio" name="precio">
        <label for="imagen">Imagen</label>
        <input type="file" id="imagen" name="imagen">

        <select name="familia" id="familia">
            <?php
                clasesProductos();
            ?>
        </select>

        <input type="submit" value="Insertar">
    </form>


</body>
</html>