<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Llegada destino</title>
    <link rel="stylesheet" href="./../estilos/estilos.css">
</head>

<body>
    <?php
    require_once __DIR__ . ('/../../vendor/autoload.php');

    use BD3\Classes\FuncionesBD;


    function llegada()
    {
        $mensaje = '';
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {

            if (isset($_POST['llegada'])) {

                $mensaje = FuncionesBD::llegada_pasajeros();
            }
        }
        return $mensaje;
    }

    $mensaje = llegada();

    ?>
    <header>
        <a class="volver" href="./../index.php">Volver</a>
    </header>
    <main class="centrar">
        <section class="gestion">
            <h1>Llegada</h1>
            <form action="" class="formulario" method="post">
                <label for="llegada"></label>
                <input type="submit" name="llegada" value="Llegada">
            </form>
        </section>
        <?php
        if (!empty($mensaje)) {
            echo '<span class=\'aviso\'>' . $mensaje . '</span>';
        }
        ?>
    </main>
</body>

</html>