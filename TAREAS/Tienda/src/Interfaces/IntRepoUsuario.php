<?php

namespace Tienda\Interfaces;

use Tienda\Classes\Usuario;

interface IntRepoUsuario{

    public function insertar_usuario(Usuario $usuario) : bool;
    public function verificar_contrasena(string $contrasena) : bool;
    public function es_admin(string $alias) : bool;
    public function borrar(string $alias) : bool;

}