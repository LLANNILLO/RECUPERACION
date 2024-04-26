<?php


namespace Tienda\Classes;

use PDO;
use PDOException;
use Tienda\Classes\BD_class\ConexionBD;
use Tienda\Enum\RolUser;


class Usuario
{

    protected string $alias;
    protected string $nombre;
    protected string $contrasena;
    protected RolUser $rol;


    public function __construct(string $alias, string $nombre, string $contrasena)
    {

        $this->alias = $alias;
        $this->nombre = $nombre;
        $this->contrasena = $contrasena;
        $this->rol = RolUser::usuario;
    }

    //Metodos getter del usuario

    public function getAlias(){
        return $this->alias;
    }

    public function getNombre(){
        return $this->nombre;
    }

    public function getContrasena(){
        return $this->contrasena;
    }

    public function getRol(){
        return $this->rol->obtenerRol();
    }

    /* 
    Las funciones:
        #retornar_contrasena_BD() 
        #insertar_usuario_BD()
    han de ser descritas en una nueva clase denominada PDOUsuario.php
    dentro de ./Classes/BD_class
    */

    public function retornar_contrasena_BD($contrasena) : string
    {
        $contrasena = "";
        $conexion = ConexionBD::getConnection();

        try{

            $consulta = 'SELECT contrasena FROM usuarios where alias = :alias or where nombre = :nombre';
            
            $valores = [
                ':alias' => $this->getAlias(),
                ':nombre'=> $this->getNombre(),
            ];

            foreach($valores as $clave => $valor){
                $cambio = str_replace($clave,$valor,$consulta);
                $consulta = $cambio;
            }
            
            $realizarConsulta = $conexion->query($consulta);

            while($registro = $realizarConsulta->fetch(PDO::FETCH_OBJ)){
                $contrasena = $registro->contrasena;
            }   

            return $contrasena;

        }catch(PDOException $excepcion){
            "Error a la hora de iniciar sesion : {$excepcion->getMessage()}";
        }

    }

    public function insertar_usuario_BD()
    {

        $conexion = ConexionBD::getConnection();


        try{
            //comenzar una transaccion
            $conexion->beginTransaction();

            //preparar la consulta de insercion de usuario
            $consulta = $conexion->prepare('INSERT INTO usuarios(alias,nombre,contrasena,rol) VALUES(:alias,:nombre,:contrasena,:rol)');

            //indentificar los valores del objeto usuario
            $valores = [
            ':alias' => $this->getAlias(),
            ':nombre'=> $this->getNombre(),
            'contrasena' => $this->getContrasena(),
            'rol' => $this->getRol(),
            ];

            //realizar la insercion y comitar los cambios en el exito
            if($consulta->execute($valores)){

                $conexion->commit();

            }



        }catch(PDOException $excepcion){
            $conexion->rollBack();
            "Error a la hora de registrarse : {$excepcion->getMessage()}";
        }

    }
}
