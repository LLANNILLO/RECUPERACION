<?php

namespace Tienda\Classes\BD_class;

use PDO;
use PDOException;
use Tienda\Classes\Familia;

class Funciones
{

    public static function getFamilies(): array
    {

        $familias = array();

        $conexion = BaseDatos::getConnection();
        try {

            $consulta = $conexion->query('SELECT id_familia,nombre_familia FROM familias');

            while ($registro = $consulta->fetch(PDO::FETCH_OBJ)) {
                $id = $registro->id_familia;
                $nombre = $registro->nombre_familia;

                $familia = new Familia($nombre, $id);

                array_push($familias, $familia);
            }
        } catch (PDOException $exception) {
            echo 'Error' . $exception->getMessage();
        }

        $conexion = BaseDatos::closeConnection();

        return $familias;
    }

    public static function getFamilyId(int $id): Familia
    {

        $conexion = BaseDatos::getConnection();

        $consulta = $conexion->query('SELECT id_familia,nombre_familia FROM familias WHERE id_familia = ' . $id);
        if ($registro = $consulta->fetch(PDO::FETCH_OBJ)) {
            $id = $registro->id_familia;
            $nombre = $registro->nombre_familia;

            $familia = new Familia($nombre, $id);
            return $familia;
        }
    }
}
