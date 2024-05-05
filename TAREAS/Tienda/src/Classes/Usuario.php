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


    public function __construct(string $alias, string $nombre, string $contrasena, string $rol)
    {

        $this->alias = $alias;
        $this->nombre = $nombre;
        $this->contrasena = $contrasena;
        $rolUsuario = RolUser::setRol($rol);
        $this->rol = $rolUsuario;
    }

    //Metodos getter del usuario

    public function getAlias()
    {
        return $this->alias;
    }

    public function getNombre()
    {
        return $this->nombre;
    }

    public function getContrasena()
    {
        return $this->contrasena;
    }

    public function getRol()
    {
        return $this->rol->obtenerRol();
    }
}
