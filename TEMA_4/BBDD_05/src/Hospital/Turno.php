<?php

namespace BD5\Hospital;

class Turno
{
    protected string $id_turno;
    protected string $valor;


    public function __construct($id_turno, $valor)
    {
        $this->id_turno = $id_turno;
        $this->valor = $valor;
    }

    public function getValor(): string
    {

        return $this->valor;
    }

    public function toString(): string
    {

        $resultado = '<h3>Turno Medico</h3>' . "<p>{$this->getValor()}</p>";

        return $resultado;
    }
}
