<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Traspasos</title>
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



    if (isset($_POST['mostrarJugador'])) {
        $equipo = $_POST['equiposNBA'];
        $jugadores = FuncionesBD::getJugadoresPorEquipo($equipo);
    }

    function busquedaJugadoresEquipo()
    {
        if (isset($_POST['mostrarJugador'])) {
            global $jugadores;

            foreach ($jugadores as $jugador) {
                echo "<option value='{$jugador['nombre']}'>{$jugador['nombre']}</option>";
            }
        }
    }

    ?>
    <a href="./conexionBD.php"><input type="button" value="Volver"></a>
    <h1>Traspasos de jugadores</h1>

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
            <input type="submit" value="mostrar" name="mostrarJugador" id="mostrarJugador">
        </label>

        <br />
        <hr />
    </form>

    <?php
    if (isset($_POST['equiposNBA'])) {
    ?>
        <form class="formulario" action="" method="post">
            <input type="hidden" value="<?php if (isset($_POST['equiposNBA'])) echo $_POST['equiposNBA']; ?>" name="equiposNBA">
            <h2>Baja de jugadores</h2>
            <label for="jugadorBaja">
                <ul>
                    <li>Baja de jugador <input list="jugadoresEquipo" name="jugadorBaja" id="jugadorBaja" value=" <?php if (isset($_POST['jugadorBaja'])) echo $_POST['jugadorBaja']; ?>"></li>
                    <datalist id="jugadoresEquipo">
                        <?php
                        busquedaJugadoresEquipo();
                        ?>
                    </datalist>
                </ul>
            </label>
            <hr />
            <h2>Datos del nuevo Jugador</h2>
            <hr />
            <label for="nuevoJugador">
                <ul>
                    <li>Nombre: <input type="text" name="nombreNuevoJugador" id="nombreNuevoJugador"></li>
                    <li>Procedencia: <input type="text" name="procedenciaNuevoJugador" id="procedenciaNuevoJugador"></li>
                    <li>Altura: <input type="text" name="alturaNuevoJugador" id="alturaNuevoJugador" pattern="[0-9]*"></li>
                    <li>Peso: <input type="text" name="pesoNuevoJugador" id="pesoNuevoJugador" pattern="[0-9]*"></li>
                    <li>Posicion: <input list="listaPosiciones" name="posicionNuevoJugador" id="posicionNuevoJugador"></li>
                    <datalist id="listaPosiciones">
                        <option value="C">C</option>
                        <option value="C-F">C-F</option>
                        <option value="F">F</option>
                        <option value="F-C">F-C</option>
                        <option value="F-G">F-G</option>
                        <option value="G">G</option>
                        <option value="G-F">G-F</option>
                    </datalist>
                </ul>
            </label>
            <br />
            <input type="submit" value="Realizar Traspaso" name="traspasar" id="traspasar">
        </form>

    <?php
    }

    if (isset($_POST['traspasar'])) {
        $equipoSeleccionado = $_POST['equiposNBA'];
        $jugadorBaja = $_POST['jugadorBaja'];
        $nombreNuevoJugador = $_POST['nombreNuevoJugador'];
        $procedenciaNuevoJugador = $_POST['procedenciaNuevoJugador'];
        $alturaNuevoJugador = $_POST['alturaNuevoJugador'];
        $pesoNuevoJugador = $_POST['pesoNuevoJugador'];
        $posicionNuevoJugador = $_POST['posicionNuevoJugador'];

        FuncionesBD::eliminarJugadorEquipo($equipoSeleccionado, $jugadorBaja);

        FuncionesBD::anadirNuevoJugador($equipoSeleccionado, $nombreNuevoJugador, $procedenciaNuevoJugador, $alturaNuevoJugador, $pesoNuevoJugador, $posicionNuevoJugador);
    }



    ?>
</body>

</html>