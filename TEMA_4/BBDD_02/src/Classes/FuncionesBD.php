<?php

namespace BD2\Classes;

use PDO;
use PDOException;
use BD2\Classes\ConexionBD;
use DateTime;

class FuncionesBD
{

    private static string $paginaIncio = '<a href=\'./../index.php\'>Pagina principal</a>';

    public static function get_libros(): array
    {

        $libros = [];
        $conexion = ConexionBD::getConnection();

        try {

            $consulta = $conexion->query('SELECT titulo,anyo_edicion,precio,fecha_adquisicion FROM LIBROS');

            while ($libro = $consulta->fetch(PDO::FETCH_OBJ)) {
                array_push($libros, $libro);
            }
        } catch (PDOException $exception) {
            array_push($libros, 'Error a la hora de sacar los valores' . $exception->getMessage());
        }

        return $libros;
    }

    public static function anadir_libro(string $titulo, string $publicacion, string $precio, string $fecha): string
    {
        $mensaje = '';
        $conexion = ConexionBD::getConnection();

        try {
            // Consulta preparada para verificar si el libro ya está registrado
            $consulta_existencia = $conexion->prepare('SELECT COUNT(*) FROM libros WHERE titulo = ?');
            $consulta_existencia->execute([$titulo]);
            $existe_libro = $consulta_existencia->fetchColumn();

            if ($existe_libro == 0) {
                // Consulta preparada para insertar el nuevo libro
                $consulta = $conexion->prepare('INSERT INTO libros(titulo, anyo_edicion, precio, fecha_adquisicion) VALUES (?, ?, ?, ?)');
                // Bind de los parámetros
                $consulta->bindParam(1, $titulo);
                $consulta->bindParam(2, $publicacion);
                $consulta->bindParam(3, $precio);
                $consulta->bindParam(4, $fecha);

                // Ejecutar la consulta
                if ($consulta->execute()) {
                    $mensaje = 'Libro añadido con éxito.';
                }
            } else {
                $mensaje = 'El libro que intenta registrar ya fue registrado.';
            }
        } catch (PDOException $exception) {
            $mensaje = 'Error al registrar el nuevo libro: ' . $exception->getMessage();
        }

        return $mensaje;
    }

    public static function borrar_libro(string $titulo)
    {
        $mensaje = '';
        $conexion = ConexionBD::getConnection();

        try {
            $conexion->beginTransaction();
            $borrar = $conexion->prepare('DELETE FROM libros WHERE titulo = ?');
            $borrar->bindParam(1, $titulo);

            if ($borrar->execute()) {
                $conexion->commit();
                $mensaje = 'Borrado con exito el libro ' . $titulo . ', ' . FuncionesBD::$paginaIncio;
            }
        } catch (PDOException $exception) {
            $conexion->rollBack();
            $mensaje = 'Error al eliminar el libro: ' . $exception->getMessage();
        }

        return $mensaje;
    }
}
