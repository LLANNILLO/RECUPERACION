<?php

namespace BD3\Classes;

use PDO;
use PDOException;
use BD3\Classes\ConexionBD;

class FuncionesBD
{

    private static string $paginaIncio = '<a href=\'./../index.php\'>Pagina principal</a>';

    /**
     * 
     * Funcion para obtener todas las plazas con sus respectivos parametros (numero,reservada,precio)
     */
    public static function get_plazas(): array
    {

        $plazas = [];
        $conexion = ConexionBD::getConnection();

        try {

            $consulta = $conexion->query('SELECT numero,reservada,precio FROM plazas');

            while ($plaza = $consulta->fetch(PDO::FETCH_OBJ)) {

                array_push($plazas, $plaza);
            }

            return $plazas;
        } catch (PDOException $exception) {
            'Mensaje de error:' . $exception->getMessage();
        }
    }


    /**
     * 
     * Funcion creada especificamente para el select del form de reserva para que
     * solo se muestre las plazas sin reserva
     */
    public  static function get_plazas_no_reservadas(): array
    {
        //array de retorno con todas las plazas sin reservar
        $plazasSinReservar = [];
        $conexion = ConexionBD::getConnection();

        try {

            $consulta = $conexion->query('SELECT numero,reservada,precio FROM plazas where not reservada');

            while ($plaza = $consulta->fetch(PDO::FETCH_OBJ)) {
                //añadimos cada plaza en formato objeto dentro del array
                array_push($plazasSinReservar, $plaza);
            }

            return $plazasSinReservar;
        } catch (PDOException $exception) {
            'Mensaje de error:' . $exception->getMessage();
        }
    }


    /**
     * 
     * Funcion para actualizar el precio de una plaza una vez sea modificado por un nuevo precio
     * en el formulario de gestion de plazas
     */
    public static function actualizar_precio_plaza(string $numero_plaza, string $precio): string
    {

        $resultado = "";
        $conexion = ConexionBD::getConnection();

        try {
            $consulta = $conexion->prepare('UPDATE plazas SET precio = ? where numero = ?');
            $consulta->bindParam(1, $precio);
            $consulta->bindParam(2, $numero_plaza);

            /* 
            Si la consulta se ejecuta con exito, devolvera el siguiente texto para introducir en un mensaje
            de aviso para el usuario
            */
            if ($consulta->execute()) {

                $resultado = 'Se han actualizado los precios ' . self::$paginaIncio;
            }

            return $resultado;
        } catch (PDOException $exception) {
            'Error en la actualizacion: ' . $exception->getMessage();
        }
    }

    public static function reservar_plaza(string $dni, string $nombre, string $sexo, string $numero_plaza): string
    {
        $resultado = "";
        $conexion = ConexionBD::getConnection();

        try {

            $consulta = $conexion->prepare('INSERT INTO pasajeros (dni,nombre,sexo,numero_plaza) VALUES(?,?,?,?)');

            $consulta->bindParam(1, $dni);
            $consulta->bindParam(2, $nombre);
            $consulta->bindParam(3, $sexo);
            $consulta->bindParam(4, $numero_plaza);

            if ($consulta->execute()) {
                $resultado = 'Se ha resrvado satisfactoriamente el asiento' . $numero_plaza . self::$paginaIncio;
                self::actualizar_reserva_plaza($numero_plaza);
            }
        } catch (PDOException $exception) {
            if ($exception->getCode() === '23000') {
                $resultado = 'Usted ya es propietario de un boleto en el funicular';
            } else {
                $resultado = 'Error en la reserva: ' . $exception->getMessage();
            }
        }

        return $resultado;
    }


    private static function actualizar_reserva_plaza($numero_plaza): void
    {

        $conexion = ConexionBD::getConnection();

        try {

            // Seleccionar la columna reservada
            $registro = $conexion->query('SELECT reservada FROM plazas where numero = ' . $numero_plaza);
            // Obtener el valor de la columna reservada
            $reserva = $registro->fetch(PDO::FETCH_OBJ)->reservada;

            $conexion->beginTransaction();
            // Verificar si la plaza está reservada o no y actualizar en consecuencia
            if ($reserva === 0) {
                $actualizacion = $conexion->prepare('UPDATE plazas SET reservada = 1 WHERE numero = ?');

                $actualizacion->bindParam(1, $numero_plaza);

                if ($actualizacion->execute()) {
                    $conexion->commit();
                } else {
                    $conexion->rollBack();
                }
            }
        } catch (PDOException $exception) {
            var_dump('Error' . $exception->getMessage());
        }
    }


    public static function llegada_pasajeros(): string
    {
        $mensaje = '';
        $borrado = self::borrar_pasajeros();
        if ($borrado['correcto']) {
            $mensaje = self::reorganizar_reservas();
        } else {
            $mensaje =  $borrado['error'];
        }

        return $mensaje;
    }

    /**
     * 
     * Funcion para eliminar todos los pasajeros de una
     */
    private static function borrar_pasajeros()
    {
        $correcto = false;
        $conexion = ConexionBD::getConnection();
        $mensaje_error = '';
        try {
            $conexion->beginTransaction();
            $consulta = $conexion->exec('DELETE FROM pasajeros');

            if ($consulta === 0) {
                $conexion->rollBack();
                $mensaje_error = 'No habia que hacer cambios ' . self::$paginaIncio;
            } else {
                $correcto = true;
                $conexion->commit();
            }
        } catch (PDOException $exception) {
            $mensaje_error =  'Error a la hora de borrar los pasajeros: ' . $exception->getMessage();
        }

        //retornar el array con los valores del booleano de la funcion y del mensaje de error (si es que falla)
        return ['correcto' => $correcto, 'error' => $mensaje_error];
    }

    /**
     * 
     * Funcion para actualizar las reservas una vez eliminados todos los pasajeros
     */
    private static function reorganizar_reservas()
    {
        $mensaje = "";
        $conexion = ConexionBD::getConnection();

        try {
            $conexion->beginTransaction();
            $consulta = $conexion->prepare('UPDATE plazas SET reservada = 0 WHERE reservada = 1');
            if ($consulta->execute()) {
                $conexion->commit();
                $mensaje = 'Realizado los cambios ' . self::$paginaIncio;
            } else {
                $conexion->rollBack();
            }
        } catch (PDOException $exception) {
            $mensaje = 'Error a la de la reorganizacion: ' . $exception->getMessage();
        }

        return $mensaje;
    }
}
