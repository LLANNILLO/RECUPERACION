<?php

namespace Tienda\Classes\BD_class;

use Tienda\Classes\Usuario;
use Tienda\Interfaces\IntRepoUsuario;

class PDOUsuario implements IntRepoUsuario{

    public function insertar_usuario(Usuario $usuario): bool
    {
        
    }

    public function verificar_contrasena(string $contrasena): bool
    {
        
    }


    public function es_admin(string $alias): bool
    {
        
    }

    public function borrar(string $alias): bool
    {
        
    }

}