<?php

namespace Tienda\Interfaces;

use Tienda\Classes\Usuario;

interface IntRepoUser
{

    public function insert_user(Usuario $usuario): string;
    public function get_user(string $contrasena): ?Usuario;
}
