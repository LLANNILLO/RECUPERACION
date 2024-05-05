<?php


namespace Tienda\Enum;

enum RolUser
{

    case administrador;
    case usuario;

    public function obtenerRol(): string
    {

        $rolUsuario = match ($this) {
            self::administrador => 'administrador',
            self::usuario => 'usuario',
        };

        return $rolUsuario;
    }
    public static function setRol(string $rol)
    {
        $rolUsuario = match ($rol) {
            'administrador' => self::administrador,
            'usuario' => self::usuario,
        };

        return $rolUsuario;
    }
}
