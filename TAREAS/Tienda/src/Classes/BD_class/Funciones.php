<?php

namespace Tienda\Classes\BD_class;

use PDO;
use PDOException;
use Tienda\Classes\Familia;

class Funciones{

    public static function getFamilies(): array
    {

        $familias = array();

        $conexion = BaseDatos::getConnection();
        try {

            $consulta = $conexion->query('SELECT id_familia,url_familia FROM familias');

            while ($registro = $consulta->fetch(PDO::FETCH_OBJ)) {
                $id = $registro->id_familia;
                $url = $registro->url_familia;

                $familia = new Familia($url,$id);

                array_push($familias, $familia);
            }
        } catch (PDOException $exception) {
            echo 'Error' . $exception->getMessage();
        }

        $conexion = BaseDatos::closeConnection();
        
        return $familias;
    }

    public function getFamiliaId() : 
}



?>