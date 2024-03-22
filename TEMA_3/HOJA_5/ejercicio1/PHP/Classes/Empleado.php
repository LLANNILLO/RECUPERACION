<?php

namespace PHP\Classes;

class Empleado
{
    public function __construct(protected string $nombre, protected int $salario)
    {
        $this->nombre = $nombre;
        $this->salario = $salario;
    }

    public function getSalario()
    {
        return $this->salario;
    }
    public function getNombre()
    {
        return $this->nombre;
    }
}
