<?php


namespace Tienda\Classes\BD_class;

use Tienda\Interfaces\IntRepoUsuario;
use Tienda\Classes\Usuario;

class User{

    private IntRepoUsuario $solidUsuario;

    public function __construct(IntRepoUsuario $solidUsuario){
        $this->solidUsuario = $solidUsuario;
    }

    public function insertar_usuario(Usuario $usuario){
        return $this->solidUsuario->insertar_usuario($usuario);
    }
    
    public function verificar_contrasena(string $contrasena){
        return $this->solidUsuario->verificar_contrasena($contrasena);
    }
    
    public function es_admin(string $alias){
        return $this->solidUsuario->es_admin($alias);
    }
    public function borrar(string $alias){
        return $this->solidUsuario->borrar($alias);
    }
    


}