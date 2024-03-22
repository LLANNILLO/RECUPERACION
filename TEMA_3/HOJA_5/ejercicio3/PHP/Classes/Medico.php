<?php

namespace PHP\Classes;

use PHP\Enums\Turno;

abstract class Medico
{

    protected string $nombre;
    protected int $edad;
    protected Turno $turno;


    public function __construct(string $nombre, int $edad, string $turno)
    {
        $this->nombre = $nombre;
        $this->edad = $edad;
        $this->turno = Turno::turnoMedico($turno);
    }

    public function getNombre(): string
    {
        return $this->nombre;
    }

    public function getEdad(): int
    {
        return $this->edad;
    }

    public function getTurno(): string
    {
        return $this->turno->mostrarValorTurno();
    }

    abstract public function muestra(): string;
}
