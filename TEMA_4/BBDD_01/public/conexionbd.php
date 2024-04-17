<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Liga NBA</title>
    <link rel="stylesheet" href="./estilos/estilo.css">
</head>

<body>
    <?php

    use BD1\FuncionesBD;

    require_once __DIR__ . ('/../vendor/autoload.php');

    function busquedaEquiposDisponibles()
    {
        $equiposDisponibles = FuncionesBD::getEquipos();

        foreach ($equiposDisponibles as $equipo) {
            echo "<option value='{$equipo}'>{$equipo}</option>";
        }
    }

    if (isset($_POST['mostrarEquipos'])) {
        $equipo = $_POST['equiposNBA'];
        $jugadores = FuncionesBD::getJugadoresPorEquipo($equipo);
    }

    function mostrarJugadores(): void
    {
        if (isset($_POST['mostrarEquipos'])) {
            global $jugadores;
            echo "<table class='tabla'>";
            echo "<tr><th>NOMBRE</th><th>PESO</th></tr>";

            foreach ($jugadores as $jugador) {
                echo "<tr><td>{$jugador['nombre']}</td><td><input type='text' value='{$jugador['peso']}' name='pesos[{$jugador['nombre']}]' id='pesos[{$jugador['nombre']}]'> Kg</input></td></tr>";
            }
            echo '</table>';
        }
    }

    function actualizarPesoJugador()
    {
        if (isset($_POST['actualizarPesos'])  && isset($_POST['pesos'])) {
            $equipoSeleccionado = $_POST['equiposNBA'];
            $pesos = $_POST['pesos'];

            foreach ($pesos as $jugador => $peso) {
                FuncionesBD::actualizarPesoJugador($equipoSeleccionado, $jugador, $peso);
            }
        }
    }

    ?>

    <h1>Jugadores de la NBA</h1>
    <hr />

    <form class="formulario" action="" method="post">
        <label for="equiposNBA">
            <ul>
                <li>Equipo <input list="equiposDisponibles" name="equiposNBA" id="equiposNBA" value="<?php if (isset($_POST['equiposNBA'])) echo $_POST['equiposNBA']; ?>" required oninvalid="this.setCustomValidity('Inserte un equipo')"></li>
            </ul>
            <datalist id="equiposDisponibles">
                <?php
                busquedaEquiposDisponibles();
                ?>
            </datalist>
        </label>

        <br />
        <hr />
        <input type="submit" value="Mostrar" name="mostrarEquipos">
    </form>

    <?php
    if (isset($_POST['equiposNBA'])) {
    ?>
        <form action="" method="post">
            <input type="hidden" value="<?php if (isset($_POST['equiposNBA'])) echo $_POST['equiposNBA']; ?>" name="equiposNBA">
            <?php
            mostrarJugadores();
            ?>
            <br />
            <input type="submit" name="actualizarPesos" id="actualizarPesos" value="Actualizar">

        </form>

    <?php
    }
    actualizarPesoJugador();
    ?>
    <hr />
    <h1>Traspasos de jugadores</h1>
    <a href="./traspasosBD.php"><input type="button" value="Traspasos"></a>
</body>

</html>