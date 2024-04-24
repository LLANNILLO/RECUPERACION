<?php

namespace Tienda\Classes\BD_class;



use PDO;
use PDOException;

$dotenv = \Dotenv\Dotenv::createImmutable(dirname(__DIR__, 2)); /*     /../../variables_conexion.env    */
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
                    dsn: $_ENV['BD_DNS'],
                    username: $_ENV['BD_USERNAME'],
                    password: $_ENV['BD_PASSWORD']
                );
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

    private function __clone()
    {
    }
}
