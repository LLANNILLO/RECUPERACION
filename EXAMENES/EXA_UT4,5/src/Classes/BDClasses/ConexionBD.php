<?php

namespace App\Classes\BDClasses;

use PDO;
use PDOException;

$dotenv = \Dotenv\Dotenv::createImmutable(dirname(__DIR__, 3)); /* /../../variables_conexion.env */
$dotenv->load();

final class ConexionBD
{

    private static ?PDO $connection = null;
    final private function __construct()
    {
    }
    final public static function getConnection(): ?PDO
    {
        try {
            if (!self::$connection) {
                self::$connection = new PDO(
                    dsn: $_ENV['DB_DSN'],
                    username: $_ENV['DB_USERNAME'],
                    password: $_ENV['DB_PW']
                );
                self::$connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            }
        } catch (PDOException $e) {
            echo match ($e) {
                1049 => 'Base de datos no encontrada',
                1045 => 'Acceso denegado',
                2002 => 'Conexion rechazada',
                default => 'Error desconocido',
            };
        }
        return self::$connection;
    }
    public static function closeConnection()
    {
        // Código para cerrar la conexión a la base de datos
        return self::$connection = null;
    }
    private function __clone()
    {
    }
}
