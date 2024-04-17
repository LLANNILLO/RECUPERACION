<?php


namespace BD1;

require_once "./Classes/ConexionBD.php";


use PDO;
use PDOException;
use BD1\Clases\ConexionBD;

class FuncionesBD
{

    public static function getEquipos(): array
    {

        $equipos = array();
        $conexion = ConexionBD::getConnection();

        try {
            $consulta = $conexion->prepare("SELECT nombre FROM equipos");

            $consulta->execute();

            while ($fila = $consulta->fetch(PDO::FETCH_ASSOC)) {
                $equipos[] = $fila['nombre'];
            }
        } catch (PDOException $e) {

            echo 'Error al obtener los equipos: ' . $e->getMessage();
        }


        return $equipos;
    }

    public static function getJugadoresPorEquipo($equipo): array
    {

        $jugadores = array();
        $conexion = ConexionBD::getConnection();

        try {
            $consulta = $conexion->prepare("SELECT nombre,peso FROM jugadores WHERE nombre_equipo = :ne");

            $consulta->bindParam(':ne', $equipo);

            $consulta->execute();

            while ($fila = $consulta->fetch(PDO::FETCH_ASSOC)) {
                $jugadores[] = [
                    'nombre' => $fila['nombre'],
                    'peso' => $fila['peso']
                ];
            }
        } catch (PDOException $e) {

            echo "Error al obtener los jugadores del equipo {$equipo}: " . $e->getMessage();
        }

        return $jugadores;
    }


    public static function actualizarPesoJugador($equipo, $jugador, $nuevoPeso)
    {
        $conexion = ConexionBD::getConnection();

        try {
            if ($conexion !== null) {
                // Obtener el peso actual del jugador
                $consultaPesoActual = $conexion->prepare("SELECT peso FROM jugadores WHERE nombre_equipo = :equipo AND nombre = :jugador");
                $consultaPesoActual->bindParam(':equipo', $equipo);
                $consultaPesoActual->bindParam(':jugador', $jugador);

                if ($consultaPesoActual->execute()) {
                    $resultadoPesoActual = $consultaPesoActual->fetch(PDO::FETCH_ASSOC);
                    $pesoActual = $resultadoPesoActual['peso'];

                    // Verificar si el peso ha cambiado
                    if ($nuevoPeso != $pesoActual) {
                        // Preparar la consulta SQL para actualizar el peso del jugador
                        $consultaActualizar = $conexion->prepare("UPDATE jugadores SET peso = :nuevoPeso WHERE nombre_equipo = :equipo AND nombre = :jugador");
                        $consultaActualizar->bindParam(':equipo', $equipo);
                        $consultaActualizar->bindParam(':jugador', $jugador);
                        $consultaActualizar->bindParam(':nuevoPeso', $nuevoPeso, PDO::PARAM_INT);
                        $consultaActualizar->execute();

                        // Mostrar mensaje solo si el peso ha cambiado
                        echo "<p class='aviso'>El peso de {$jugador} ha sido actualizado correctamente.</p>";
                    }
                } else {
                    echo "<p class='aviso'>El peso de {$jugador} no se pudo actualizar</p>";
                }
            }
        } catch (PDOException $e) {
            // Manejar el error
            echo 'Error al actualizar el peso del jugador: ' . $e->getMessage();
        }
    }

    public static function eliminarJugadorEquipo($equipo, $jugador)
    {
        $conexion = ConexionBD::getConnection();

        try {
            $conexion->beginTransaction();

            // Obtener el código del jugador
            $consultaCodigoJugador = $conexion->query("SELECT codigo FROM jugadores WHERE nombre_equipo = '{$equipo}' AND nombre = '{$jugador}'");
            $codigoJugador = $consultaCodigoJugador->fetch(PDO::FETCH_ASSOC);

            // Borrar estadísticas del jugador
            $consultaBorrarEstadisticas = $conexion->prepare('DELETE FROM estadisticas WHERE jugador = :jugador');
            $consultaBorrarEstadisticas->bindParam(':jugador', $codigoJugador['codigo']);
            $consultaBorrarEstadisticas->execute();

            // Borrar al jugador
            $consultaBorrarJugador = $conexion->prepare('DELETE FROM jugadores WHERE nombre_equipo = :equipo AND nombre = :jugador');
            $consultaBorrarJugador->bindParam(':equipo', $equipo, PDO::PARAM_STR);
            $consultaBorrarJugador->bindParam(':jugador', $jugador, PDO::PARAM_STR);

            // Verificar si se ejecutó la consulta correctamente
            if ($consultaBorrarJugador->execute()) {
                // Commit de la transacción
                $conexion->commit();
                echo "<p class='aviso'> El jugador {$jugador} fue dado de baja en el equipo {$equipo}";
            } else {
                // Revertir la transacción en caso de error
                $conexion->rollBack();
                echo "<p class='aviso'> Error al dar de baja al jugador {$jugador} en el equipo {$equipo}";
            }
        } catch (PDOException $e) {
            // Revertir la transacción en caso de error
            $conexion->rollBack();
            echo 'Error al eliminar al jugador del equipo: ' . $e->getMessage();
        }
    }


    public static function anadirNuevoJugador($equipo, $nombre, $procedencia, $altura, $peso, $posicion)
    {
        $conexion = ConexionBD::getConnection();

        try {
            $conexion->beginTransaction();

            // Obtener el valor máximo actual de la columna codigo
            $consultaMaxCodigo = $conexion->query('SELECT MAX(codigo) as max_codigo FROM jugadores');
            $resultadoMaxCodigo = $consultaMaxCodigo->fetch(PDO::FETCH_ASSOC);
            $codigo = $resultadoMaxCodigo['max_codigo'] + 1;

            // Preparar la consulta para agregar el nuevo jugador
            $consultaAgregarJugador = $conexion->prepare('INSERT INTO jugadores(codigo, nombre, procedencia, altura, peso, posicion, nombre_equipo) VALUES(:codigo, :nombre, :procedencia, :altura, :peso, :posicion, :equipo)');
            $consultaAgregarJugador->bindParam(':codigo', $codigo);
            $consultaAgregarJugador->bindParam(':nombre', $nombre);
            $consultaAgregarJugador->bindParam(':procedencia', $procedencia);
            $consultaAgregarJugador->bindParam(':altura', $altura, PDO::PARAM_INT);
            $consultaAgregarJugador->bindParam(':peso', $peso, PDO::PARAM_INT);
            $consultaAgregarJugador->bindParam(':posicion', $posicion);
            $consultaAgregarJugador->bindParam(':equipo', $equipo);

            // Ejecutar la consulta
            if ($consultaAgregarJugador->execute()) {
                $conexion->commit();
                echo "<p class='aviso'>El jugador {$nombre} fue añadido al equipo {$equipo}";
            } else {
                $conexion->rollBack();
                echo "<p class='aviso'>Error al añadir al jugador {$nombre} al equipo {$equipo}";
            }
        } catch (PDOException $e) {
            $conexion->rollBack();
            echo 'Error al añadir al jugador al equipo: ' . $e->getMessage();
        }
    }
}
