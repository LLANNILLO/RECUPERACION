<?php

namespace BD3\Classes;

use PDO;
use PDOException;
use BD3\Classes\ConexionBD;

class FuncionesBD
{
    public static function getPlazas(): array
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

    public function actualizarPreciosPlaza(array $plazas){


        $conexion = ConexionBD::getConnection();

        try{

            $consulta = $conexion->prepare('UPDATE precio FROM plazas where numero = ?');
            

        }catch(PDOException $exception){
            'Error en la actualizacion: ' . $exception->getMessage();
        }

    }
}
