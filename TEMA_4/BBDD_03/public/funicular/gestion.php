<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gestion plazas</title>
    <link rel="stylesheet" href="./../estilos/estilos.css">
</head>

<body>
    <?php



    require_once __DIR__ . ('/../../vendor/autoload.php');


    use BD3\Classes\FuncionesBD;



    function mostrar_plazas()
    {

        $plazasFunicular = FuncionesBD::get_plazas();
        echo '<div class=\'plazas\'>';
        foreach ($plazasFunicular as $plaza) {

            echo "<label for=plaza{$plaza->numero}>
        Plaza {$plaza->numero}<input type='text' id='plaza{$plaza->numero}' name='plaza_{$plaza->numero}' value='{$plaza->precio}'>€
        <input type='hidden' name='precio_original[{$plaza->numero}]' value='{$plaza->precio}'> 
        <!-- Campo oculto para almacenar el precio original -->
        </label>";
        }
        echo '</div>';
    }

    function actualzar_precios(): string
    {
        $mensaje = '';
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {

            if (isset($_POST['precio_original'])) {
                foreach ($_POST['precio_original'] as $numero_plaza => $precio_original) {
                    $precio_actualizado = $_POST["plaza_{$numero_plaza}"];
                    if ($precio_actualizado != $precio_original) {
                        // Actualizar el precio en la base de datos
                        $mensaje = FuncionesBD::actualizar_precio_plaza($numero_plaza, $precio_actualizado);
                    }
                }
            }
        }

        return $mensaje;
    }
    ?>

    <header>
        <a class="volver" href="./../index.php">Volver</a>
    </header>
    <main class="centrar">

        <section class="gestion">


            <h1>Gestion de plazas funicular</h1>

            <form action="" class="formulario" method="post">
                <?php mostrar_plazas(); ?>
                <input type="submit" value="Actualizar">
            </form>
        </section>

        <?php
        $mensaje = actualzar_precios();

        if (!empty($mensaje)) {
            echo '<div class= \'aviso\'>' . $mensaje . '</div>';
        }

        ?>
    </main>
</body>

</html>