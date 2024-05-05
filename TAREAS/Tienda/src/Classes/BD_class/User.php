<?php


namespace Tienda\Classes\BD_class;

use Tienda\Interfaces\IntRepoUser;
use Tienda\Classes\Usuario;

class User
{

    private IntRepoUser $solidUsuario;

    public function __construct(IntRepoUser $solidUsuario)
    {
        $this->solidUsuario = $solidUsuario;
    }

    public function insert_user(Usuario $usuario)
    {
        return $this->solidUsuario->insert_user($usuario);
    }

    public function get_user(string $contrasena)
    {
        return $this->solidUsuario->get_user($contrasena);
    }
}
