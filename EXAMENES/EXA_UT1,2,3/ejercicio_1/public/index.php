<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Redimensionar</title>
    <link rel="stylesheet" href="./estilo/estilo.css">
</head>

<body>


    <?php

    include "../vendor/autoload.php";


    use Ejercicio1\Classes\CambiosImagen;

    if (isset($_POST['subir'])) {

        if (isset($_FILES['file']) && $_FILES['file']['error'] == 0) {
            $allowed_extensions = array('jpg', 'jpeg');
            //verificacion de la extension del archivo
            $file_extension = pathinfo($_FILES['file']['name'], PATHINFO_EXTENSION);
            //var_dump($_FILES['file']);

            if (in_array($file_extension, $allowed_extensions)) {

                $upload_dir = __DIR__ . '/imagenes/';
                $file_name = basename($_FILES['file']['name']);
                $upload_path = $upload_dir . $file_name;

                if (move_uploaded_file($_FILES['file']['tmp_name'], $upload_path)) {
                    //Realizar las redimensiones
                }
            }
        }
    }


    ?>

    <h1>Subir Imagen</h1>
    <form class="formulario" action="" method="POST" enctype="multipart/form-data">
        <input type="file" name="file" id="file">
        <input type="submit" value="Subir Imagen" name="subir" id="subir">
    </form>
</body>

</html>