<?php

namespace PHP\Classes;

class Encargado extends Empleado
{


    public function __construct(string $nombre, int $salario)
    {
        parent::__construct($nombre, $salario);
    }

    public function getSalario()
    {
        $salarioBase = $this->salario;

        $salarioEncargado = $salarioBase * 1.15;
        return $salarioEncargado;
    }
}
