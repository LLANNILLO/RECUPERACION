<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reservar plaza</title>
    <link rel="stylesheet" href="./../estilos/estilos.css">
</head>

<body>
    <?php
    require_once __DIR__ . ('/../../vendor/autoload.php');
    require_once __DIR__ . ('/../../helper.php');

    use BD3\Classes\FuncionesBD;

    function mostrar_no_reservadas()
    {
        $arraySinReservar = FuncionesBD::get_plazas_no_reservadas();
        foreach ($arraySinReservar as $plaza) {
            echo "<option value={$plaza->numero}>Asiento {$plaza->numero}($plaza->precio)</option>";
        }
    }

    function reservar_plaza(): string
    {
        $mensaje = "";
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $dni = $_POST['dni'];
            if (validar_dni($dni)) {
                $nombre = $_POST['nombre'];
                $sexo = $_POST['sexo'];
                $numero_plaza = $_POST['asiento'];
                $mensaje = FuncionesBD::reservar_plaza($dni, $nombre, $sexo, $numero_plaza);
            } else {
                $mensaje = 'El dni introducido no es valido';
            }
        }
        return $mensaje;
    }

    $mensaje = reservar_plaza();
    ?>

    <header>
        <a class="volver" href="./../index.php">Volver</a>
    </header>

    <main class="centrar">
        <section class="gestion">
            <h1>Reserva de asiento</h1>
            <form action="" class="reserva_plaza" method="post">
                <label for="nombre">Nombre:</label>
                <input type="text" name="nombre" id="nombre" required>

                <label for="dni">DNI:</label>
                <input type="text" name="dni" id="dni" required>

                <label for="sexo">Sexo:</label>
                <select name="sexo" id="sexo">
                    <option value="H">Hombre</option>
                    <option value="M">Mujer</option>
                </select>

                <label for="asiento">Asiento:</label>
                <select name="asiento" id="asiento">
                    <?php mostrar_no_reservadas() ?>
                </select>

                <input type="submit" name="reservar" value="Reservar">
            </form>
        </section>
        <?php
        if (!empty($mensaje)) {
            echo '<div class="aviso">' . $mensaje . '</div>';
        }
        ?>
    </main>

</body>

</html>