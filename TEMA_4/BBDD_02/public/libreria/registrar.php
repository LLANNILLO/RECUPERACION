<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registrar libro</title>
    <link rel="stylesheet" href="./../estilos/estilos.css">
</head>

<body>


    <?php

    require_once __DIR__ . ('/../../vendor/autoload.php');

    use BD2\Classes\FuncionesBD;



    function registro_libro()
    {

        $mensaje = "";
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {

            if (isset($_POST['registrar'])) {

                $titulo = $_POST['titulo'];
                $precio = $_POST['precio'];
                $ano_edicion = $_POST['ano_edicion'];
                $fecha_adquisicion = $_POST['fecha_adquisicion'];

                $mensaje = FuncionesBD::anadir_libro($titulo, $ano_edicion, $precio, $fecha_adquisicion);
            }
        }



        return $mensaje;
    }

    $mensaje = registro_libro();


    ?>
    <header>
        <a class="volver" href="./../index.php">Volver</a>
    </header>

    <main class="centrar">
        <section class="gestion">
            <h1>Registrar libro</h1>
            <div class="registrar">
                <form class="reserva_plaza" action="" method="post">

                    <label for="">Titulo</label>
                    <input type="text" name="titulo" id="titulo" required>
                    <label for="">Precio</label>
                    <input type="text" name="precio" id="precio" required>
                    <label for="">Año edicion</label>
                    <input type="number" id="ano_edicion" name="ano_edicion" max="9999">
                    <label for="">Fecha adquisicion</label>
                    <input type="date" name="fecha_adquisicion" id="fechaAdquisicion" required>

                    <input type="submit" value="Registrar" name="registrar">

                </form>
            </div>
        </section>


        <?php

        if (!empty($mensaje)) {
            echo '<span class=\'aviso\'>' . $mensaje . '</span>';
        }
        ?>
    </main>

</body>

</html>