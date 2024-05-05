<?php

namespace Tienda\Classes\BD_class;

use PDO;
use PDOException;
use Tienda\Classes\Usuario;
use Tienda\Interfaces\IntRepoUser;

class PDOUser implements IntRepoUser
{

    public function insert_user(Usuario $usuario): string
    {
        $conexion = BaseDatos::getConnection();
        $mensaje = '';

        try {
            $conexion->beginTransaction();
            $consulta = $conexion->prepare('INSERT INTO usuarios (alias,nombre,contrasena,rol) VALUES(:alias,:nombre,:contrasena,:rol)');

            $valores = [
                ':alias' => $usuario->getAlias(),
                ':nombre' => $usuario->getNombre(),
                ':contrasena' => md5($usuario->getContrasena()),
                ':rol' => $usuario->getRol(),
            ];

            if ($consulta->execute($valores)) {
                $conexion->commit();
            }
        } catch (PDOException $excepcion) {
            if ($excepcion->getCode() === '23000') {
                $mensaje = 'Usted ya posee una cuenta,<br/><a href="./login.php">Logueese</a>';
            } else {
                $mensaje = 'No se pudo insertar satisfactoriamente al usuario';
            }
        }
        $conexion = BaseDatos::closeConnection();

        return $mensaje;
    }

    public function get_user(string $nombre_usuario): ?Usuario
    {
        $resultado = null;
        $conexion = BaseDatos::getConnection();

        try {
            $user_exists = $this->user_exists($nombre_usuario);

            if ($user_exists) {

                $consulta = $conexion->prepare('SELECT alias,nombre,contrasena,rol FROM usuarios WHERE alias = ?');

                $consulta->bindParam(1, $nombre_usuario);
                $consulta->execute();

                $registro = $consulta->fetch(PDO::FETCH_OBJ);
                if ($registro) {
                    // Crear una instancia de Usuario con los datos recuperados de la base de datos
                    $resultado = new Usuario($registro->alias, $registro->nombre, $registro->contrasena, $registro->rol);
                }
            }
        } catch (PDOException $excepcion) {

            return 'Error: ' . $excepcion->getMessage();
        }
        return $resultado;
        $conexion = BaseDatos::closeConnection();
    }

    private function user_exists(string $nombre_usuario): bool
    {
        $conexion = BaseDatos::getConnection();

        try {
            // Preparar la consulta para verificar si el usuario existe
            $consulta = $conexion->prepare('SELECT COUNT(*) AS cantidad FROM usuarios WHERE alias = ?');

            // Asignar el valor del nombre de usuario al parámetro de la consulta
            $consulta->bindParam(1, $nombre_usuario);

            // Ejecutar la consulta
            $consulta->execute();

            // Obtener el resultado de la consulta
            $resultado = $consulta->fetch();

            // Verificar si se encontró al menos un usuario con el nombre dado
            if ($resultado && $resultado['cantidad'] > 0) {
                return true;
            } else {
                return false;
            }
        } catch (PDOException $excepcion) {

            return false;
        }
    }


}
