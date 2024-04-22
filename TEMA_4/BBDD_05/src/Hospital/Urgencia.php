<?php

namespace BD5\Hospital;

use BD5\Enum\Turno;

class Urgencia extends Medico
{

    protected string $unidad;

    public function __construct(string $codigo, string $nombre, int $edad, Turno $turno, string $unidad)
    {
        parent::__construct($codigo, $nombre, $edad, $turno);

        $this->unidad = $unidad;
    }


    //metodos getter Medico
    public function getUnidad()
    {
        return $this->unidad;
    }

    //metodos setter Medico

    public function setUnidad(string $unidad)
    {
        $this->unidad = $unidad;
    }

    //metodo toString Medico

    public function toString()
    {

        $resultado = parent::toString();

        $resultado .= "<p>Numero de pacientes; {$this->getUnidad()}</p>";

        return $resultado;
    }
}
