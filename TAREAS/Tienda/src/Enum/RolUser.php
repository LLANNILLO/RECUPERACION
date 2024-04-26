<?php


namespace Tienda\Enum;

enum RolUser{

    case administrador;
    case usuario;

    public function obtenerRol(): string
    {

        $turno = match ($this) {
            self::administrador => 'administrador',
            self::usuario => 'usuario',
        };

        return $turno;
    }

}