<?php


namespace App\Classes\BDClasses;
use PDO;
use App\Classes\Familia;

class Funciones{


    public static function getFamilias(): array
    {
        $familias = array();
        $conexion = ConexionBD::getConnection();

        

            $consulta = $conexion->query('SELECT codigo,nombre FROM Familias');

            while($registro = $consulta->fetch(PDO::FETCH_OBJ)){
                
                    $codigo_familia = $registro->codigo;
                    $nombre_familia = $registro->nombre;
    
                    $familia = new Familia($codigo_familia,$nombre_familia);
                    array_push($familias,$familia);
            }

            

        

        return $familias;
    }
    

    public static function getFamilia(string $codigo): null|Familia
    {
        $conexion = ConexionBD::getConnection();

        

            $consulta = $conexion->query('SELECT codigo,nombre FROM Familias WHERE codigo =' . $codigo);

            $registro = $consulta->fetch(PDO::FETCH_OBJ);

            if($registro){
                $codigo_familia = $registro->codigo;
                $nombre_familia = $registro->nombre;

                return new Familia($codigo_familia,$nombre_familia);
            }

        
    }

    public static function verificarUsuario(string $usuario,string $contrasena):bool
    {

    }

}


?>