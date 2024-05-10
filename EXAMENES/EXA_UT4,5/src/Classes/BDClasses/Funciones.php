<?php


namespace App\Classes\BDClasses;
use PDO;
use PDOException;
use App\Classes\Familia;

class Funciones{


    public static function getFamilias(): array
    {
        $familias = array();
        $conexion = ConexionBD::getConnection();

        try{

            $consulta = $conexion->query('SELECT codigo,nombre FROM Familias');

            while($registro = $consulta->fetch(PDO::FETCH_OBJ)){
                
                    $codigo_familia = $registro->codigo;
                    $nombre_familia = $registro->nombre;
    
                    $familia = new Familia($codigo_familia,$nombre_familia);
                    array_push($familias,$familia);
            }

            

        }catch(PDOException $e){
            echo 'Error al procesar las clase del producto ' . $e->getMessage(); 
        }

        return $familias;
    }
    

    public static function getFamilia(string $codigo): null|Familia
    {
        $conexion = ConexionBD::getConnection();

        try{

            $consulta = $conexion->query('SELECT codigo,nombre FROM Familias WHERE codigo =' . $codigo);

            $registro = $consulta->fetch(PDO::FETCH_OBJ);

            if($registro){
                $codigo_familia = $registro->codigo;
                $nombre_familia = $registro->nombre;

                return new Familia($codigo_familia,$nombre_familia);
            }

        }catch(PDOException $e){
            echo 'Error al procesar la clase del producto ' . $e->getMessage(); 
        }
    }

    public static function verificarUsuario(string $usuario,string $contrasena):bool
    {

    }

}


?>