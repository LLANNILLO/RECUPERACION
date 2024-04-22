<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mostrar libros</title>
    <link rel="stylesheet" href="./../estilos/estilos.css">
</head>

<body>

    <?php


    require_once __DIR__ . ('/../../vendor/autoload.php');

    use BD2\Classes\FuncionesBD;

    function mostrar_libros()
    {

        $libros = FuncionesBD::get_libros();

        echo '<table class=\'tabla\'>';

        echo '<tr><th>Titulo</th><th>Año Edicion</th><th>Fecha Adquisicion</th><th>Precio</th></tr>';

        foreach ($libros as $libro) {

            echo "<tr><td>{$libro->titulo}</td><td>{$libro->anyo_edicion}</td><td>{$libro->fecha_adquisicion}</td><td>{$libro->precio}</td><td><button type='submit' class='eliminar' name='borrar' value='{$libro->titulo}'>Borrar</button></td>
            <input type=hidden name=titulo value={$libro->titulo}></tr>";
        }

        echo '</table>';
    }

    function eliminar_libro(): string
    {
        $mensaje = '';
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {

            if (isset($_POST['borrar'])) {

                $libro = $_POST['borrar'];
                $mensaje = FuncionesBD::borrar_libro($libro);
            }
        }

        return $mensaje;
    }


    $mensaje = eliminar_libro();


    ?>

    <header>
        <a class="volver" href="./../index.php">Volver</a>
    </header>

    <main class="centrar">
        <section class="gestion">
            <h1>Libros en la biblioteca</h1>
            <form action="" method="post">
                <?php mostrar_libros(); ?>
            </form>
        </section>



        <?php

        if (!empty($mensaje)) {
            echo '<span class=\'aviso\'>' .  $mensaje . '</span>';
        }
        ?>



    </main>

</body>

</html>